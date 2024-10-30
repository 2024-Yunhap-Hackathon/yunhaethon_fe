import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

customAxios.interceptors.request.use((data) => {
  const token = localStorage.getItem("accessToken");
  const config = data;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});