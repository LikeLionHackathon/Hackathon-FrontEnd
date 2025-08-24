import axiosInstance from './axios';

export const sendRating = async ({exhibitionId, rate, userId}) => {
    try{
        const res = await axiosInstance.post(`/api/v1/exhibitions/${exhibitionId}/reviews`, {
            userId,
            rate,
            exhibitionId,
        }, {
          withCredentials: true,
        });
        console.log("백엔드 전송 성공:", res.data);
        return res.data;
    } catch (err) {
        console.log("별점 전송 실패: ", err);
        throw err;
    }
}

export const getRating = async () => {
  const res = await axiosInstance.get('api/v1/exhibitions/visited', {
    withCredentials: true,
  })
  console.log("갔던 전시: ", res.data);
  const visitedList = res.data;

  if (Array.isArray(visitedList)) return visitedList;
  return [];
} 

export const sendExhibitionLike = async ({exhibitionId}) => {
  try {
    const res = await axiosInstance.post(`/api/v1/exhibitions/${exhibitionId}/likes `, {
      exhibitionId
    }, {
      withCredentials: true,
    });
    console.log("전시 좋아요 성공: ", res.data);
  } catch (err) {
    console.log("전시 좋아요 실패: ", err);
    throw err;
  }
}

export const getExhibitionLike = async () => {
  const res = await axiosInstance.get('/api/v1/exhibitions/likes', {
    withCredentials: true,
  });
  console.log("가보고 싶은 전시: ", res.data);
  const likeList = res.data;

  if (Array.isArray(likeList)) return likeList;
  return [];
}

export const getExhibitions = async () => {
  const res = await axiosInstance.get('/api/v1/exhibitions?sort=registeredDate&direction=DESC', {
      withCredentials:true,
  });

  const data = res.data;
  console.log(res.data);

  // ✅ 정상일 때만 배열 반환
  if (Array.isArray(data)) return data;
  // 응답 형태가 다르면 빈 배열로
  return [];
};

// 전시 등록정보 개별 조회
export const getExhibitionById = async (exhibitionId) => {
  try {
    const response = await axiosInstance.get(`/api/v1/exhibitions/${exhibitionId}`);
    return response.data; // 명세서에 따라 data 객체 없이 바로 전시 정보가 올 수 있으므로
  } catch (error) {
    console.error(`전시 ID ${exhibitionId}를 불러오는 데 실패했습니다:`, error);
    throw error;
  }
};

// CREATE
export const createExhibition = async (exhibitionData) => {
  try {
    const response = await axiosInstance.post('/api/v1/exhibitions', exhibitionData);
    return response.data; // 서버 응답 (예: 새로 생성된 전시 ID)
  } catch (error) {
    console.error('전시 등록에 실패했습니다:', error);
    throw error;
  }
};

// UPDATE: 전시 정보 수정 (전체 업데이트)
export const updateExhibition = async (exhibitionId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/exhibitions/${exhibitionId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`전시 ID ${exhibitionId} 수정에 실패했습니다:`, error);
    throw error;
  }
};

// DELETE: 전시 삭제
export const deleteExhibition = async (exhibitionId) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/exhibitions/${exhibitionId}`);
    return response.data;
  } catch (error) {
    console.error(`전시 ID ${exhibitionId} 삭제에 실패했습니다:`, error);
    throw error;
  }
};

// UPDATE: 전시 작품/포스터 이미지 수정
export const updateExhibitionImages = async (exhibitionId, imageData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/exhibitions/${exhibitionId}/images`, imageData);
    return response.data;
  } catch (error) {
    console.error(`전시 작품/포스터 이미지 수정에 실패했습니다:`, error);
    throw error;
  }
};

