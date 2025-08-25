import { useNavigate } from "react-router-dom";
import placeImg from "../../assets/cafe01.svg";

const PlaceCard = () => {
    const nav = useNavigate();

    return (
        <div className="flex h-[139px] mb-[15px] border-t-1 border-t-grey06">

            <div className="flex flex-row mt-[15px] w-full gap-[16px]" onClick={() => nav("/rent")}>
                <div className="w-[124px] h-[124px]">
                    <img src={placeImg} alt="전시 공간 이미지" className="w-full h-full object-cover rounded-[5px]"/>
                </div>

                <div className="flex flex-col justify-center gap-[8px] w-[220px]">
                    <h1 className="font-semibold text-[16px]">아르누보 카페</h1>
                    <p className="text-darkgrey01 text-[12px]">마포구 동교동 50-18</p>
                    <p className="text-darkgrey01 text-[12px]">24m^2/1층</p>
                    <p className="text-darkgrey01 text-[12px]">아르누보 카페 건물 1층 상가 공실입니다. 평균적으로 작품 20점 전시관으로 자주 사용...</p>
                </div>
            </div>
        </div>
    )
}

export default PlaceCard;