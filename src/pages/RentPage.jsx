import placeImg from "../assets/cafe01.svg";
import profile from "../assets/mainProfile.svg";
import floorImg from "../assets/floorPlan.png";
import { useState } from "react";
import ArtistModal from "../components/mainpage/ArtistModal";

const RentPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const [ArtistName, setArtistName] = useState("");

    const handleSendMessage = (name) => {
        setArtistName(name);
        setOpenModal(true);
    }
    
    return (
        <div className="mx-auto w-full max-w-[450px]">
            <div className="w-full h-[260px] overflow-hidden">
                <img src={placeImg} alt="place_image" className="w-full h-full object-cover"/>
            </div>

            <div className="w-full px-[20px] py-[24px] flex flex-col">
                <div className="flex flex-col gap-[20px]">
                    <h1 className="font-bold text-[20px]">아르누보 카페</h1>
                    <div className="flex flex-col gap-[4px] text-[15px] text-darkgrey01">
                        <p>마포구 동교동 50-18</p>
                        <p>24m<sup>2</sup> / 1층</p>
                        <p>아르누보 카페 건물 1층 상가 공실입니다. 평균적으로 작품 20점 전시관으로 자주 사용되니 참고 바랍니다.</p>
                    </div>
                </div>

                <div className="flex flex-col h-[122px] border-y-1 border-grey06 my-[16px] py-[16px] gap-[8px]">
                    <h1 className="font-semibold text-[16px]">담당 임대인</h1>
                    <div className="flex flex-row gap-[18px]">
                        <img src={profile} alt="profile" className="w-[58px] h-[58px]"/>
                        <div className="flex flex-col text-[15px] text-darkgrey04">
                            <p>name</p>
                            <p>phonenum</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[26px]">
                    <h1 className="font-semibold text-[16px]">전시 공간 평면도</h1>
                    <div className="flex justify-center items-center">
                        <img src={floorImg} alt="floorImage" className="w-[187px]" />
                        <p className="absolute z-1 mt-[30px] text-purple_main text-[14px]">실면적 22m<sup>2</sup></p>
                    </div>
                </div>

                <div className="mt-[30px] flex justify-center items-center px-[25px]">
                    <button 
                        className="w-full h-[48px] bg-purple_main text-white rounded-[10px] cursor-pointer"
                        onClick={() => handleSendMessage("예나")}
                    >
                        임대 문의하기
                    </button>
                </div>
            </div>

            <ArtistModal 
                open={openModal}
                onClose={() => setOpenModal(false)}
                name={ArtistName}
                text={"전시 공간 임대 문의 폼을 "}
                type={"폼을"}
            />
        </div>
    )
}

export default RentPage;