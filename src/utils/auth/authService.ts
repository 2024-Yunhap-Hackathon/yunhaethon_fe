import { customAxios } from "../customAxios";



export const authorizeAccess = async (googleCode: string) => {
  try {
    const response = await customAxios.post(
      `/auth/google?code=${googleCode}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const { access_token: newAccessToken, refresh_token } = response.data;

    if (newAccessToken && refresh_token) {
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", refresh_token);
      window.location.href = "/mobile/inputInfo"
    }

    return true;
  } catch (error) {
    return error;
  }
};