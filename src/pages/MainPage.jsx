import { useRef, useState } from "react";
import AiBall from "../assets/ai_ball.svg";
import Poster1 from "../assets/Poster1.svg";
import Poster2 from "../assets/Poster2.svg";
import Poster3 from "../assets/Poster3.svg";
import Poster4 from "../assets/Poster4.svg";
import Poster5 from "../assets/Poster5.svg";
import Poster6 from "../assets/Poster6.svg";
import AiChatButton from "../assets/Ai_chat_button.svg";
import { useNavigate } from "react-router-dom";

const CARD_W = 284;        // 카드 가로
const GAP = 16;            // gap-4


export const MainPage = () => {
  const navigate = useNavigate();
  const scrollerRef = useRef(null);
  const [idx, setIdx] = useState(0); // 0,1,2

  const handleAiButton = () => navigate("/aiChat");

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
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto w-full max-w-[420px] px-4 py-4 space-y-5">
      <h2 className="text-[20px] leading-[125%]">GLOW의 일일 추천</h2>

      <div className="flex items-center gap-2">
        <img src={AiBall} alt="ai_ball" className="w-[24px] h-[24px]" />
        <p className="text-[11px] leading-[140%]">
          무더운 오늘, 시원해질 수 있는 희서님의 취향저격 전시를 준비했어요.
        </p>
      </div>

      {/* 포스터 슬라이더 */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory
          pl-[calc(50vw-158px)] pr-[calc(50vw-158px)]
          [-ms-overflow-style:none] [scrollbar-width:none]
        "
      >

        <img src={Poster1} alt="poster1"
             className="w-[284px] h-[376px] shrink-0 snap-center rounded object-contain" />
        <img src={Poster1} alt="poster1"
             className="w-[284px] h-[376px] shrink-0 snap-center rounded object-contain" />
        <img src={Poster3} alt="poster3"
             className="w-[284px] h-[376px] shrink-0 snap-center rounded object-contain" />
      </div>

      {/* 2) 인디케이터 점 */}
      <div className="flex justify-center items-center gap-2">
        {[0,1,2].map(i => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`slide ${i+1}`}
            className={`
              h-2 w-2 rounded-full
              ${idx===i ? "bg-purple01" : "bg-grey05"}
              transition-all
            `}
          />
        ))}
      </div>

            <p className="text-[20px] leading-[125%]">따끈 따끈 새로 등록된 전시들</p>

            <div className="grid grid-cols-2 gap-y-8 mb-8 justify-items-center">
                    <div className="w-[168px] h-[308px]">
                        <img
                        src={Poster3}
                        alt="poster of main content"
                        className="w-[168px] h-[242px]"
                        />
                        <div className="flex flex-col">
                        <p className="text-[14px]">바다를 찾아서 PROJECT</p>
                        <p className="text-grey08 text-[8px]">연희동</p>
                        <p className="text-grey08 text-[8px]">2025.08.08-2025.08.27</p>
                        </div>
                    </div>

                    <div className="w-[168px] h-[308px]">
                        <img src={Poster4} alt="poster of main content" className="w-[168px] h-[242px]" />
                        <div className="flex flex-col">
                        <p className="text-[14px]">바다를 찾아서 PROJECT</p>
                        <p className="text-grey08 text-[8px]">연희동</p>
                        <p className="text-grey08 text-[8px]">2025.08.08-2025.08.27</p>
                        </div>
                    </div>

                    <div className="w-[168px] h-[308px]">
                        <img src={Poster5} alt="poster of main content" className="w-[168px] h-[242px]" />
                        <div className="flex flex-col">
                        <p className="text-[14px]">바다를 찾아서 PROJECT</p>
                        <p className="text-grey08 text-[8px]">연희동</p>
                        <p className="text-grey08 text-[8px]">2025.08.08-2025.08.27</p>
                        </div>
                    </div>

                    <div className="w-[168px] h-[308px]">
                        <img src={Poster6} alt="poster of main content" className="w-[168px] h-[242px]" />
                        <div className="flex flex-col">
                        <p className="text-[14px]">바다를 찾아서 PROJECT</p>
                        <p className="text-grey08 text-[8px]">연희동</p>
                        <p className="text-grey08 text-[8px]">2025.08.08-2025.08.27</p>
                        </div>
                    </div>
                </div>

            <button 
            className="cursor-pointer"
            onClick={handleAiButton}
            >
                <img src={AiChatButton} 
                alt="Ai 전시 추천" 
                className="fixed left-[240px] top-[750px] z-50" />
            </button>
             

            <div className="w-full h-[8px] bg-grey04 mt-[52px] mb-[20px]">

            </div>

            <h2 className="text-[20px] leading-[125%]">선호하시는 {" "}
                <span className="text-purple01">#초현실</span>
                {" "} 
                 태그의 전시들
            </h2>
        </div>
    )
}

export default MainPage;