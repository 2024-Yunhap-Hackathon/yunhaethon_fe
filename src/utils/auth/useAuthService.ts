import { useEffect } from "react";
import { authorizeAccess } from "./authService";

export const useAuthService = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const googleCode = params.get("code");
    console.log(googleCode);
    const denied = params.get("error");

    if (googleCode) {
      (async () => {
        try {
          await authorizeAccess(googleCode);
        } catch (error) {
          console.error(error);
        }
      })();
    } else if (denied) {
      window.location.replace("/login")
    }
  }, []);
};