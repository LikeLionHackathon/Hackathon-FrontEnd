import tagImg from "../../assets/tags.svg";
import speech_bubble from "../../assets/speech_bubble.svg"
import { useEffect, useState } from "react";

const Connecting = ({que}) => {
    const messages = ["선호 작품 분석 중", "생각 중..."];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length); 
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    if (que) {
        return(
        <div className="w-full">
        <div className="flex flex-col">
            <div className="mt-[10px] flex text-[14px] w-[320px]">
                {que}
            </div>
        </div>

        <div className="flex flex-col justify-center mt-[43px] gap-[54px]">  
            <div className="text-purple01">{messages[index]}</div>
            <div className="flex items-center justify-center">
                <img 
                    src={tagImg} 
                    alt="connecting ai" 
                    className="max-w-[270px] ml-[10px]"  
                />
            </div>
        </div>
        </div>
        )
    }

    return (
        <div>
            <img src={speech_bubble} alt="말풍선" />
        </div>
    )
}

export default Connecting;