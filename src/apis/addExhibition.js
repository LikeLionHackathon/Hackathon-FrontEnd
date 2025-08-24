// src/apis/addExhibition.js
import axiosInstance from "./axios";

export const createMyExhibition = async (exhibitionData) => {
  try {
    const formData = new FormData();

    // 1. 전송할 JSON 객체 생성
    const exhibitionRequest = {
      title: exhibitionData.title,
      location: exhibitionData.place,
      description: exhibitionData.concept,
      startDate: exhibitionData.startDate,
      endDate: exhibitionData.endDate,
      artists: exhibitionData.artists.map((artist) => artist.id),
      registeredDate: new Date().toISOString().split('T')[0].replaceAll('-', '/'),

    };

    console.log("🚀 서버로 전송될 최종 JSON 데이터:", exhibitionRequest);

    // ✅ 누락된 로직 추가 1: JSON 데이터를 'data' 파트에 추가
    formData.append(
      'data',
      new Blob([JSON.stringify(exhibitionRequest)], {
        type: 'application/json',
      })
    );

    if (exhibitionData.images && exhibitionData.images.length > 0) {
      formData.append('posterImage', exhibitionData.images[0].file);

      exhibitionData.images.slice(1).forEach((image) => {
        formData.append('artworkImages', image.file);
      });
    }

    // API 호출
    const response = await axiosInstance.post('/api/v1/exhibitions', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('전시 생성 실패:', error);
    throw error;
  }
};

export const getMyExhibitions = async () => {
  try {
    const res = await axiosInstance.get(`/api/v1/exhibitions`);
    return res.data;
  } catch (err) {
    console.log(
      '전시 데이터 GET 실패: ',
      err?.response?.status,
      err?.response?.data
    );
    throw err;
  }
};
