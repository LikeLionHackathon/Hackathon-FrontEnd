import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "localhost:8080",
    headers: {
    'Content-Type': 'application/json',
  },
})