import axiosInstance from "./axios";

export const createMyExhibition = async (exhibitionData) => {
  try {
    const formData = new FormData();

    // --- 1. '내용물' 준비 ---
    // 백엔드와 합의된 모든 필수 필드를 포함하고, 값의 형식을 정확히 맞춥니다.
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

    // --- 2. '포장' 하기 (415 오류 해결) ---
    // JSON 데이터를 Blob으로 감싸 'application/json' 타입을 명시합니다.
    formData.append(
      'data',
      new Blob([JSON.stringify(exhibitionRequest)], {
        type: 'application/json',
      })
    );
    
    // --- 이미지 데이터 추가 ---
    if (exhibitionData.images && exhibitionData.images.length > 0) {
      formData.append('posterImage', exhibitionData.images[0].file);
      exhibitionData.images.slice(1).forEach((image) => {
        formData.append('artworkImages', image.file);
      });
    }

    // --- API 호출 ---
    const response = await axiosInstance.post('/api/v1/exhibitions', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    });
    
    console.log('✅ 전시 생성 성공:', response.data);
    return response.data;

  } catch (error) {
    console.error('전시 생성 실패:', error.response?.data || error.message);
    throw error;
  }
};

export const getMyExhibitions = async ( exhibitionId ) => {
  try {
    const res = await axiosInstance.get(`/api/v1/exhibitions/${exhibitionId}`);
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