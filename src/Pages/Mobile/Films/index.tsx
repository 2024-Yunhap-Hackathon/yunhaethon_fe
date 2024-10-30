import { Button } from "@/Components/Mobile";
import Footer from "@/Components/Mobile/footer";
import { theme } from "@/constants";
import { useState } from "react";
import styled from "styled-components";

const films = [
  {
    count: 1,
    price: 500,
  },
  {
    count: 5,
    price: 2200,
  },
  {
    count: 10,
    price: 4000,
  },
  {
    count: 20,
    price: 8000,
  },
  {
    count: 30,
    price: 12000,
  },
];

export const Films = () => {
  return (
    <Container>
      <Title>필름 충전</Title>
      <CountContainer>
        <Count>
          현재 가지고 있는 필름 <CountStrong>0개</CountStrong>
        </Count>
      </CountContainer>
      {films.map((i) => (
        <FilmContainer>
          <FilmCount>필름 {i.count}</FilmCount>
          <Button type="blue" fontType="small" width="100px" height="100px" onClick={() => {}}>
            {"₩" + i.price}
          </Button>
        </FilmContainer>
      ))}
      <Footer />
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
  height: 52px;
  display: flex;
  align-items: center;
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

const FilmContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${theme.gray[50]};
  border-bottom: 1px solid ${theme.gray[50]};
`;

const FilmCount = styled.span`
  font-family: Pretendard;
  font-weight: regular;
  font-size: 15px;
`;
