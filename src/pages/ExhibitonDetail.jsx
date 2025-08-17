import icon_ai from "../assets/icon_ai.svg"
import posterImg from "../assets/poster.svg";
import markImg from "../assets/bookmark.svg";
import visitImg from "../assets/visit.svg";
import posImg from "../assets/position.svg";
import calImg from "../assets/cal.svg";
import ex1Img from "../assets/ex01.svg";
import ex2Img from "../assets/ex02.svg";
import ex3Img from "../assets/ex03.svg";
import tagImg from "../assets/hashtag.svg";
import Tag from "../components/ai/Tag";


const ExhibitionDetail = () => {
    return (
        <div className="mx-auto w-full max-w-[450px]">
            <div className="flex flex-col mt-[31px] ml-[21px]">
                <div className="flex gap-[5px]">
                    <img src={icon_ai} alt="ai icon" />
                    <span className="text-[16px] leading-[125%] ">AI의 전시 추천받기</span>
                </div>
            </div>

            <div className="mx-[20px] h-[414px] mt-[7px] border border-y-grey05 border-x-0">
                <div className="w-[276px] h-[390px] mx-auto my-[12px]">
                    <img src={posterImg} alt="poster" className="w-full h-full" />
                </div>
            </div>

            <div className="flex flex-col mx-[20px] mt-[12px]">
                <div className="flex place-content-between h-[48px]">
                    <button className="flex flex-row justify-center items-center w-[168px] bg-grey01 gap-[12px]">
                        <img src={markImg} alt="가보고 싶어요" />
                        <p>가보고 싶어요</p>
                    </button>

                    <button className="flex flex-row justify-center items-center w-[168px] bg-grey01 gap-[12px]">
                        <img src={visitImg} alt="방문했어요" />
                        <p>방문했어요</p>
                    </button>
                </div>

                <div className="flex flex-col mt-[16px]">
                    <h1 className="font-bold text-[24px]">변화의 이상</h1>
                    <div className="flex mt-[16px] gap-[16px]">
                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="w-[48px] h-[48px] rounded-[50px] bg-grey05"></div>
                            <p className="font-semibold text-[14px]">박서영</p>
                        </div>

                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="w-[48px] h-[48px] rounded-[50px] bg-grey05"></div>
                            <p className="font-semibold text-[14px]">박서영</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="flex flex-col mt-[12px] mx-[20px] gap-[4px]">
                <div className="flex flex-row gap-[12px]">
                    <div className="flex flex-row">
                        <img src={posImg} alt="position" className="mr-[4px]"/>
                        <p className="font-semibold text-[14px]">마포구 와우산로 25</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[6px] h-[6px] rounded-[50px] bg-pink02 mr-[12px]"></div>
                        <p className="text-pink02 font-semibold text-[13px]">망원시장에서 100m</p>
                    </div>
                </div>

                <div className="flex flex-row gap-[12px]">
                    <div className="flex flex-row">
                        <img src={calImg} alt="position" className="mr-[4px]"/>
                        <p className="font-semibold text-[14px]">2025-08-01 ~ 2025-08-12</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[6px] h-[6px] rounded-[50px] bg-[#007CFF] mr-[12px]"></div>
                        <p className="text-[#007CFF] font-semibold text-[13px]">전시중</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-[12px] mx-[20px] py-[20px] border border-y-grey05 border-x-0">
                <p className="w-[338px] font-semibold text-[14px]">
                    자연과 인간들의 소통방식에 대한 인터렉티브 전시로,자연과 인간들의 소통방식에 대한 인터렉티브 전시이다.
                </p>
            </div>

            <div className="flex flex-row mt-[20px] mx-[20px] gap-[16px]">
                <div className="w-[88px] h-[88px] rounded-[5px]">
                    <img src={ex1Img} alt="pic" className="w-full"/>
                </div>
                <div className="w-[88px] h-[88px] rounded-[5px]">
                    <img src={ex2Img} alt="pic" className="mx-h-full"/>
                </div>
                <div className="w-[88px] h-[88px] rounded-[5px]">
                    <img src={ex3Img} alt="pic" />
                </div>
            </div>

            <div className="flex flex-col mt-[20px] mx-[20px] py-[20px] border border-y-grey05 border-x-0">
                <div className="flex flex-row gap-[5px] items-center">
                    <img src={tagImg} alt="hashtag" />
                    <h1 className="font-semibold text-[16px]">AI 분석 해시태그</h1>
                </div>
                <div className="flex flex-wrap gap-[12px] w-[350px] mt-[16px]">
                    <Tag text={"실험적"} id={1}/>
                    <Tag text={"몽환적인"} id={2}/>
                    <Tag text={"관객 참여형"} id={3}/>
                    <Tag text={"웅장한"} id={4}/>
                    <Tag text={"인터렉티브"} id={5}/>
                    <Tag text={"친구들과 함께"} id={6}/>
                </div>
            </div>

            <div className="flex flex-col mt-[20px] mb-[30px] mx-[20px]">
                <div className="flex flex-row gap-[5px] items-center">
                    <img src={tagImg} alt="hashtag" />
                    <h1 className="font-semibold text-[16px]">내가 좋아할 이유</h1>
                </div>

                <div className="flex flex-col pl-[28px] mt-[16px] text-[13px] text-darkgrey02 gap-[8px] w-[320px]">
                    <p> 좋아하시는 야요이 쿠사마의 작품들과 유사해요.</p>
                    <p>선호하시는 <span className="text-purple01">#초현실</span> 관련 전시에요.</p>
                    <p>망원 시장 주변 호시갤러리에서 전시중이에요.</p>
                </div>
            </div>
        </div>
    )
}

export default ExhibitionDetail;