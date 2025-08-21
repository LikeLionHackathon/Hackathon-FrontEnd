import { useNavigate } from 'react-router-dom';
import glow_icon_mix from '../assets/glow_icon_mix.svg';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  const handleFindId = () => {
    // 아이디 찾기 로직
  };

  const handleResetPassword = () => {
    // 비밀번호 재설정 로직
  };

  const handleSignUp = () => {
    navigate('/onboarding');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <img src={glow_icon_mix} alt="glow_icon_login" />
      <input
        type="text"
        className="w-[300px] h-[50px] rounded-[10px] border-[1px] px-5 border-purple_main"
        placeholder="아이디"
      />
      <input
        type="text"
        className="w-[300px] h-[50px] rounded-[10px] border-[1px] px-5 border-purple_main"
        placeholder="비밀번호"
      />
      <button
        onClick={handleLogin}
        className="px-6 py-2 mt-[30px] bg-purple_main w-[300px] h-[50px] rounded-[10px] text-white leading-1.5 text-[15px] font-semibold hover:bg-blue-600"
      >
        로그인
      </button>

      <div className="flex flex-between gap-3 text-darkgrey01 text-[14px]">
        <div
          className="border-b-[1px] border-darkgrey01 cursor-pointer"
          onClick={handleFindId}
        >
          아이디 찾기
        </div>
        <div
          className="border-b-[1px] border-darkgrey01 cursor-pointer"
          onClick={handleResetPassword}
        >
          비밀번호 재설정
        </div>
        <div
          className="border-b-[1px] border-darkgrey01 cursor-pointer"
          onClick={handleSignUp}
        >
          회원가입
        </div>
      </div>
    </div>
  );
};
