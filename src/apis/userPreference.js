import axiosInstance from "./axios";

export const getUserPreferences = async (userId) => {
    try {
        const res = await axiosInstance.get(`/api/v1/preferences/${userId}`);
        return res.data;
    }
    catch (err) {
        console.log('유저 선호 데이터 GET 실패: ', err?.response?.status, err?.response?.data);
        throw err;
    }
}