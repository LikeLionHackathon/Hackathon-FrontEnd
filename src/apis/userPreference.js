import axiosInstance from "./axios";

export const getUserPreferences = async () => {
    try {
        const res = await axiosInstance.get('/api/v1/preferences', {
            withCredentials: true,
        });
        const userTag = res.data;
        if (Array.isArray(userTag)) return userTag;
        return [];
    }
    catch (err) {
        console.log('유저 선호 데이터 GET 실패: ', err);
        throw err;
    }
}

// export const getUserPreferences = async () => {
//     const res = await axiosInstance.get('api/v1/preferences', {
//         withCredentials: true,
//     });
//     console.log("유저 태그 성공: ", res.data);

// }

export const postUserPreferences = async ({preferenceAnswers, userType}) => {
    try {
        const res = await axiosInstance.post('/api/v1/preferences', {
            userType,
            preferenceAnswers
        }, {
            withCredentials:true,
        });
        console.log("유저 취향 생성:", res);
    } catch (err) {
        console.log("유저 취향 생성 실패 : ", err);
        throw err;
    }
}