import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { sendRating } from "../../apis/exhibition";


const ExhibitionModal = ({exhib_id, posterImg, onClose}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleMouseMove = (e, star) => {
        const {left, width} = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        if (x < width / 2) {
            setHover(star - 0.5);
        } else {
            setHover(star);
        }
    }

    const displayValue = hover || rating;

    const handleClick = async () => {
        setRating(hover);
        console.log(hover);
        console.log(rating);

        try{
            const result = await sendRating({
                userId: 1,
                exhibitionId: exhib_id,
                rate: hover,
            });
            console.log("응답 성공: ", result);
        } catch (err) {
            console.log("실패: ", err);
            alert("별점 전송 실패");
        }

        setTimeout(() => {
            onClose()
        }, 2000);
    }

    useEffect (() => {
        document.body.style.overflow = `hidden`;
        return () => document.body.style = `overflow: auto`;
    }, []);

    return (
        <div className="bg-[#000000B2] backdrop-blur-[3px] fixed inset-0 flex flex-col justify-center items-center">
            <div className="w-[308px] h-[438px] -mb-[1px] bg-white pt-[8px] [clip-path:polygon(0_0,100%_0,100%_calc(100%-19px),calc(100%-38px)_100%,38px_100%,0_calc(100%-19px))]">
                <div className="w-[290px] h-[410px] overflow-hidden mx-auto">
                    <img 
                        src={posterImg} 
                        alt="poster_image" 
                        className="w-full object-cover"
                    />
                </div>
            </div>
            <div className="w-[308px] h-[124px] bg-white flex flex-col justify-center pl-[16px] gap-[5px] [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_19px,100%_100%,0_100%,0_19px)]">
                <p className="text-[12px] text-darkgrey02 pl-[10px]">이번 전시는 재밌게 보셨나요?</p>
                <div className="flex flex-row">
                    {[1, 2, 3, 4, 5].map((star) => {
                        let className = "fill-grey04";

                        if (star <= displayValue) {
                            className="fill-purple_main";

                        } else if (star - 0.5 === displayValue) {
                            className = "fill-purple_main [clip-path:inset(0_50%_0_0)]";
                        }

                        return (
                            <div
                                key={star}
                                className="w-[54px] h-[52px] flex items-center justify-center cursor-pointer"
                                onMouseMove={(e) => handleMouseMove(e, star)}
                                onMouseLeave={() => setHover(0)}
                                onClick={handleClick}
                            >
                                <FaStar className={`w-[40px] h-[38px] transition-colors ${className}`}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ExhibitionModal;