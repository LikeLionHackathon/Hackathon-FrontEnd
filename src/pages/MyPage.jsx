// import profileCard from '../assets/Profile_card.svg';
import AddExhibitionModal from '../components/exhibition/AddExhibitionModal';
import { useEffect, useState } from 'react';
import ellipsis from '../assets/Ellipse.svg';
import Tag from '../components/ai/Tag';
import artist_tag from '../assets/artist_tag.svg';
import glow_glow from '../assets/glow_glow.svg';
import glow_shine from '../assets/glow_shine.svg';
import glow_spark from '../assets/glow_spark.svg';
import glow_bloom from '../assets/glow_bloom.svg';
import { useNavigate } from 'react-router-dom';
import { GoBackButton } from '../components/GoBackButton';
import { getExhibitionLike, getRating } from '../apis/exhibition';
import starImg from '../assets/star.svg';
import { getUserPreferences } from '../apis/userPreference';
import { getArtistExhibition, getUserCard, sendIsArtist } from '../apis/user';
import profile from '../assets/profile.svg';

export const MyPage = () => {
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState(false);
  const [likeList, setLikeList] = useState([]);
  const [visitedList, setVisitedList] = useState([]);
  const [userTags, setUserTags] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [exhibitionList, setExhibitionList] = useState([]);
  // const [myExh, setMyExh] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await getUserCard();
        setUserInfo(res);
        //console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInfo();
  }, []);
  console.log(userInfo);

  const handleAddExhibition = () => {
    // 작가 탭으로 이동 + (선택) 도착 시 전시등록 모달 자동 오픈 신호 전달
    navigate('/mainpage', { state: { tab: 'artist', autoOpenAdd: true } });
  };

  const handleGoToProfile = () => {
    navigate(`/userprofile`);
  };

  useEffect(() => {
    const fetchExhibitionLike = async () => {
      try {
        const res = await getExhibitionLike();
        //console.log("성공: ", res);
        setLikeList(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchExhibitionLike();
  }, []);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const res = await getRating();
        //console.log("전시 성공: ", res);
        setVisitedList(res);
        console.log(visitedList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRating();
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await getUserPreferences();
        //console.log(res);
        setUserTags(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTags();
  }, []);
  //console.log(userTags);

  // useEffect(() => {
  //   const fetchArtistExhibition = async () => {
  //     try {
  //       const res = await getArtistExhibition();
  //       //console.log(res);
  //       setExhibitionList(res);
  //       setMyExh(true);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchArtistExhibition();
  // }, []);
  //console.log(exhibitionList);

  const handleBack = () => {
    navigate(-1);
  };

  if (!userInfo) {
    return (
      <div className="mx-auto w-full max-w-[450px] text-center mt-20">
        Loading...
      </div>
    );
  }

  const handleChange = async () => {
    try {
      const res = await sendIsArtist();
      //console.log(res);
      setUserInfo(res);
    } catch (err) {
      console.log(err);
    }
  };

  const levels = [null, glow_glow, glow_shine, glow_spark];
  const badgeSrc =
    userInfo.exhibitionCount >= 4
      ? glow_bloom
      : (levels[userInfo.exhibitionCount] ?? glow_glow);
  return (
    <div>
      <div className="flex flex-row w-full justify-center">
        <GoBackButton onClick={handleBack} />
        <div className="flex mt-[12px] justify-center text-[16px] font-semibold text-center leading-[150%]">
          마이페이지
        </div>
      </div>

      {userInfo.userType === 'VIEWER' ? (
        <div className="flex flex-col px-[20px]">
          <div className="border-b-1 border-grey05 flex flex-col gap-[16px] py-[10px]">
            <div>
              <img src={profile} alt="profile" className="w-[96px]" />
            </div>
            <div className="flex flex-row items-center pl-[12px] justify-between">
              <div>
                <p className="font-extrabold text-[14px]">
                  {userInfo.username}
                </p>
                <p className="text-[14px] text-darkgrey03">{userInfo.email}</p>
              </div>
              <div>
                <button
                  className="w-[156px] h-[42px] rounded-[5px] bg-lightpurple02 text-purple01 text-[12px] font-extrabold"
                  onClick={handleChange}
                >
                  작가로 활동 시작하기
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* 상단 마이페이지, 프로필카드, 나의 전시 */}
          <div className="flex flex-row items-center gap-2.5 justify-center">
            {/* <img src={profileCard} alt="프로필카드" /> */}

            {/* 프로필 카드부분 */}
            <div className="w-[168px] h-[320px] rounded-[15px] border-lightpurple01 border-solid border-[2px] bg-lightpurple02">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[94px] h-[94px] rounded-full bg-[#7c7c7c] mt-[14px] border-[#FFF] border-[5px]">
                  {/* <img src="" alt="" /> 프로필 사진 들어갈 자리 */}
                </div>
                <p className="text-[14px] font-[800] mt-[14px] z-10">
                  {userInfo.username}
                </p>
                <div className="w-[52px] h-[12px] shrink-0 rounded-[7.5px] bg-[#E1E1FE] -my-3 z-0" />
                <div className="w-[32px] h-[16px] mt-[26px] z-5">
                  <img src={artist_tag} alt="" />
                </div>

                <div className="flex w-[136px] h-[60px] shrink-0">
                  <img src={badgeSrc} alt="exhibition glow badge" />
                </div>

                <div className="w-[130px] h-[1px] bg-grey06 mt-[10px]" />
                <div className="flex flex-row mx-[18px] gap-[38px] mt-[12px]">
                  <div
                    className="flex flex-col items-center"
                    onClick={() => navigate('/myexhibition')}
                  >
                    <p className="text-[12px] text-[#7C7C7C] font-[400] leading-normal">
                      내 전시
                    </p>
                    <p>{userInfo.exhibitionCount}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[12px] text-[#7C7C7C] font-[400] leading-normal">
                      좋아요
                    </p>
                    <p>{userInfo.likeCount}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  w-[1px] h-[320px] bg-grey05 justify-center" />
            <div className="flex flex-col items-center gap-1.5 h-[340px]">
              <p className="text-darkgrey01 font-14px leading-[150%]">
                나의 전시
              </p>
              <div className="w-[168px] h-[300px] shrink-0 border-lightpurple01 border-[1px] rounded-[15px] flex flex-col items-center">
                <p className="text-[12px] font-light text-darkgrey01 mt-[108px]">
                  아직 등록된 전시가 없어요
                </p>
                <button
                  className="w-[104px] h-[70px] flex justify-center shrink-0 items-center cursor-pointer"
                  onClick={handleAddExhibition}
                >
                  <p className="text-purple_main text-[12px]">
                    <span className="underline decoration-purple_main underline-offset-2 decoration-0.5">
                      작가페이지
                    </span>
                    에서 <br />
                    전시 시작하기
                  </p>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 구분선 */}
      <div className="w-screen h-[8px] bg-grey04 mt-[24px] mb-[12px]" />

      <div className="px-5">
        <p className="text-[20px] font-bold leading-[125%] not-italic">
          방문한 Glow 전시
        </p>
      </div>

      <div
        className="[filter:drop-shadow(0_0_16px_rgba(0,0,0,0.20))] w-full grid grid-flow-col auto-cols-[200px] gap-4
                overflow-x-auto overflow-y-hidden snap-x snap-mandatory
                [-webkit-overflow-scrolling:touch]
                [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                px-[calc((100%-200px)/2)]"
      >
        {visitedList.length === 0 ? (
          <p>방문한 전시가 없습니다.</p>
        ) : (
          visitedList.map((exh) => (
            <div
              key={exh.exhibitionId}
              className="w-[200px] h-[356px] bg-white flex flex-col items-start mt-3
            [clip-path:polygon(0_0,100%_0,100%_76%,calc(100%_-_20px)_79%,100%_82%,100%_100%,0_100%,0_82%,20px_79%,0_76%)]"
            >
              <img
                src={exh.posterImageUrl}
                alt="포스터 이미지"
                className="w-[184px] h-[256px] self-center mt-2"
              />
              <p className="text-[12px] text-darkgrey03 mt-2.5 self-center">
                {exh.startDate}
              </p>
              <div className="flex flex-row gap-[16px]">
                <p className="ml-3 mt-2.5 text-[16px] font-semibold leading-[150%]">
                  {exh.title}
                </p>
                <div className="mt-2.5 flex flex-row justify-center items-center gap-[2px]">
                  <img src={starImg} alt="star" className="w-[20px]" />
                  <p className="text-purple_main text-[12px]">{exh.rate}</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 mt-0.5 ml-3 text-[14px] font-medium leading-[150%] text-darkgrey03">
                {' '}
                {exh.artists.map((artist, idx) => (
                  <p key={idx}>{artist.nickname}</p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* 구분선 */}
      <div className="w-screen h-[8px] bg-grey04 mt-7 mb-[12px]" />

      <div className="flex flex-col px-5">
        <div className="flex text-[20px] font-semibold">좋아요한 GLOW 작가</div>
        <div className="flex flex-row gap-4 mx- w-full mt-4">
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" onClick={handleGoToProfile} />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-screen h-[8px] bg-grey04 mt-8 mb-[12px]" />

      <div className="flex flex-col px-5">
        <div className="flex justify-between ">
          <p className="text-[20px] font-semibold leading-1.25 mt-6">
            가보고 싶어요 한 전시
          </p>
          <p className="text-[16px] font-semibold font:pretendard leading-1.25 mt-6">
            전체보기
          </p>
        </div>
      </div>
      <div
        className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory mt-4 items-center
              px-5 [-webkit-overflow-scrolling:touch]
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
      >
        {likeList.length === 0 ? (
          <p>가보고 싶다고 저장한 전시가 없습니다.</p>
        ) : (
          likeList.map((exh, idx) => (
            <div key={idx}>
              <img
                src={exh.posterImageUrl}
                alt={exh.exhibitionId}
                className="w-[124px] h-[180px] shrink-0 snap-center rounded object-contain"
              />
            </div>
          ))
        )}
      </div>

      {/* 구분선 */}
      <div className="w-screen h-[8px] bg-grey04 mt-6" />

      <div className="flex flex-col mt-[10px] mx-[20px] py-[20px]">
        <div className="flex flex-row gap-[5px] items-center">
          <h1 className="font-semibold text-[20px]">선호하는 키워드</h1>
        </div>
        <div className="flex flex-wrap gap-[12px] w-[350px] mt-[20px]">
          {userTags.length === 0 ? (
            <p>선호하는 키워드가 없습니다.</p>
          ) : (
            userTags.map((tag, idx) => (
              <Tag key={idx} text={tag} id={idx + 1} />
            ))
          )}
        </div>
      </div>

      <AddExhibitionModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSubmit={(data) => {
          console.log('전시 등록 데이터:', data);
          // TODO: API 연결해서 저장
        }}
      />
    </div>
  );
};
