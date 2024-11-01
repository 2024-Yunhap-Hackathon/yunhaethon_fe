import styled from "styled-components";
import { TGB, TPB, Black } from "@/assets";
import { IKioskScreenProp } from ".";

export const BackSelect = ({ setPageIndex }: IKioskScreenProp) => {
  return (
    <Container>
      <Title>추천 배경</Title>
      <BackContainer>
        <BackItemContainer
          onClick={() => {
            setPageIndex((prev) => prev + 1);
          }}
        >
          <img src={TGB} />
          <BackName>트로피컬 그린 & 블루</BackName>
        </BackItemContainer>
        <BackItemContainer
          onClick={() => {
            setPageIndex((prev) => prev + 1);
          }}
        >
          <img src={TPB} />
          <BackName>트로피컬 핑크 & 바이올렛</BackName>
        </BackItemContainer>
        <BackItemContainer
          onClick={() => {
            setPageIndex((prev) => prev + 1);
          }}
        >
          <img src={Black} />
          <BackName>검정 단색</BackName>
        </BackItemContainer>
      </BackContainer>
      <UseQRBack>또는 스토어에서 받은 배경 사용하기</UseQRBack>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  position: relative;
  justify-content: center;
  flex-shrink: 0;
`;

const Title = styled.span`
  font-family: GSansMedium;
  font-size: 28px;
`;

const BackContainer = styled.div`
  display: flex;
  gap: 300px;
  align-items: center;
`;

const BackItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BackName = styled.span`
  font-family: GSansMedium;
  font-size: 22px;
  position: absolute;
  bottom: -30px;
  width: max-content;
  align-self: center;
`;

const UseQRBack = styled.span`
  position: absolute;
  font-family: GSansLight;
  font-size: 24px;
  bottom: 80px;
`;
