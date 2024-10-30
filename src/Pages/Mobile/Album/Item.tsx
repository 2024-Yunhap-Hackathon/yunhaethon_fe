import { theme } from "@/constants";
import styled from "styled-components";

interface IProp {
  image: string;
  date: string;
}

export const Item = ({ image, date }: IProp) => {
  return (
    <Container>
      <Image src={image} />
      <Date>{date}</Date>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Date = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  color: ${theme.gray[300]};
`;

const Image = styled.img`
  width: 185px;
  height: 270px;
`;
