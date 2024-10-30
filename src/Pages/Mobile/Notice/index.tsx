import styled from "styled-components";
import { Item } from "./Item";

export const Notice = () => {
  return (
    <Container>
      <Title>내 알림</Title>
      <Item title="test" date="2024. 10. 30" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 80px 20px 0 20px;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  font-family: Pretendard;
`;
