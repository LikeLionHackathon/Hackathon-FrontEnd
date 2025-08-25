import icon_ai from "../assets/icon_ai.svg"
import send_message from "../assets/send_message.svg"
import { useState, useRef } from "react"
import UploadBox from "../components/ai/UploadBox"
import Connecting from "../components/ai/Connecting"
import { sendAiChat } from "../apis/aiChat"
import { useNavigate } from "react-router-dom"
import Header from "../components/layout/Header"

const AiChat = () => {
    const [que, setQue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const textAreaRef = useRef(null);
    const [images, setImages] = useState([null, null, null]);
    const nav = useNavigate();
    

    const onChange = (e) => {
      setInputValue(e.target.value);
      //console.log(que);
    }

    const handleImageChange = (index, file) => {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }

    const handleBack = () => {
      nav(-1);
    }

    const submitQue = async (e) => {
      e.preventDefault();
      setQue(inputValue);

      try {
        const result = await sendAiChat({
          text: inputValue,
          images,
        });
        console.log("백엔드 응답: ", result);
        const exhibitions = result?.recommendations ?? [];
        nav("/exhibitionList", {state: {exhibitions}});
      } catch (err) {
        console.log("전송 실패: ", err);
        alert("ai 전시 추천해 실패했습니다. 다시 시도해주세요.");
        setQue("");
      }

      setInputValue("");
      
    }
    

    return(
        <div className="mx-auto w-full max-w-[450px]">
          <div className="flex flex-col ml-[21px]">
            <Header text={""} onClick={handleBack} />
            <div className="flex gap-[5px]">
                <img src={icon_ai} alt="ai icon" />
                <span className="text-[16px] leading-[125%] ">AI의 전시 추천받기</span>
            </div>

            <div className="mt-[20px] flex flex-col self-start items-center  w-full pr-[20px]">
                <div className="flex flex-row gap-[12px] items-center justify-center">
                    {Array.from({length: 3}).map((_, index) => (
                      <UploadBox key={index} index={index} onImageChange={handleImageChange}/>
                    ))}
                </div>

                <Connecting que={que}/>
            </div>
          </div>
          
          {que ? null : (
          <div className="fixed bottom-[50px] left-0 right-0 px-[15px]">
            <form  className="w-full">
                <div className="bg-gradient-to-r from-grad2-1 via-grad2-2 to-grad2-3 p-[2px] rounded-[37px]">
                  <div className="flex items-center bg-white rounded-[37px] pl-4 pr-2 py-[8px]">
                    <textarea
                      className="flex-1 h-[37px] pl-2 bg-transparent outline-none placeholder:text-grey07 text-[15px] py-2 resize-none overflow-hidden leading-[1.4]"
                      placeholder='"홍대 근처 사진관 추천해줘."'
                      value={inputValue}
                      onChange={onChange}
                      rows={1}
                      ref={textAreaRef}
                      onInput={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height = `${e.target.scrollHeight}px`;
                      }}
                    />

                    <button
                      type="submit"
                      aria-label="전송"
                      onClick={submitQue}
                      className="ml-2 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-purple01 disabled:opacity-50 cursor-pointer"
                    >
                      <img src={send_message} alt="" className="h-[37px] w-[37px] pointer-events-none" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            )}
        </div>
    )
}

export default AiChat;