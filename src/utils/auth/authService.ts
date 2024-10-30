import { customAxios } from "../customAxios";

// export const fetchUserData = async () => {
//   try {
//     const { data } = await customAxios.get("/user");
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// 사용자 정보 받아오기

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
    }

    return true;
  } catch (error) {
    return error;
  }
};