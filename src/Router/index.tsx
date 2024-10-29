import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import * as _ from "../Pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={_.Onboard} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
