//import posterImg from "../../assets/poster.svg";
import {useNavigate} from 'react-router-dom';

const ExhibitionCard = ({exhibition}) => {
    const nav = useNavigate();
    
    const {
        id,
        title,
        location,
        description,
        startDate,
        endDate,
        posterImageUrl,
        recommendationReason
    } = exhibition;

    const reasonSentences = recommendationReason 
        ? recommendationReason.split("\n").map(s => s.trim()).filter(s => s.length > 0)
        : [];

    return (
        <div className="mb-[13px] flex flex-col items-center">
            <div className="cursor-pointer" onClick={() => nav(`/exhibitionDetail/${exhibition.id}`)}>
            <div className="h-[194px] w-[348px] rounded-[20px] bg-gradient-to-r from-grad3-1 via-grad3-2 to-grad3-3 p-[1px] pb-[0px]">
                <div className="flex bg-white rounded-[20px] h-full gap-[12px]">
                    <div className="w-[125px] my-auto ml-[9px]">
                        <img src={posterImageUrl} alt="poster" className="rounded-[17px]"/>
                    </div>
                    <div className="flex flex-col my-auto">
                        <h1 className="font-bold text-[20px]">{title}</h1>
                        <p className="text-[13px] text-darkgrey02">{location ?? "위치 미정"}</p>
                        <p className="text-[13px] text-darkgrey02">{startDate} ~ {endDate}</p>
                        <hr className="my-[13px] w-[185px]"/>
                        <p className="w-[180px] h-[50px] text-[12px] line-clamp-3">{description}</p>
                    </div>
                </div>
            </div>
            <hr className="w-[296px] border-grey05"/>
            <div className="h-[93px] w-[348px] rounded-[20px] bg-gradient-to-r from-grad3-1 via-grad3-2 to-grad3-3 p-[1px] pt-[0px]">
                <div className="flex bg-white rounded-[20px] h-full">
                    <div className="my-auto mx-[24px] flex flex-col text-[12px] text-darkgrey02 leading-5">
                        {reasonSentences.map((sentence, idx) => (
                            <p key={idx}>{sentence}</p>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default ExhibitionCard;