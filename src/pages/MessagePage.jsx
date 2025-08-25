import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import sendImg from "../assets/send.svg";
import { useState } from "react";

const MessagePage = () => {
    const location = useLocation();
    const nav = useNavigate();
    //console.log(location.state);

    const [message, setMessage] = useState("");

    const handleBack = () => {
      nav(-1);
    }

    const onChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className="mx-auto w-full max-w-[450px] bg-grey02 min-h-screen">
            <div className="w-full bg-white pl-[23px]">
                <Header onClick={handleBack} />
            </div>
            <div className="bg-grey02 max-h-fit">
                <div className="px-[30px]">
                     {message}
                </div>
                <div className="px-[15px] fixed bottom-[50px] w-full">
                    <input 
                        type="text" 
                        className="relative w-full h-[53px] rounded-[27px] border-2 border-purple02 pl-[19px] text-[15px] placeholder:text-grey07 outline-none"
                        placeholder="메세지를 입력하세요."   
                        value={message} 
                        onChange={onChange}
                    />
                    <img 
                        src={sendImg} 
                        alt="send message" 
                        className="absolute top-[8px] right-[25px]"    
                    />
                    
                </div>
            </div>
           
        </div>
    )
}

export default MessagePage;