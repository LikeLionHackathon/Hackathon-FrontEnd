import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import sendImg from '../assets/send.svg';
import { useState } from 'react';
import { GoBackButton } from '../components/GoBackButton.jsx';
import room_img from '../assets/room_img.png';

const MessagePage = () => {
  const location = useLocation();
  const nav = useNavigate();

  // 1. 현재 입력 중인 메시지를 위한 state
  const [message, setMessage] = useState('');
  // 2. 채팅 기록을 저장할 배열 state
  const [messages, setMessages] = useState([]);

  const handleBack = () => {
    nav(-1);
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  // 3. 메시지 전송 처리 함수
  const handleMessage = () => {
    // 입력된 메시지가 없으면 함수 종료
    if (!message.trim()) return;

    // 기존 메시지 배열에 새 메시지를 추가하여 state 업데이트
    setMessages([...messages, message]);

    // 메시지 전송 후 입력창 비우기
    setMessage('');
  };

  // 4. Enter 키로도 메시지를 전송하는 함수
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessage();
    }
  };

  return (
    // 전체 화면을 차지하도록 구조 약간 수정
    <div className="mx-auto w-full max-w-[450px] bg-grey02 min-h-screen flex flex-col">
      <div className="w-full h-[100px] bg-white p-[20px] shadow-sm items-center">
        <div>
          <div className="flex flex-col justify-center items-center">
            <GoBackButton />
            <div className="text-[16px] font-[700] leading-1.5 text-center mt-10">예나</div>
          </div>
        </div>
      </div>

      {/* 메시지 목록이 표시될 영역 */}
      <div className="flex-grow px-[20px] py-[8px] flex flex-col gap-[10px] mt-8 items-center overflow-y-auto">
        {/* 5. messages 배열을 순회하며 각 메시지를 화면에 렌더링 */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-purple02 text-black px-[20px] py-[8px] rounded-[20px] self-end max-w-[70%]"
          >
            {msg}
          </div>
        ))}
      </div>

      {/* 메시지 입력창 */}
      <div className="p-[15px] bg-white">
        <div className="relative">
          <input
            type="text"
            className="w-full h-[53px] rounded-[27px] border-2 border-purple02 pl-[19px] pr-[50px] text-[15px] placeholder:text-grey07 outline-none"
            placeholder="메시지를 입력하세요."
            value={message}
            onChange={onChange}
            onKeyPress={handleKeyPress} // Enter 키 이벤트 핸들러 추가
          />
          <img
            src={sendImg}
            alt="send message"
            className="absolute top-1/2 -translate-y-1/2 right-[15px] cursor-pointer"
            onClick={handleMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
