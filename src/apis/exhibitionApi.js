// src/apis/exhibitionApi.js

import axiosInstance from './axios.js';

// GET /api/v1/exhibitions?sort=registeredDate API를 호출하는 함수
export const getExhibitions = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/exhibitions', {
      params: { sort: 'registeredDate' }
    });
    // API 명세서에 따라 'data.exhibitions' 배열을 반환합니다.
    return response.data.data.exhibitions;
  } catch (error) {
    // 에러 발생 시 콘솔에 로그를 출력하고, 에러를 다시 던져서 호출한 곳에서 처리하도록 합니다.
    console.error('전시 목록을 불러오는 데 실패했습니다:', error);
    throw error;
  }
};