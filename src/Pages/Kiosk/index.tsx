import { theme } from "@/constants";
import { useState } from "react";
import styled from "styled-components";
import { TypeSelect } from "./TypeSelect";
import { PaymentSelect } from "./PaymentSelect";
import { Payment } from "./Payment";
import { Capture } from "./Capture";
import { CaptureSelect } from "./CaptureSelect";
import { BackSelect } from "./BackSelect";
import { Download } from "./Download";
import { CheckId } from "./CheckId";
import { usePageIndex } from "@/hooks";

export const Kiosk = () => {
  const { index } = usePageIndex();

  return (
    <Container>
      <PageContainer index={index}>
        <CheckId />
        <TypeSelect />
        <PaymentSelect />
        <Payment />
        <Capture />
        <CaptureSelect />
        <BackSelect />
        <Download />
      </PageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${theme.blue[50]};
  display: flex;
  flex-shrink: 0;
`;

const PageContainer = styled.div<{ index: number }>`
  width: 100%;
  display: flex;
  transition: 0.5s all;
  transform: translateX(calc(-100% * ${({ index }) => index}));
`;
