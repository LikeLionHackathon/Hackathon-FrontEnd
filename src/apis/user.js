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

export const getUserInfo = async ({user_id}) => {
  try {
    const res = await axiosInstance.get(`/api/v1/users/${user_id}`);
    //console.log(res);
    return res.data;
  } catch (err) {
    console.log('유저 데이터 GET 실패: ', err?.response?.status, err?.response?.data);
    throw err;
  }
};

export const getUserCard = async () => {
  try {
    const res = await axiosInstance.get('/api/v1/users/usercard');
    //console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const sendIsArtist = async () => {
  try {
    const res = await axiosInstance.post('api/v1/users/start');
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const getArtistExhibition = async () => {
  const res = await axiosInstance.get('/api/v1/exhibitionslist', {
    withCredentials: true,
  });
  console.log(res.data);
  const ArtistExhibition = res.data;
  if (Array.isArray(ArtistExhibition)) return ArtistExhibition;
  return [];
}

