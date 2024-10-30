import { Button } from "@/Components/Mobile";
import Footer from "@/Components/Mobile/footer";
import { theme } from "@/constants";
import { useState } from "react";
import styled from "styled-components";

interface IProp {
  title: string;
  date: string;
}

export const Item = ({ title, date }: IProp) => {
  const [open, setOpen] = useState(false);

  return (
    <Container onClick={() => setOpen(!open)} open={open}>
      <TitleContainer>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </TitleContainer>
      <ButtonContainer>
        <Button type="blue" fontType="small" width="100%" height="32px" onClick={() => {}}>
          저장하기
        </Button>
        <Button type="gray" fontType="small" width="100%" height="32px" onClick={() => {}}>
          삭제하기
        </Button>
      </ButtonContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div<{ open: boolean }>`
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid ${theme.gray[100]}
  background: white;
  display: flex;
  height: ${({ open }) => (open ? "fit-content" : "60px")};
  overflow: hidden;
  flex-direction: column;
  gap: 20px;
  box-shadow: 10px 22px 51px 0px rgba(0,0,0,0.26);
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 21px;
`;

const Title = styled.span`
  font-family: Pretendard;
  font-weight: regular;
  font-size: 18px;
`;

const Date = styled.span`
  font-family: Pretendard;
  font-weight: regular
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
