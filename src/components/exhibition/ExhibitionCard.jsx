import posterImg from "../../assets/poster.svg";
import {useNavigate} from 'react-router-dom';

const ExhibitionCard = () => {
    const nav = useNavigate();
    
    return (
        <div className="mb-[13px] flex flex-col items-center">
            <div className="cursor-pointer" onClick={() => nav("/exhibitionDetail")}>
            <div className="h-[194px] w-[348px] rounded-[20px] bg-gradient-to-r from-grad3-1 via-grad3-2 to-grad3-3 p-[1px] pb-[0px]">
                <div className="flex bg-white rounded-[20px] h-full gap-[12px]">
                    <div className="w-[125px] my-auto ml-[9px]">
                        <img src={posterImg} alt="poster" className="rounded-[17px]"/>
                    </div>
                    <div className="flex flex-col my-auto">
                        <h1 className="font-bold text-[20px]">전시명</h1>
                        <p className="text-[13px] text-darkgrey02">위치</p>
                        <p className="text-[13px] text-darkgrey02">2025.07.20-2025.08.30</p>
                        <hr className="my-[13px] w-[185px]"/>
                        <p className="w-[180px] text-[12px]">자연과 인간들의 소통방식에 대한 관객 상호작용적 전시</p>
                    </div>
                </div>
            </div>
            <hr className="w-[296px] border-grey05"/>
            <div className="h-[93px] w-[348px] rounded-[20px] bg-gradient-to-r from-grad3-1 via-grad3-2 to-grad3-3 p-[1px] pt-[0px]">
                <div className="flex bg-white rounded-[20px] h-full">
                    <div className="my-auto ml-[24px] flex flex-col text-[12px] text-darkgrey02 leading-5">
                        <p>좋아하시는 야요이 쿠사마의 작품들과 유사해요.</p>
                        <p>선호하시는 #초현실 관련 전시에요.</p>
                        <p>망원 시장 주변 호시갤러리에서 전시중이에요.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
   

}

export default ExhibitionCard;