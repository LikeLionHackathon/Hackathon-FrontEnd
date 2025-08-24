import { useNavigate } from 'react-router-dom';
import glow_icon_mix from '../assets/glow_icon_mix.png';
import { useState } from 'react';
import { doLogin } from '../apis/login';

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ loginId: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleLogin = async () => {
    if (!form.loginId || !form.password) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // API 호출 후 응답 데이터를 responseData 변수에 저장
      const responseData = await doLogin(form);
      console.log('로그인 응답:', responseData);

      // isFirst 값에 따라 조건부 페이지 이동
      if (responseData.first) {
        navigate('/onboarding'); // true일 경우 온보딩 페이지로
      } else {
        navigate('/'); // false일 경우 메인 페이지로
      }
    } catch (err) {
      console.error('로그인 실패:', err);
      setError('아이디 또는 비밀번호가 일치하지 않습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleFindId = () => {
    navigate('/find-id');
  };

  const handleResetPassword = () => {
    navigate('/reset-password');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <img src={glow_icon_mix} alt="glow_icon_login" className='w-[164px]' />

      <input
        name="loginId"
        type="text"
        className="w-[300px] h-[50px] rounded-[10px] border-[1px] px-5 border-purple_main"
        placeholder="아이디"
        value={form.loginId}
        onChange={onChange}
        disabled={loading}
      />
      <input
        name="password"
        type="password"
        className="w-[300px] h-[50px] rounded-[10px] border-[1px] px-5 border-purple_main"
        placeholder="비밀번호"
        value={form.password}
        onChange={onChange}
        disabled={loading}
      />
      
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleLogin}
        className="px-6 py-2 mt-[30px] bg-purple_main w-[300px] h-[50px] rounded-[10px] text-white leading-1.5 text-[15px] font-semibold hover:bg-blue-600 disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? '로그인 중...' : '로그인'}
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