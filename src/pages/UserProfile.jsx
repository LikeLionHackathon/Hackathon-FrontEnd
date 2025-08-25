// import profileCard from '../assets/Profile_card.svg';
import Poster_01 from '../assets/poster_01.svg';
import AddExhibitionModal from '../components/exhibition/AddExhibitionModal';
import { useState } from 'react';
import ellipsis from '../assets/Ellipse.svg';
import Tag from '../components/ai/Tag';
import artist_tag from '../assets/artist_tag.svg';
import glow_glow from '../assets/glow_glow.svg';
import glow_shine from '../assets/glow_shine.svg';
import glow_spark from '../assets/glow_spark.svg';
import glow_bloom from '../assets/glow_bloom.svg';
import { useNavigate } from 'react-router-dom';
import { GoBackButton } from '../components/GoBackButton';
import like_outline from '../assets/like_outline.svg';
import like_purple from '../assets/like_purple.svg';
import Poster16 from '../assets/posters/Poster16.png';
import { useEffect } from 'react';
import { getOnGoingExhibition } from '../apis/exhibition';
import { getUserCard } from '../apis/user';

export const UserProfile = ({ exhibitionCount = 1 }) => {
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState(0);
  const [openAdd, setOpenAdd] = useState(false);
  const [liked, setLiked] = useState(false);
  const [onGoingExhibition, setOnGoingExhibition] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  {/* 유저 정보 불러오기 로직 */}
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await getUserCard();
        setUserInfo(res);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInfo();
  }, []);
  console.log(userInfo);

  {
    /* 진행중인 전시 불러오기 로직 */
  }
  useEffect(() => {
    // 2-1. userInfo에 값이 들어왔는지 먼저 확인합니다.
    if (userInfo && userInfo.userId) {
      const fetchAllOngoingExhibitions = async () => {
        try {
          // 2-2. 이제 안전하게 userInfo.userId를 사용할 수 있습니다.
          const res = await getOnGoingExhibition(userInfo.userId); 
          console.log('진행중인 전시 응답: ', res);
          setOnGoingExhibition(res);
        } catch (err) {
          console.log('진행중인 전시 로딩 실패: ', err);
        }
      };
      fetchAllOngoingExhibitions();
    }
  }, [userInfo]);

  const handleLikeToggle = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const levels = [null, glow_glow, glow_shine, glow_spark];
  const badgeSrc =
    exhibitionCount >= 4 ? glow_bloom : (levels[exhibitionCount] ?? glow_glow);
    
  return (
    <div>
      <div className="flex flex-row w-full justify-center">
        <GoBackButton />
        <div className="flex mt-[12px] justify-center text-[16px] font-semibold text-center leading-[150%]"></div>
      </div>
      {(onGoingExhibition.length > 0) ? (<div> 받아오고있음</div>) : (<div> 안받아오고있음</div>  )}
      {/* 상단 마이페이지, 프로필카드, 나의 전시 */}
      <div className="flex flex-row items-center gap-2.5 justify-center mt-[26px]">
        {/* <img src={profileCard} alt="프로필카드" /> */}

        {/* 프로필 카드부분 */}
        <div className="w-[168px] h-[320px] rounded-[15px] border-lightpurple01 border-solid border-[2px] bg-lightpurple02">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[94px] h-[94px] rounded-full bg-[#7c7c7c] mt-[14px] border-[#FFF] border-[5px]">
              {/* <img src="" alt="" /> 프로필 사진 들어갈 자리 */}
            </div>
            <p className="text-[14px] font-[800] mt-[14px] z-10">이름</p>
            <div className="w-[52px] h-[12px] shrink-0 rounded-[7.5px] bg-[#E1E1FE] -my-3 z-0" />
            <div className="w-[32px] h-[16px] mt-[26px] z-5">
              <img src={artist_tag} alt="" />
            </div>

            <div className="flex w-[136px] h-[60px] shrink-0">
              <img src={badgeSrc} alt="exhibition glow badge" />
            </div>

            <div className="w-[130px] h-[1px] bg-grey06 mt-[10px]" />

            {liked ? (
              <div
                className="flex flex-row mx-[18px] gap-[14px] mt-[12px] justify-center items-center bg-lightpurple01 w-[134px] h-[48px] rounded-[5px]"
                onClick={handleLikeToggle}
              >
                <img src={like_purple} alt="" />
                <p className="text-[14px] text-purple_main font-[600] leading-1.5">
                  좋아요 {likeCount}
                </p>
              </div>
            ) : (
              <div
                className="flex flex-row mx-[18px] gap-[12px] mt-[12px] justify-center items-center bg-white w-[134px] h-[48px] rounded-[5px] "
                onClick={handleLikeToggle}
              >
                <img src={like_outline} alt="" />
                <p className="text-[14px] font-[600] text-darkgrey01 leading-1.5">
                  좋아요 {likeCount}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex  w-[1px] h-[320px] bg-grey05 justify-center" />
        <div className="flex flex-col items-center gap-1.5 h-[340px]">
          <p className="text-darkgrey01 font-14px leading-[150%]">
            진행중인 전시
          </p>
          <div className="w-[168px] h-[300px] shrink-0 border-lightpurple01 border-[1px] rounded-[15px] flex flex-col items-center">
            <p className="text-[12px] font-light text-darkgrey01 mt-[134px]">
              아직 진행중인 전시가 없어요
            </p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="px-5">
        <div className="w-full h-[1px] bg-grey06 mt-[13px]" />
      </div>

      <div className="px-5">
        <p className="text-[20px] font-bold leading-[125%] not-italic mt-[13px]">
          전시
        </p>
      </div>

      {/* 구분선 */}
      <div className="px-5">
        <div className="w-full h-[1px] bg-grey06 mt-[13px]" />
      </div>

      <div className="px-5">
        <div className="w-full flex flex-row gap-[15px] h-[136px] mt-[8px]">
          <img src={Poster16} alt="" className="w-[92px] h-[120px]" />
          <div className="w-[256px] h-[120px] flex flex-col mt-[20px]">
            <p className="text-[16px] font-[600] leading-1.5">[Proto]</p>
            <p className="text-[14px] text-darkgrey03 font-[500] leading-[21px] mt-[24px]">
              2025.04.30 <br /> - 2025.05.07
            </p>
            <div className="w-full h-[1px] bg-grey06 mt-[34px]" />
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="w-full flex flex-row gap-[15px] h-[136px] mt-[8px]">
          <img src={Poster16} alt="" className="w-[92px] h-[120px]" />
          <div className="w-[256px] h-[120px] flex flex-col mt-[20px]">
            <p className="text-[16px] font-[600] leading-1.5">[Proto]</p>
            <p className="text-[14px] text-darkgrey03 font-[500] leading-[21px] mt-[24px]">
              2025.04.30 <br /> - 2025.05.07
            </p>
            <div className="w-full h-[1px] bg-grey06 mt-[34px]" />
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="w-full flex flex-row gap-[15px] h-[136px] mt-[8px]">
          <img src={Poster16} alt="" className="w-[92px] h-[120px]" />
          <div className="w-[256px] h-[120px] flex flex-col mt-[20px]">
            <p className="text-[16px] font-[600] leading-1.5">[Proto]</p>
            <p className="text-[14px] text-darkgrey03 font-[500] leading-[21px] mt-[24px]">
              2025.04.30 <br /> - 2025.05.07
            </p>
            <div className="w-full h-[1px] bg-grey06 mt-[34px]" />
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="w-full flex flex-row gap-[15px] h-[136px] mt-[8px]">
          <img src={Poster16} alt="" className="w-[92px] h-[120px]" />
          <div className="w-[256px] h-[120px] flex flex-col mt-[20px]">
            <p className="text-[16px] font-[600] leading-1.5">[Proto]</p>
            <p className="text-[14px] text-darkgrey03 font-[500] leading-[21px] mt-[24px]">
              2025.04.30 <br /> - 2025.05.07
            </p>
            <div className="w-full h-[1px] bg-grey06 mt-[34px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
