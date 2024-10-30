import styled from "styled-components";
import { IKioskScreenProp } from "..";

export const CheckId = ({ setPageIndex }: IKioskScreenProp) => {
  return (
    <Container>
      <Input placeholder="아이디 입력" />
      <Button onClick={() => setPageIndex((prev) => prev + 1)}>완료</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`;

const Input = styled.input`
  font-family: GSansMedium;
  font-size: 30px;
  width: 70%;
  padding: 30px;
  background: white;
  border-radius: 20px;
  border: 0;
`;

const Button = styled.button`
  padding: 20px 70px;
  border-radius: 20px;
  background: black;
  color: white;
  font-size: 30px;
`;
