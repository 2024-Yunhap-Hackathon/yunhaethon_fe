import styled from "styled-components";
import { TGB, TPB, Black } from "@/assets";
import { usePageIndex } from "@/hooks";

export const BackSelect = () => {
  const { next } = usePageIndex();

  return (
    <Container>
      <Title>소유중인 배경</Title>
      <BackContainer>
        <BackItemContainer onClick={next}>
          <img src={TGB} />
          <BackName>트로피컬 그린 & 블루</BackName>
        </BackItemContainer>
        <BackItemContainer onClick={next}>
          <img src={TGB} />
          <BackName>트로피컬 그린 & 블루</BackName>
        </BackItemContainer>
        <BackItemContainer onClick={next}>
          <img src={TGB} />
          <BackName>트로피컬 그린 & 블루</BackName>
        </BackItemContainer>

        <BackItemContainer onClick={next}>
          <img src={Black} />
          <BackName>검정 단색</BackName>
        </BackItemContainer>
      </BackContainer>
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
  width: 100%;
  overflow: scroll;
  height: 400px;
  padding: 0 45%;
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
