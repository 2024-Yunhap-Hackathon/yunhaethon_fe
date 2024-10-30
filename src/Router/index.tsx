import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as _ from "../Pages";
// import {useAuthService} from "@/utils/auth/useAuthService.ts";

export const Router = () => {
  // useAuthService()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kiosk" Component={_.Kiosk} />
        <Route path="/mobile" Component={_.StartPage} />
        <Route path="/mobile/login" Component={_.Login} />
        <Route path="/mobile/inputInfo" Component={_.InputInfo} />
        <Route path="/mobile/home" Component={_.Main} />
      </Routes>
    </BrowserRouter>
  );
};
