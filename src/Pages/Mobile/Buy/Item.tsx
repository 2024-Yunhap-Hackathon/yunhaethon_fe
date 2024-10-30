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
  box-shadow: 64px 110px 36px 0px rgba(0, 0, 0, 0), 41px 70px 32px 0px rgba(0, 0, 0, 0.01),
    23px 39px 27px 0px rgba(0, 0, 0, 0.05), 10px 18px 20px 0px rgba(0, 0, 0, 0.08),
    3px 4px 11px 0px rgba(0, 0, 0, 0.09);
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
