import icon_ai from "../assets/icon_ai.svg"
import add_photo_button from "../assets/add_photo_button.svg"
import speech_bubble from "../assets/speech_bubble.svg"
import send_message from "../assets/send_message.svg"
import { useState } from "react"

export const AiChat = () => {
    const {isUploaded, setIsUploaded} = useState(false);

    const handleUpload = () => {
        setIsUploaded(true);
    }

    return(
        <div>
            <div className="flex">
                <img src={icon_ai} alt="ai icon" />
                <span className="text-[16px] leading-[125%] ">AI의 전시 추천받기</span>
            </div>

            <div className="">
                <div className="flex flex-row gap-[12px] items-center justify-center">
                    <div>
                        <div 
                        className="flex w-[100px] h-[100px] bg-grey05 rounded-[10px] justify-center items-center"
                        onClick={handleUpload}
                        >
                        <img src={add_photo_button} alt="add photo button"/>
                        </div>
                    </div> 
                    <div className="w-[100px] h-[100px] bg-grey05 rounded-[10px]"></div>
                    <div className="w-[100px] h-[100px] bg-grey05 rounded-[10px]"></div>
                </div>
                            <div className="mt-[5px]">
                <img src={speech_bubble} alt="말풍선" className="pl-[40px]"/>
                </div>  
            </div>

<form  className="w-[300px]">
      <div className="bg-gradient-to-r from-grad2-1 via-grad2-2 to-grad2-3 p-[2px] rounded-[37px]">
        <div className="flex items-center bg-white rounded-[37px] pl-4 pr-2">
          <input
            className="flex-1 h-[54px] bg-transparent outline-none text-grey07 text-[15px]"
            placeholder='"홍대 근처 사진관 추천해줘."'
          />

          <button
            type="submit"
            aria-label="전송"
            className="ml-2 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-purple01 disabled:opacity-50 cursor-pointer"
          >
            <img src={send_message} alt="" className="h-[37px] w-[37px] pointer-events-none" />
          </button>
        </div>
      </div>
    </form>
        </div>
    )
}