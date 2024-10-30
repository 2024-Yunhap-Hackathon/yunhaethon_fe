import styled from "styled-components";
import { useState } from "react";
import { Payment } from "./Payment";
import { usePageIndex } from "@/hooks";

export const PaymentSelect = () => {
  const { next } = usePageIndex();
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const handleClick = (id: string) => {
    setSelected(id);
    setTimeout(next, 300);
  };

  return (
    <Container>
      <Payment onClick={handleClick} selected={selected} title="현금" id="cash" icon="mdi:won" />
      <Payment
        onClick={handleClick}
        selected={selected}
        title="카드 (삼성페이)"
        id="card"
        icon="mdi:credit-card"
      />
      <Payment
        onClick={handleClick}
        selected={selected}
        title="간편결제 (카카오/네이버/페이코)"
        id="paymentService"
        icon="icon-park-outline:pay-code-two"
      />
      <UsageContainer>
        <UsageText>
          사용하실 <UsageStrong>결제 방식</UsageStrong>을 선택해주세요!
        </UsageText>
      </UsageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`;

const UsageContainer = styled.div`
  position: absolute;
  bottom: 80px;
`;

const UsageText = styled.span`
  font-size: 30px;
  font-family: GSansLight;
`;

const UsageStrong = styled.span`
  font-family: GSansMedium;
`;
