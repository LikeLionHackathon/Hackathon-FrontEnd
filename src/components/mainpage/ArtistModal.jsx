import { useEffect } from "react";

const ArtistModal = ({open, onClose, name}) => {

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
                <div className="w-[146px] h-[146px] rounded-[10px] bg-grey05 flex justify-center items-center absolute top-[140px]">
                    그래픽
                </div>

                <div className="flex flex-col justify-center items-center absolute top-[356px] text-[16px]">
                    <p><span className="font-bold">{name}</span>님에게</p>
                    <p>전시 협업 문의 메세지를</p>
                    <p>보내시겠어요?</p>
                </div>

                <div className="flex flex-col absolute bottom-[21px] gap-[12px]">
                    <button className="w-[300px] h-[48px] bg-purple_main rounded-[10px] text-white cursor-pointer">
                        네, 메세지를 보낼래요!
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