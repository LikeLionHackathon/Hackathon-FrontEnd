import icon_ai from "../assets/icon_ai.svg"
import markImg from "../assets/bookmark.png";
import visitImg from "../assets/visit.png";
import posImg from "../assets/position.svg";
import calImg from "../assets/cal.svg";
import tagImg from "../assets/hashtag.svg";
import Tag from "../components/ai/Tag";
import Artist from "../components/exhibition/Artist";
import ExhibitionModal from "../components/exhibition/ExhibitionModal"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header.jsx";


const ExhibitionDetail = () => {
    const location = useLocation();
    const nav = useNavigate();

    console.log(location.state.exhibition);
    const {
        title,
        place,
        description,
        startDate,
        endDate,
        posterImageUrl,
        recommendationReason,
        artworkImages,
        tags
        
    } = location.state.exhibition

    const [isOpen, setIsOpen] = useState(false);
    const [isVisited, setIsVisited] = useState(false);

    const reasonSentences = recommendationReason 
        ? recommendationReason.split("\n").map(s => s.trim()).filter(s => s.length > 0)
        : [];

    const handleBack = () => {
      nav(-1);
    }

    return (
        <div className="mx-auto w-full max-w-[450px]">
            
            <div className="flex flex-col ml-[21px]">
                <Header onClick={handleBack}/>
                <div className="flex gap-[5px]">
                    <img src={icon_ai} alt="ai icon" />
                    <span className="text-[16px] leading-[125%] ">AI의 전시 추천받기</span>
                </div>
            </div>

            <div className="mx-[20px] h-[414px] mt-[7px] border border-y-grey05 border-x-0">
                <div className="w-[276px] h-[390px] mx-auto my-[12px]">
                    <img src={posterImageUrl} alt="poster" className="w-full h-full" />
                </div>
            </div>

            <div className="flex flex-col mx-[20px] mt-[12px]">
                <div className="flex place-content-between h-[48px]">
                    <button className="flex flex-row justify-center items-center w-[168px] bg-grey01 gap-[12px] rounded-[5px] cursor-pointer">
                        <img src={markImg} alt="가보고 싶어요" className="w-[40px] h-[40px]"/>
                        <p className="font-bold text-[14px]">가보고 싶어요</p>
                    </button>

                    <button 
                        className={`flex flex-row justify-center items-center w-[168px] gap-[12px] rounded-[5px] cursor-pointer ${isVisited ? 'bg-lightpurple02 text-purple_main' : 'bg-grey01 text-black'}`}
                        onClick={() => setIsOpen(true)}    
                    >
                        <img src={visitImg} alt="방문했어요" className="w-[22px] h-[32px]"/>
                        <p className="font-bold text-[14px]">방문했어요</p>
                    </button>
                </div>

                <div className="flex flex-col mt-[16px]">
                    <h1 className="font-bold text-[24px]">{title}</h1>
                    <div className="flex mt-[16px] gap-[16px]">
                        <Artist name={"박서영"}/>
                        <Artist name={"황영준"} />
                    </div>
                </div>
            </div>

            
            <div className="flex flex-col mt-[12px] mx-[20px] gap-[4px]">
                <div className="flex flex-row gap-[12px]">
                    <div className="flex flex-row">
                        <img src={posImg} alt="position" className="mr-[4px]"/>
                        <p className="font-semibold text-[14px]">{place || "미정"}</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[6px] h-[6px] rounded-[50px] bg-pink02 mr-[12px]"></div>
                        <p className="text-pink02 font-semibold text-[13px]">망원시장에서 100m</p>
                    </div>
                </div>

                <div className="flex flex-row gap-[12px]">
                    <div className="flex flex-row">
                        <img src={calImg} alt="position" className="mr-[4px]"/>
                        <p className="font-semibold text-[14px]">{startDate} ~ {endDate}</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[6px] h-[6px] rounded-[50px] bg-[#007CFF] mr-[12px]"></div>
                        <p className="text-[#007CFF] font-semibold text-[13px]">전시중</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-[12px] mx-[20px] py-[20px] border border-y-grey05 border-x-0">
                <p className="w-[338px] font-semibold text-[14px]">
                    {description}
                </p>
            </div>

            <div className="flex flex-row mt-[20px] mx-[20px] gap-[16px]">
                {artworkImages.map((imgUrl, idx) => (
                    <div key={idx} className="w-[88px] h-[88px] rounded-[5px] overflow-hidden">
                        <img src={imgUrl} alt="pic" className="w-full h-full object-cover"/>
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

            {isOpen && 
            <ExhibitionModal 
                onClose={() => {setIsOpen(false); setIsVisited(true)}}
            />}
        </div>
        
    )
}

export default ExhibitionDetail;