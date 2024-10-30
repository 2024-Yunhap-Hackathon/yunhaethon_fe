import { Icon } from "@iconify/react";
import styled, { keyframes } from "styled-components";

interface IProp {
  status?: string;
}
export const Modal = ({ status }: IProp) => {
  return (
    <Container>
      <ModalContainer>
        <Notice>
          카드를 <NoticeStrong>화면 아래 리더기</NoticeStrong>에 삽입해주세요! ({status})
        </Notice>
        <NoticeIcon icon="ep:arrow-up-bold" rotate={90} width={30} />
      </ModalContainer>
    </Container>
  );
};

const move = keyframes`
  0% {
    bottom: 20px;
  }
  50% {
    bottom: 10px;
  }
  100% {
    bottom: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000dd;
  z-index: 20;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 10px;
`;

const Notice = styled.span`
  font-family: GSansLight;
  font-size: 20px;
`;

const NoticeStrong = styled(Notice)`
  font-family: GSanMedium;
`;

const NoticeIcon = styled(Icon)`
  position: absolute;
  animation: ${move} 1s infinite;
`;
