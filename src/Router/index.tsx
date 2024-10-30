import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as _ from "../Pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kiosk" Component={_.Kiosk} />
      </Routes>
    </BrowserRouter>
  );
};
