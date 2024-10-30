import { theme } from "@/constants";
import styled from "styled-components";

export const Films = () => {
  return (
    <Container>
      <Title>필름 충전</Title>
      <CountContainer>
        <Count></Count>
      </CountContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 80px 0 0 0;
`;

const Title = styled.span`
  font-weight: bold;
  padding: 0 20px;
  font-size: 24px;
  font-family: Pretendard;
`;

const CountContainer = styled.div`
  padding: 8px 20px;
  background: ${theme.blue[50]};
`;

const Count = styled.span`
  font-weight: regular;
  font-size: 18px;
  font-family: Pretendard;
`;

const CountStrong = styled(Count)`
  font-weight: bold;
  color: ${theme.blue[500]};
`;
