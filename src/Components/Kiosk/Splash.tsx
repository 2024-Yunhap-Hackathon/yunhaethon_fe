import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

interface IProp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Splash = ({ setOpen, open }: IProp) => {
  const [opening, setOpening] = useState(true);

  useEffect(() => {
    if (open) setOpening(true);
    else setTimeout(() => setOpening(false), 145);
  }, [open]);

  return opening ? (
    <div style={{ position: "absolute", zIndex: 50 }}>
      <Container onClick={() => setOpen(false)} open={open}>
        <PhotoLeft src="L.png" />
        <Logo src="Logo.png" />
        <PressToStart>화면을 터치해주세요</PressToStart>
        <PhotoRight src="R.png" />
      </Container>
    </div>
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

const Container = styled.div<{ open: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #ebedfa;
  align-items: center;
  position: relative;
  justify-content: center;
  overflow: hidden;
  ${({ open }) =>
    !open &&
    css`
      animation: ${close} 150ms ease;
    `}
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
