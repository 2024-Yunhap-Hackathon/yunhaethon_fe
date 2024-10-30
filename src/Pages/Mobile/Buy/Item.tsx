import { theme } from "@/constants";
import styled from "styled-components";

interface IProp {
  image: string;
  title: string;
  price: number;
  onClick: () => void;
}

export const Item = ({ image, title, price, onClick }: IProp) => {
  return (
    <Container onClick={onClick}>
      <Image src={image} />
      <Title>{title}</Title>
      <Price>{price}필름</Price>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 185px;
  padding: 20px;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${theme.gray[100]};
`;

const Image = styled.img`
  width: 80%;
  align-self: center;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: medium;
  font-family: Pretendard;
`;

const Price = styled.span`
  font-size: 14px;
  font-family: Pretendard;
  font-weight: medium;
  align-self: end;
  color: ${theme.blue[500]};
`;
