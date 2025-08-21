// src/api/exhibitionApi.js (혹은 src/services/exhibitionService.js)

import axiosInstance from './axios';

// 1. READ: 전시 등록정보 전체 조회 (최신순)
export const getExhibitions = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/exhibitions', {
      params: { sort: 'registeredDate' }
    });
    // 서버 응답에서 실제 전시 데이터만 반환
    return response.data.data.exhibitions;
  } catch (error) {
    console.error('전시 목록을 불러오는 데 실패했습니다:', error);
    throw error; // 에러를 호출한 곳에서 처리하도록 다시 던짐
  }
};

// 2. READ: 전시 등록정보 개별 조회
export const getExhibitionById = async (exhibitionId) => {
  try {
    const response = await axiosInstance.get(`/api/v1/exhibitions/${exhibitionId}`);
    return response.data; // 명세서에 따라 data 객체 없이 바로 전시 정보가 올 수 있으므로
  } catch (error) {
    console.error(`전시 ID ${exhibitionId}를 불러오는 데 실패했습니다:`, error);
    throw error;
  }
};

// 3. CREATE: 전시 등록
export const createExhibition = async (exhibitionData) => {
  try {
    const response = await axiosInstance.post('/api/v1/exhibitions', exhibitionData);
    return response.data; // 서버 응답 (예: 새로 생성된 전시 ID)
  } catch (error) {
    console.error('전시 등록에 실패했습니다:', error);
    throw error;
  }
};

// 4. UPDATE: 전시 정보 수정 (전체 업데이트)
export const updateExhibition = async (exhibitionId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/exhibitions/${exhibitionId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`전시 ID ${exhibitionId} 수정에 실패했습니다:`, error);
    throw error;
  }
};

// 5. DELETE: 전시 삭제
export const deleteExhibition = async (exhibitionId) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/exhibitions/${exhibitionId}`);
    return response.data;
  } catch (error) {
    console.error(`전시 ID ${exhibitionId} 삭제에 실패했습니다:`, error);
    throw error;
  }
};

// 6. UPDATE: 전시 작품/포스터 이미지 수정
export const updateExhibitionImages = async (exhibitionId, imageData) => {
  try {
    const response = await axiosInstance.put(`/exhibitions/${exhibitionId}/images`, imageData);
    return response.data;
  } catch (error) {
    console.error(`전시 작품/포스터 이미지 수정에 실패했습니다:`, error);
    throw error;
  }
};