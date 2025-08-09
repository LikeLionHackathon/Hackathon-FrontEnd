import AiBall from "../assets/ai_ball.svg"
import Poster1 from "../assets/Poster1.svg"
import Poster2 from "../assets/Poster2.svg"
import Poster3 from "../assets/Poster3.svg"
import Poster4 from "../assets/Poster4.svg"
import Poster5 from "../assets/Poster5.svg"
import Poster6 from "../assets/Poster6.svg"
import AiChatButton from "../assets/Ai_chat_button.svg"
import { useNavigate } from "react-router-dom"

export const MainPage = () => {
    const navigate = useNavigate();

    const handleAiButton = () => {
        navigate("/aiChat");
    }
    
    return(
        <div>
            <h2 className="text-[20px] leading-[125%]">GLOW의 일일 추천</h2>

            <div className="flex">
                <img src={AiBall} alt="ai_ball" className="w-[24px]" />
                <p className="text-[11px]">무더운 오늘, 시원해질 수 있는 희서님의 취향저격 전시를 준비했어요.</p>
            </div>

            <div className="flex flex-row overflow-scroll">
                <img src={Poster1} alt="poster of main content" className="w-[284px] h-[376px]" />
                <img src={Poster1} alt="poster of main content" className="w-[284px] h-[376px]" />
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