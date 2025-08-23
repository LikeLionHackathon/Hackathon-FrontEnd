import profileImg from "../../assets/mainProfile.svg";
import { AiOutlineMessage } from "react-icons/ai";

const ArtistCard = ({img, name, num, place, onClick}) => {
    
    return (
        <div className="flex flex-col w-[135px] h-[209px] rounded-[10px] border border-lightpurple01 justify-center items-center">
            <img src={img || profileImg} alt="profile" className="w-[76px] h-[76px] mb-[11px]"/>
            <div className="flex flex-col justify-center items-center mb-[8px]">
                <p className="font-semibold text-[16px]">{name}</p>
                <p className="text-[12px] text-darkgrey01">{num}명 모집 중</p>
                <p className="text-[12px]">{place}</p>
            </div>
            <button 
                className="w-[98px] h-[25px] bg-purple_main text-white rounded-[5px] flex flex-row justify-center items-center gap-[8px] cursor-pointer"
                onClick={onClick}    
            >
                <AiOutlineMessage className="w-[16px]"/>
                <p className="text-[12px] leading-none">문의하기</p>
            </button>
        </div>
    )
}

export default ArtistCard;