import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom'; // useParams 추가
import icon_ai from '../assets/icon_ai.svg';
import markImg from '../assets/bookmark.png';
import visitImg from '../assets/visit.png';
import posImg from '../assets/position.svg';
import calImg from '../assets/cal.svg';
import tagImg from '../assets/hashtag.svg';
import Artist from '../components/exhibition/Artist';
import ExhibitionModal from '../components/exhibition/ExhibitionModal';
import Header from '../components/layout/Header.jsx';
import Tag from '../components/ai/Tag';
import { getDailyRecommend } from '../apis/dailyRecommend.js';
import { getExhibitionById, sendExhibitionLike } from '../apis/exhibition.js';
import { FaHandHoldingMedical } from 'react-icons/fa';

const ExhibitionDetail = () => {
  const location = useLocation();
  const nav = useNavigate();
  const { id } = useParams();

  const recommendationReason =
    location.state?.exhibition?.recommendationReason || '';

  const [exhibitionInfo, setExhibitionInfo] = useState(null); // 초기 상태를 null로 변경
  const [isOpen, setIsOpen] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const fetchExhibitionInfo = async () => {
      // URL에서 가져온 id가 있을 때만 API를 호출합니다.
      if (id) {
        try {
          const result = await getExhibitionById(id);
          setExhibitionInfo(result);
        } catch (err) {
          console.log('개별 전시 조회 실패 : ', err);
        }
      }
    };
    fetchExhibitionInfo();
  }, [id]); // id가 변경될 때마다 데이터를 다시 가져옵니다.

  const reasonSentences = recommendationReason
    ? recommendationReason
        .split('\n')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
    : [];

  const handleBack = () => {
    nav(-1);
  };

  if (!exhibitionInfo) {
    return (
      <div className="mx-auto w-full max-w-[450px] text-center mt-20">
        <p>전시 정보를 불러오는 중...</p>
      </div>
    );
  }

  const {
    title,
    location: place,
    description,
    startDate,
    endDate,
    posterImage: posterImageUrl,
    artworkUrl = [], // 기본값을 빈 배열로 설정하여 에러 방지
    tags = [],
    artists = [],
    ongoing,
  } = exhibitionInfo;

  const handleClick = async () => {
    try {
      const result = await sendExhibitionLike({
        exhibitionId: id,
      });
      console.log('응답 성공: ', result);
      setIsLike(true);
    } catch (err) {
      console.log('실패: ', err);
      alert('가보고 싶어요 등록을 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="mx-auto w-full max-w-[450px]">
      <div className="flex flex-col ml-[21px]">
        <Header onClick={handleBack} />
        {recommendationReason && (
          <div className="flex gap-[5px]">
            <img src={icon_ai} alt="ai icon" />
            <span className="text-[16px] leading-[125%] ">
              AI의 전시 추천받기
            </span>
          </div>
        )}
      </div>

      <div className="mx-[20px] h-[414px] mt-[7px] border border-y-grey05 border-x-0">
        <div className="w-[276px] h-[390px] mx-auto my-[12px]">
          <img
            src={posterImageUrl}
            alt="poster"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col mx-[20px] mt-[12px]">
        <div className="flex place-content-between h-[48px]">
          <button
            className={`flex flex-row justify-center items-center w-[168px] ${isLike ? 'bg-lightpurple02' : 'bg-grey01'} gap-[12px] rounded-[5px] cursor-pointer`}
            onClick={handleClick}
          >
            <img
              src={markImg}
              alt="가보고 싶어요"
              className="w-[40px] h-[40px]"
            />
            <p className="font-bold text-[14px]">가보고 싶어요</p>
          </button>

          <button
            className={`flex flex-row justify-center items-center w-[168px] gap-[12px] rounded-[5px] cursor-pointer ${isVisited ? 'bg-lightpurple02 text-purple_main' : 'bg-grey01 text-black'}`}
            onClick={() => setIsOpen(true)}
          >
            <img
              src={visitImg}
              alt="방문했어요"
              className="w-[22px] h-[32px]"
            />
            <p className="font-bold text-[14px]">방문했어요</p>
          </button>
        </div>

        <div className="flex flex-col mt-[16px]">
          <h1 className="font-bold text-[24px]">{title}</h1>
          <div className="flex mt-[16px] gap-[16px]">
            {artists.map((artist, idx) => {
              <Artist
                key={idx}
                name={artist.nickname}
                id={artist.userId}
                profile={artist.profileImageUrl}
              />;
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[12px] mx-[20px] gap-[4px]">
        <div className="flex flex-row gap-[12px]">
          <div className="flex flex-row">
            <img src={posImg} alt="position" className="mr-[4px]" />
            <p className="font-semibold text-[14px]">{place || '미정'}</p>
          </div>
        </div>

        <div className="flex flex-row gap-[12px]">
          <div className="flex flex-row">
            <img src={calImg} alt="position" className="mr-[4px]" />
            <p className="font-semibold text-[14px]">
              {startDate} ~ {endDate}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            {ongoing && (
              <>
                <div className="w-[6px] h-[6px] rounded-[50px] bg-[#007CFF] mr-[12px]"></div>
                <p className="text-[#007CFF] font-semibold text-[13px]">
                  전시중
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[12px] mx-[20px] py-[20px] border border-y-grey05 border-x-0">
        <p className="w-[338px] font-semibold text-[14px]">{description}</p>
      </div>

      <div className="flex flex-row mt-[20px] mx-[20px] gap-[16px]">
        {artworkUrl.map((imgUrl, idx) => (
          <div
            key={idx}
            className="w-[88px] h-[88px] rounded-[5px] overflow-hidden"
          >
            <img
              src={imgUrl}
              alt="pic"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-[20px] mx-[20px] py-[20px] border border-y-grey05 border-x-0">
        <div className="flex flex-row gap-[5px] items-center">
          <img src={tagImg} alt="hashtag" />
          <h1 className="font-semibold text-[16px]">AI 분석 해시태그</h1>
        </div>
        <div className="flex flex-wrap gap-[12px] w-[350px] mt-[16px]">
          {tags.map((text, idx) => (
            <Tag key={idx} text={text} id={idx} />
          ))}
        </div>
      </div>

      {reasonSentences && reasonSentences.length > 0 && (
        <div className="flex flex-col mt-[20px] mb-[30px] mx-[20px]">
          <div className="flex flex-row gap-[5px] items-center">
            <img src={tagImg} alt="hashtag" />
            <h1 className="font-semibold text-[16px]">내가 좋아할 이유</h1>
          </div>

          <div className="flex flex-col pl-[28px] mt-[16px] text-[13px] text-darkgrey02 gap-[8px] w-[320px]">
            {reasonSentences.map((sentence, idx) => (
              <p key={idx}>{sentence}</p>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <ExhibitionModal
          exhib_id={id}
          posterImg={posterImageUrl}
          title={title}
          onClose={() => {
            setIsOpen(false);
            setIsVisited(true);
          }}
        />
      )}
    </div>
  );
};

export default ExhibitionDetail;
