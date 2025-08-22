import icon_ai from "../assets/icon_ai.svg"
import ExhibitionCard from "../components/exhibition/ExhibitionCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/layout/Header";

const ExhibitionList = () => {
    const nav = useNavigate();
    const location = useLocation();
    const [exhibitions, setExhibitions] = useState([]);

    const handleBack = () => {
      nav(-1);
    }

    useEffect(() => {
        if (location.state?.exhibitions) {
            setExhibitions(location.state.exhibitions);
        }
    }, [location.state]);


    return(
        <div className="mx-auto w-full max-w-[450px]">
            <div className="flex flex-col ml-[21px] mr-[21px]">
                <Header text={""} onClick={handleBack}/>
                <div className="flex gap-[5px]">
                    <img src={icon_ai} alt="ai icon" />
                    <span className="text-[16px] leading-[125%] ">AI의 전시 추천받기</span>
                </div>

                <div className="mt-[23px]">
                    <p className="bg-gradient-to-br from-grad1-1 to-grad1-2 bg-clip-text text-transparent">
                        AI 추천 결과입니다
                    </p>
                    <p className="bg-gradient-to-br from-grad1-1 to-grad1-2 bg-clip-text text-transparent">
                        결과 {exhibitions.length}개
                    </p>
                </div>
                {exhibitions.length === 0 && (
                    <p className="mt-[5px]">추천 전시가 없습니다.</p>
                )}

                <div className="mt-[12px]">
                    {exhibitions.map((ex, idx) => (
                        <ExhibitionCard 
                            key={idx}
                            exhibition={ex}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExhibitionList;