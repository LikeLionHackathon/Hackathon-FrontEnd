import axiosInstance from "./axios";

export const createUser = async () => {
  try {
    const response = await axiosInstance.post(`/api/v1/users`);
    console.log('유저 생성 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('유저 생성 실패:', error);
    throw error;
  }
};

export const getUserInfo = async (user_id) => {
  try {
    const res = await axiosInstance.get(`/api/v1/users/${user_id}`);
    return res.data;
  } catch (err) {
    console.log('유저 데이터 GET 실패: ', err?.response?.status, err?.response?.data);
    throw err;
  }
};