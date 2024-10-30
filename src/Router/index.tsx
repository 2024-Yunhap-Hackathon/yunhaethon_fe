import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as _ from "../Pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kiosk" Component={_.Kiosk} />
        <Route path="/mobile" Component={_.StartPage} />
        <Route path="/mobile/login" Component={_.Login} />
        <Route path="/mobile/inputInfo" Component={_.InputInfo} />
      </Routes>
    </BrowserRouter>
  );
};
