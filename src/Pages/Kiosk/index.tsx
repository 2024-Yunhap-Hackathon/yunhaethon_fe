import { Header, Splash } from "@/Components";
import { theme } from "@/constants";
import { useState } from "react";
import styled from "styled-components";
import { TypeSelect } from "./TypeSelect";
import { PaymentSelect } from "./PaymentSelect";
import { Payment } from "./Payment";
import { Capture } from "./Capture";
import { CaptureSelect } from "./CaptureSelect";
import { BackSelect } from "./BackSelect";

interface IData {
  images: Array<{
    name: string;
    selected: boolean;
  }>;
  voice: undefined;
  type: string;
  backgroundCode: string;
  printCount: number;
}

export interface IKioskScreenProp {
  data?: IData;
  pageIndex?: number;
  setData?: React.Dispatch<React.SetStateAction<IData>>;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const Kiosk = () => {
  const [open, setOpen] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [data, setData] = useState<IData>({
    images: [],
    voice: undefined,
    type: "",
    backgroundCode: "",
    printCount: 1,
  });

  return (
    <Container>
      <Splash setOpen={setOpen} open={open} />
      <Header pageIndex={pageIndex} setPageIndex={setPageIndex} />
      <PageContainer pageindex={pageIndex}>
        <TypeSelect setPageIndex={setPageIndex} setData={setData} data={data} />
        <PaymentSelect setPageIndex={setPageIndex} />
        <Payment data={data} setPageIndex={setPageIndex} setData={setData} />
        <Capture data={data} pageIndex={pageIndex} setData={setData} setPageIndex={setPageIndex} />
        <CaptureSelect
          data={data}
          setPageIndex={setPageIndex}
          setData={setData}
          pageIndex={pageIndex}
        />
        <BackSelect />
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

const PageContainer = styled.div<{ pageindex: number }>`
  width: 100%;
  display: flex;
  transition: 0.5s all;
  transform: translateX(calc(-100% * ${({ pageindex }) => pageindex}));
`;
