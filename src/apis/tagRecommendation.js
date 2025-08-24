import axiosInstance from './axios';

export const getTagRecommendations = async (user_id, tagId) => {
  try {
    const res = await axiosInstance.get(
      `/api/v1/users/${user_id}/tag-recommendations/${tagId}`);
    return res.data;
  } catch (err) {
    console.log(
      '유저 태그별 정보 GET 실패: ',
      err?.response?.status,
      err?.response?.data
    );
    throw err;
  }
};
