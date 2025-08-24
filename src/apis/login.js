import axiosInstance from './axios';

export const doLogin = async ({ loginId, password }) => {
  try {
    const res = await axiosInstance.post(
      `/api/v1/auth/login`,
      { loginId, password },
      { withCredentials: true }
    );
    console.log('로그인 성공:', res.data);
    localStorage.setItem('userId', res.data.userId);
    return res.data;
  } catch (error) {
    console.error('유저 생성 실패:', error?.res || error);
    throw error;
  }
};