import { useRef, useState } from 'react';
import AiBall from '../assets/ai_ball.svg';
import profile from '../assets/profile.svg';
import Poster1 from '../assets/Poster1.svg';
import Poster3 from '../assets/Poster3.svg';
import Poster4 from '../assets/Poster4.svg';
import Poster5 from '../assets/Poster5.svg';
import Poster6 from '../assets/Poster6.svg';
import AiChatButton from '../assets/Ai_chat_button.svg';
import GLOW from '../assets/GLOW.svg';
import glow_icon1 from '../assets/glow_icon1.svg';
import { useNavigate } from 'react-router-dom';
import MainArtist from '../components/mainpage/MainArtist';
import { getDailyRecommend } from '../apis/dailyRecommend';
import { useEffect } from 'react';
import { getExhibitions } from '../apis/exhibition';

const CARD_W = 284; // 카드 가로
const GAP = 16; // gap-4

export const MainPage = () => {
  {
    /* Daily Recommendations */
  }
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newExhibitions, setNewExhibitions] = useState([]);

  // useEffect(() => {
  //   const fetchRecommendations = async () => {
  //     try {
  //       const user_id = 1;
  //       const data = await getDailyRecommend(user_id);
  //       setRecommendations(data.recommendedExhibitions || []);
  //     } catch (err) {
  //       setError('추천 데이터를 불러오는 데 실패했습니다.');
  //       console.error(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchRecommendations();
  // }, []);

  useEffect(() => {
    const fetchAllExhibitions = async () => {
      try {
        const result = await getExhibitions();
        console.log("백엔드 응답: ", result);
        setNewExhibitions(result);

      } catch (err) {
        console.log("실패: ", err);
      }

    }
    fetchAllExhibitions();
  }, [])

  const navigate = useNavigate();
  const scrollerRef = useRef(null);
  const [idx, setIdx] = useState(0); // 0,1,2
  const [version, setVersion] = useState('home');

  const handleAiButton = () => navigate('/aiChat');

  // 스크롤 시 현재 인덱스 계산
  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / (CARD_W + GAP));
    setIdx(Math.max(0, Math.min(2, i)));
  };

  // 점 클릭 시 해당 카드로 스냅 이동
  const goTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({
      left: i * (CARD_W + GAP),
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-[420px] pl-[22px] pr-[16px] mt-[8px] mb-[10px]">
        <div className="flex justify-between h-[45px] mb-[18px]">
          <div className="flex items-center gap-1">
            <img src={glow_icon1} alt="" className="w-[50px] shrink-0" />
            <img src={GLOW} alt="GLOW logo" className="" />
          </div>
          <img
            src={profile}
            alt=""
            className="cursor-pointer"
            onClick={() => {
              navigate('/mypage');
            }}
          />
        </div>

        <div className="mt-[18px] flex flex-row h-[30px] items-center border-b-1 border-[#DBDBDB]">
          <div className="w-[32px] h-[14px] border-r-1 border-r-grey08 flex items-center justify-start">
            <button
              className={`text-[20px] font-bold ${version === 'home' ? 'text-black' : 'text-darkgrey01'}`}
              onClick={() => setVersion('home')}
            >
              홈
            </button>
          </div>
          <div className="w-[50px] h-[14px] border-l-1 border-l-grey08 flex items-center justify-end">
            <button
              className={`text-[20px] font-bold ${version === 'artist' ? 'text-black' : 'text-darkgrey01'}`}
              onClick={() => setVersion('artist')}
            >
              작가
            </button>
          </div>
        </div>
      </div>

      {version === 'artist' && <MainArtist />}

      {version === 'home' && (
        <>
          <div className="mx-auto w-full max-w-[420px] px-5 py-4">
            <h2 className="text-[20px] leading-[125%] font-semibold">
              GLOW의 일일 추천
            </h2>

            <div className="flex items-center pt-1 pb-4 gap-2">
              <img src={AiBall} alt="ai_ball" className="w-[24px] h-[24px]" />
              <p className="text-[11px] leading-[140%]">
                무더운 오늘, 시원해질 수 있는 희서님의 취향저격 전시를
                준비했어요.
              </p>
            </div>

            {/* 포스터 슬라이더 */}
            <div
              ref={scrollerRef}
              onScroll={onScroll}
              className="
        flex gap-4 overflow-x-auto snap-x snap-mandatory
        pl-[calc((100%-284px)/2)] pr-[calc((100%-284px)/2)]
        [-webkit-overflow-scrolling:touch]
        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
      "
            >
              <img
                src={Poster1}
                alt="poster1"
                className="w-[284px] h-[376px] shrink-0 snap-center rounded object-contain"
              />
              <img
                src={Poster1}
                alt="poster1"
                className="w-[284px] h-[376px] shrink-0 snap-center rounded object-contain"
              />
              <img
                src={Poster3}
                alt="poster3"
                className="w-[284px] h-[376px] shrink-0 snap-center rounded object-contain"
              />
            </div>

            {/* 2) 인디케이터 점 */}
            <div className="flex justify-center items-center gap-2 mt-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`slide ${i + 1}`}
                  className={`
              h-2 w-2 rounded-full
              ${idx === i ? 'bg-purple01' : 'bg-grey05'}
              transition-all
            `}
                />
              ))}
            </div>

            <p className="text-[20px] leading-[125%] mt-[48px] mb-[10px] font-semibold">
              따끈 따끈 새로 등록된 전시들
            </p>

            <div className="grid grid-cols-2 gap-x-3 gap-y-3 justify-items-start">
              {newExhibitions.length === 0 ? (
                <p>새로 등록된 전시가 없습니다.</p>
              ) : (
                // <<< 🚨 이 부분이 명세서에 맞게 크게 변경됩니다.
                newExhibitions.map((exhibition) => (
                  <div key={exhibition.id} className="w-[168px] h-[308px]">
                    <div className="w-[168px] h-[242px] overflow-hidden">
                      <img
                        src={exhibition.artworkUrl[0]} // 썸네일 -> posterImage
                        alt={exhibition.title}
                        className="w-full h-full object-cover [clip-path:polygon(0_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,14px_100%,0_calc(100%-12px))]"
                      />
                    </div>
                    <div className="relative bg-[#C8C8C8] p-[1px] [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_12px,100%_100%,0_100%,0_12px)]">
                      <div className="bg-white px-2 py-1 [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_12px,100%_100%,0_100%,0_12px)]">
                        <p className="text-[14px] mt-2 font-semibold truncate">
                          {exhibition.title}
                        </p>
                        {/* location 필드가 있으나 UI 공간이 좁아 일단 주석 처리. 필요시 주석 해제하여 사용 */}
                        <p className="text-grey08 text-[8px] truncate">{exhibition.location}</p>
                        <p className="text-grey08 text-[8px]">
                          {exhibition.artist}
                        </p>{' '}
                        {/* 작가 정보 추가 */}
                        <p className="text-grey08 text-[8px]">
                          {exhibition.startDate} ~ {exhibition.endDate}
                        </p>{' '}
                        {/* 날짜 정보 */}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button className="cursor-pointer" onClick={handleAiButton}>
              <img
                src={AiChatButton}
                alt="Ai 전시 추천"
                className="fixed bottom-[33px] right-[15px] z-50"
              />
            </button>
          </div>

          {/* 구분선 */}
          <div className="w-screen h-[8px] bg-grey04 mt-[0px] mb-[20px]" />

          <div className="mx-auto w-full max-w-[420px] px-5 py-4">
            <h2 className="font-semibold text-[20px] leading-[125%]">
              선호하시는 <span className="text-purple01">#초현실</span> 태그의
              전시들
            </h2>
          </div>

          <div className="px-5 grid grid-cols-2 gap-x-3 justify-items-start">
            <div className="w-[168px] space-y-1.5">
              {' '}
              <img
                src={Poster1}
                alt="poster1"
                className="w-full rounded mb-2.5"
              />
              <p className="self-stretch text-[16px] font-semibold leading-6 not-italic">
                복
              </p>
              <p className="self-stretch font-semibold leading-6 text-[11px]">
                연희동
              </p>
              <div className="mt-1 flex flex-wrap gap-2 justify-start text-[11px]">
                <span className="bg-lightpurple01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 초현실
                </span>
                <span className="bg-pink01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 역사 아카이브
                </span>
                <span className="bg-pink01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 사회적
                </span>
              </div>
            </div>

            <div className="w-[168px] space-y-1.5">
              {' '}
              <img
                src={Poster1}
                alt="poster1"
                className="w-full rounded mb-2.5"
              />
              <p className="self-stretch text-[16px] font-semibold leading-6 not-italic">
                복
              </p>
              <p className="self-stretch font-semibold leading-6 text-[11px]">
                연희동
              </p>
              <div className="mt-1 flex flex-wrap gap-2 justify-start text-[11px]">
                <span className="bg-lightpurple01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 초현실
                </span>
                <span className="bg-pink01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 역사 아카이브
                </span>
                <span className="bg-pink01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 사회적
                </span>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="w-screen h-[8px] bg-grey04 mt-[34px] mb-[20px]" />

          <div className="mx-auto w-full max-w-[420px] px-5 py-4">
            <h2 className="font-semibold text-[20px] leading-[125%]">
              선호하시는 <span className="text-purple01">#따뜻함</span> 태그의
              전시들
            </h2>
          </div>

          <div className="px-5 grid grid-cols-2 gap-x-3 justify-items-start">
            <div className="w-[168px] space-y-1.5">
              {' '}
              <img
                src={Poster1}
                alt="poster1"
                className="w-full rounded mb-2.5"
              />
              <p className="self-stretch text-[16px] font-semibold leading-6 not-italic">
                복
              </p>
              <p className="self-stretch font-semibold leading-6 text-[11px]">
                연희동
              </p>
              <div className="mt-1 flex flex-wrap gap-2 justify-start text-[11px]">
                <span className="bg-lightpurple01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 초현실
                </span>
                <span className="bg-pink01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 역사 아카이브
                </span>
                <span className="bg-pink01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 사회적
                </span>
              </div>
            </div>

            <div className="w-[168px] space-y-1.5 mb-10">
              {' '}
              <img
                src={Poster1}
                alt="poster1"
                className="w-full rounded mb-2.5"
              />
              <p className="self-stretch text-[16px] font-semibold leading-6 not-italic">
                복
              </p>
              <p className="self-stretch font-semibold leading-6 text-[11px]">
                연희동
              </p>
              <div className="mt-1 flex flex-wrap gap-2 justify-start text-[11px]">
                <span className="bg-lightpurple01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 초현실
                </span>
                <span className="bg-pink01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 역사 아카이브
                </span>
                <span className="bg-pink01 rounded-[5px] px-1.5 py-0.5 whitespace-nowrap">
                  # 사회적
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
