import { BrowserRouter, Route, Routes } from "react-router-dom";
import { KioskLayout } from "./KioskLayout";
import * as _ from "../Pages";
import { useAuthService } from "@/utils/auth/useAuthService.ts";

export const Router = () => {
  useAuthService();
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={KioskLayout}>
          <Route path="/kiosk" Component={_.Kiosk} />
        </Route>
        <Route path="/" Component={_.StartPage} />
        <Route path="/login" Component={_.Login} />
        <Route path="/inputInfo" Component={_.InputInfo} />
        {/* <Route path="/home" Component={_.Main} /> */}
        <Route path="/films" Component={_.Films} />
        <Route path="/store" Component={_.Buy} />
        <Route path="/notifications" Component={_.Notice} />
        <Route path="/code" Component={_.Code} />
        {/* <Route path="/write" Component={_.Write} /> */}
        <Route path="/album" Component={_.Album} />
        <Route path="/detail" Component={_.Detail} />
        <Route path="/replace" Component={_.Replace} />
      </Routes>
    </BrowserRouter>
  );
};
