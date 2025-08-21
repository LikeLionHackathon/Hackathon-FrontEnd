import { axiosInstance } from "./axios";

export async function sendAiChat({text, images}) {
    const formData = new FormData();
    formData.append("text", text);

    images.forEach((file) => {
        if (file) {
            formData.append("images", file);
        }
    });

    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }


    try {
        const res = await axiosInstance.post("/api/v1/exhibitions/recommend", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("응답 성공: ", res.data);
        return res.data;
    } catch (err) {
        console.log("응답 실패: ", err);
        throw err;
    }
}

