import styled from "styled-components";
import { Icon } from "@iconify/react";

interface IProp {
  onClick: (id: string) => void;
  title: string;
  id: string;
  icon: string;
  selected?: string;
}

export const Payment = ({ onClick, title, id, icon, selected }: IProp) => {
  return (
    <PaymentContainer onClick={() => onClick(id)} selected={selected === id}>
      <PaymentTitle>{title}</PaymentTitle>
      <PaymentIcon icon={icon} width={30} />
    </PaymentContainer>
  );
};

const PaymentContainer = styled.div<{ selected: boolean }>`
  width: 400px;
  height: 250px;
  border-radius: 10px;
  border: 2px solid black;
  padding: 20px;
  background: white;
  position: relative;
  box-sizing: border-box;
  transition: 0.3s all;
  transform: scale(${({ selected }) => (selected ? "0.9" : "1")});
`;

const PaymentTitle = styled.span`
  font-family: GSansMedium;
  font-size: 24px;
`;

const PaymentIcon = styled(Icon)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 15px;
  border: 2px solid black;
  border-radius: 100px;
`;
