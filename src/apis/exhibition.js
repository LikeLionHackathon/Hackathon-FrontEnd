import { axiosInstance } from "./axios";

export const sendRating = async ({exhib_id, rate, userId}) => {
    try{
        const res = await axiosInstance.post(`/api/v1/exhibitions/${exhib_id}/reviews`, {
            userId,
            rate,
            exhib_id,
        });
        console.log("백엔드 전송 성공:", res.data);
        return res.data;
    } catch (err) {
        console.log("별점 전송 실패: ", err);
        throw err;
    }
}