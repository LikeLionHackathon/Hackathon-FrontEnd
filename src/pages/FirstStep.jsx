import { useNavigate } from 'react-router-dom';
import glow_firstpage from '../assets/glow_firstpage.png';
import glow_slogan from '../assets/glow_slogan.png';

export const FirstStep = () => {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="w-screen h-screen bg-purple_main">
      <div className="flex flex-col items-center">
        <img
          className="w-[166px] h-[166px] mt-[324px]"
          src={glow_firstpage}
          alt="메인로고"
        />
        <img className="w-[200px] h-[34.8px]" src={glow_slogan} alt="" />
        <button className='w-[300px] h-[50px] items-center justify-center bg-white rounded-[10px] mt-[150px] text-purple_main text-[15px] font-[600] leading-1.5' onClick={handleToLogin}>로그인하기</button>
      </div>
    </div>
  );
};
