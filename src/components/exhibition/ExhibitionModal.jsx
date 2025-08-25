import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { sendRating } from "../../apis/exhibition";
import starImg from "../../assets/star.svg";
import visitImg from "../../assets/visit.png";
import exitImg from "../../assets/exit.svg";

const ExhibitionModal = ({exhib_id, posterImg, onClose, title}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const handleClick = async (starValue) => {
        setRating(starValue);

        try{
            const result = await sendRating({
                userId: localStorage.getItem('userId'),
                exhibitionId: exhib_id,
                rate: starValue,
            });
            console.log("응답 성공: ", result);
            setIsSubmitted(true);
        } catch (err) {
            console.log("실패: ", err);
            alert("별점 전송 실패");
        }
    }

    useEffect (() => {
        document.body.style.overflow = `hidden`;
        return () => document.body.style = `overflow: auto`;
    }, []);

    return (
        // 1. 가장 바깥쪽 배경 div에 onClick={onClose}를 추가합니다.
        <div 
            className="bg-[#000000B2] backdrop-blur-[3px] fixed inset-0 flex flex-col justify-center items-center"
            onClick={onClose}
        >
            {/* 2. 모달 콘텐츠 영역을 div로 감싸고, 클릭 이벤트 전파를 막습니다. */}
            <div onClick={(e) => e.stopPropagation()}>
                <div className="w-[308px] h-[438px] -mb-[1px] bg-white pt-[8px] [clip-path:polygon(0_0,100%_0,100%_calc(100%-19px),calc(100%-38px)_100%,38px_100%,0_calc(100%-19px))]">
                    <div className="w-[290px] h-[410px] overflow-hidden mx-auto relative">
                        <img 
                            src={posterImg} 
                            alt="poster_image" 
                            className="w-full object-cover"
                        />
                        {isSubmitted && (
                            <div className="bg-[#F8FAFF]/[0.93] absolute inset-0 flex flex-col justify-center items-center">
                                <div className="absolute right-[2px] top-[2px]">
                                    <img src={exitImg} alt="exit" onClick={onClose}/>
                                </div>
                                <div className="mb-[17px]">
                                    <img src={visitImg} alt="visit" className="w-[93px]"/>
                                </div>
                                <div className="mb-[24px]">
                                    <p className="font-bold text-[20px] text-purple_main">방문 완료!</p>
                                </div>
                                <div className="flex flex-col justify-center items-center font-semibold text-[16px] text-purple_main">
                                    <p>방문한 전시는</p>
                                    <p>마이페이지에서 확인할 수 있어요.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-[308px] h-[124px] bg-white flex flex-col justify-center pl-[16px] gap-[5px] [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_19px,100%_100%,0_100%,0_19px)]">
                    {isSubmitted ? (
                        <div className="flex flex-col gap-[3px]">
                            <div className="flex flex-row gap-[20px] items-center">
                                <h1 className="font-bold text-[25px]">{title}</h1>
                                <div className="flex flex-row gap-1">
                                    <img src={starImg} alt="star" className="w-[30px]"/>
                                    <div className="flex justify-center items-center">
                                        <p className="text-[19px] text-purple_main">{rating}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[10px] font-semibold text-[22px] text-darkgrey03"> 
                                <p>박서영</p>
                                <p>박태원</p>
                            </div>
                        </div>
                    ) : (
                    <>
                    <p className="text-[12px] text-darkgrey02 pl-[10px]">이번 전시는 재밌게 보셨나요?</p>
                    <div className="flex flex-row" onMouseLeave={() => setHover(0)}>
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
                                    onClick={() => handleClick(star)}
                                >
                                    <FaStar className={`w-[40px] h-[38px] transition-colors ${className}`}/>
                                </div>
                            )
                        })}
                    </div>
                    </>)}
                </div>
            </div>
        </div>
    )
}

export default ExhibitionModal;