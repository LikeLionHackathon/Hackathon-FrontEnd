import icon_ai from "../assets/icon_ai.svg"
import ExhibitionCard from "../components/exhibition/ExhibitionCard";

const ExhibitionList = ({number}) => {
    number = 2;
    return(
        <div className="mx-auto w-full max-w-[450px]">
            <div className="flex flex-col mt-[31px] ml-[21px] mr-[21px]">
                <div className="flex gap-[5px]">
                    <img src={icon_ai} alt="ai icon" />
                    <span className="text-[16px] leading-[125%] ">AI의 전시 추천받기</span>
                </div>

                <div className="mt-[23px]">
                    <p className="bg-gradient-to-br from-grad1-1 to-grad1-2 bg-clip-text text-transparent">
                        AI 추천 결과입니다
                    </p>
                    <p className="bg-gradient-to-br from-grad1-1 to-grad1-2 bg-clip-text text-transparent">
                        결과 {number}개
                    </p>
                </div>

                <div className="mt-[12px]">
                    <ExhibitionCard />
                    <ExhibitionCard />
                </div>
            </div>

            
        </div>
    )
}

export default ExhibitionList;