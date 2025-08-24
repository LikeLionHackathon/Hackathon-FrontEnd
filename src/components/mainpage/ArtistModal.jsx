import { useEffect } from "react";
import letterImg from "../../assets/letter.svg";

const ArtistModal = ({open, onClose, onClick, name, text, type}) => {

    useEffect (() => {
        if (open) {
            document.body.style.overflow = `hidden`;
        } else {
            document.body.style.overflow = `auto`;
        }
        return () => document.body.style = `overflow: auto`;
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-[10px] flex items-center justify-center">
            <div className="w-[348px] h-[600px] shrink-0 rounded-[15px] bg-white px-4 shadow-xl flex flex-col relative items-center">
                <div className=" w-[192px] h-[192px] flex justify-center items-center absolute top-[140px]">
                    <img src={letterImg} alt="img"/>
                </div>

                <div className="flex flex-col justify-center items-center absolute top-[356px] text-[16px]">
                    <p><span className="font-bold">{name}</span>님에게</p>
                    <p>{text}</p>
                    <p>보내시겠어요?</p>
                </div>

                <div className="flex flex-col absolute bottom-[21px] gap-[12px]">
                    <button 
                        className="w-[300px] h-[48px] bg-purple_main rounded-[10px] text-white cursor-pointer"
                        onClick={onClick}  
                    >
                        네, {type} 보낼래요!
                    </button>
                    <button 
                        className="w-[300px] h-[48px] text-purple_main rounded-[10px] bg-grey05 cursor-pointer"
                        onClick={onClose}    
                    >
                        다시 생각해볼래요.
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArtistModal;