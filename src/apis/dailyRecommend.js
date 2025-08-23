import axiosInstance from './axios';

export const createDailyRecommendation = async ({user_id, date, recommendedExhibitions}) => {
  try {
    const response = await axiosInstance.post(`/api/v1/users/${user_id}/daily-recommendations`, {
      user_id,
      date,
      recommendedExhibitions,
    });

    console.log('추천 생성 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('추천 생성 실패:', error);
    throw error;
  }
};


export const getDailyRecommend = async ({user_id}) => {
  try {
    const res = await axiosInstance.get(`/api/v1/users/${user_id}/daily-recommendations`);
    return res.data;
  } catch (err) {
    console.log('일일 추천 데이터 GET 실패: ', err?.response?.status, err?.response?.data);
    throw err;
  }
};