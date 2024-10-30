import axios, { AxiosError, AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

customAxios.interceptors.request.use((data) => {
  const token = localStorage.getItem("accessToken");
  const config = data;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const postRefreshToken = async () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await axios.post(`${BASE_URL}/auth/refresh`, {
    refreshToken,
  });
  return response;
};

export const useAxiosInterceptor = () => {
  customAxios.interceptors.response.use(
    (res) => res,
    async (error: AxiosError) => {
      const { config, response } = error;
      const status = response?.status;

      if (status === 401) {
        const originRequest = config;
        try {
          const response = await postRefreshToken();
          if (response.status === 201) {
            const newAccessToken = response.data.accessToken;
            localStorage.setItem("accessToken", newAccessToken);
            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            if (originRequest && originRequest.headers) {
              originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            }
            if (originRequest) {
              return axios(originRequest);
            }
            throw new Error("originRequest is undefined");
          }
        } catch (refreshError: unknown) {
          if ((refreshError as AxiosError).response?.status === 401) {
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
          }
        }
      }
      return Promise.reject(error);
    },
  );
};