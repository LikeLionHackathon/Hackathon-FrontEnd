import axiosInstance from "./axios";

export const sendRating = async ({exhib_id, date, user_id}) => {
    try{
        const res = await axiosInstance.post(`/api/v1/users/${user_id}/daily-recommendations`, {
            user_id,
            date,
            exhib_id,
        });
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log("별점 전송 실패: ", err);
        throw err;
    }
}