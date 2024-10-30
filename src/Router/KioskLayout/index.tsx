import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "@/constants";
import { Splash } from "./Splash";
import { Header } from "./Header";
import { useState } from "react";

export const KioskLayout = () => {
  return (
    <Wrapper>
      <Splash />
      <Header />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  background: ${theme.blue[50]};
`;
