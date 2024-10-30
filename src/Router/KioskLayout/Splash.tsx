import styled, { css, keyframes } from "styled-components";
import { useState } from "react";

export const Splash = () => {
  const [open, setOpen] = useState(1); // 1 - 열림, 0 - 닫히는 중, -1 - 닫힘

  const handleClose = () => {
    setOpen(0);
    setTimeout(() => setOpen(-1), 150);
  };

  return open === 1 || open === 0 ? (
    <Wrapper open={open} onClick={handleClose}>
      <Container>
        <PhotoLeft src="L.png" />
        <Logo src="Logo.png" />
        <PressToStart>화면을 터치해주세요</PressToStart>
        <PhotoRight src="R.png" />
      </Container>
    </Wrapper>
  ) : null;
};

const blink = keyframes`
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const close = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Wrapper = styled.div<{ open: number }>`
  position: absolute;
  z-index: 50;
  ${({ open }) =>
    open === 0 &&
    css`
      animation: ${close} 150ms ease;
    `}
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #ebedfa;
  align-items: center;
  position: relative;
  justify-content: center;
  overflow: hidden;
`;

const PhotoLayout = styled.img`
  width: 240px;
  height: 630px;
  box-shadow: 10px 20px 50px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
`;

const PhotoLeft = styled(PhotoLayout)`
  left: 163px;
  top: -141px;
`;

const PhotoRight = styled(PhotoLayout)`
  right: 163px;
  bottom: -181px;
`;

const Logo = styled.img`
  width: 199px;
  height: 203px;
`;

const PressToStart = styled.span`
  position: absolute;
  bottom: 49px;
  font-size: 28px;
  font-family: GSansLight;
  animation: ${blink} 1s infinite;
`;
