import ArtistCard from "./ArtistCard";
import PlaceCard from "./PlaceCard";
import artImg from "../../assets/art.png";
import { useState } from "react";
import AddExhibitionModal from "../exhibition/AddExhibitionModal";
import AddPastExhibitionModal from "../exhibition/AddPastExhibitionModal"
import ArtistModal from "./ArtistModal";
import profile_minwu from "../../assets/profile_minwu.png";

const MainArtist = () => {
    const [openPastAdd, setOpenPastAdd] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const [ArtistName, setArtistName] = useState("");
    
    const handleAddPastExhibition = () => {
        setOpenPastAdd(true);
    }

    const handleAddExhibition = () => {
        setOpenAdd(true);
    };

    const handleSendMessage = (name) => {
        setArtistName(name);
        setOpenMessage(true);
    }

    return (
        <div className="mx-auto w-full max-w-[450px] pl-[22px] mt-[23px]">
            <div className="w-full h-[145px] pr-[20px] mb-[32px]">
                <div className="w-full h-full bg-lightpurple01 rounded-[15px] flex flex-row justify-center items-center gap-[21px]">
                    <div 
                        className="w-[146px] h-[115px] bg-grey01 rounded-[5px] flex flex-col justify-center items-center cursor-pointer"
                        onClick={handleAddPastExhibition}>
                        <img src={artImg} alt="전시 등록" className="w-[38px] h-[38px]"/>
                        <p className="text-[13px] font-semibold">지난 전시</p>
                        <p className="text-[13px] font-semibold">기록하기</p>
                    </div>
                    <div
                        className="w-[146px] h-[115px] bg-grey01 rounded-[5px] flex flex-col justify-center items-center cursor-pointer"
                        onClick={handleAddExhibition}
                    >
                        <img src={artImg} alt="전시 등록" className="w-[38px] h-[38px]"/>
                        <p className="text-[13px] font-semibold">새로운 전시</p>
                        <p className="text-[13px] font-semibold">등록하기</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-[20px]">함께할 작가를 찾고 있습니다</h1>
                <div className="mt-[12px] flex flex-row gap-[12px] overflow-x-scroll">
                    <div className="flex-shrink-0">
                        <ArtistCard name={"예나"} num={8} place={"홍아트플레이스"} onClick={() => handleSendMessage("예나")}/>
                    </div>
                    <div className="flex-shrink-0">
                        <ArtistCard name={"민우"} num={4} place={"전시공간 미정"} onClick={() => handleSendMessage("예나")} img={profile_minwu}>
                        </ArtistCard>
                    </div>
                    <div className="flex-shrink-0">
                        <ArtistCard name={"태원"} num={8} place={"마포구 와우산로 94"} onClick={() => handleSendMessage("예나")}/>
                    </div>
                    <div className="flex-shrink-0">
                        <ArtistCard name={"서영"} num={8} place={"홍대 홍문관"} onClick={() => handleSendMessage("예나")}/>
                    </div>
                    
                </div>
            </div>

            <div className="mt-[47px] pr-[18px]">
                <h1 className="font-bold text-[20px]">비어있는 전시 공간</h1>
                <div className="flex flex-col mt-[12px]">
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                </div>
            </div>

            <AddPastExhibitionModal
            open={openPastAdd}
            onClose={() => setOpenPastAdd(false)}
            onSubmit={(data) => {
                console.log('전시 등록 데이터:', data);
                // TODO: API 연결해서 저장
            }}
            />

            <AddExhibitionModal
            open={openAdd}
            onClose={() => setOpenPastAdd(false)}
            onSubmit={(data) => {
                console.log('전시 등록 데이터:', data);
                // TODO: API 연결해서 저장
            }}
            />

            <ArtistModal 
                open={openMessage}
                onClose={() => setOpenMessage(false)}
                name={ArtistName}
                text={"전시 협업 문의 메세지를 "}
                type={"메세지를"}
            />
        </div>
    )
}

export default MainArtist;