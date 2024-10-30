import { theme } from "@/constants";
import styled from "styled-components";
import { IKioskScreenProp } from "..";
import { Icon } from "@iconify/react";
import { Modal } from "./Modal";
import { useState } from "react";

export const Payment = ({ data, setData, setPageIndex }: IKioskScreenProp) => {
  const [status, setStatus] = useState<string | undefined>(undefined);

  const handleClick = (value: number) => {
    if (setData && value > 0 && value < 11) {
      setData((prev) => ({ ...prev, printCount: value }));
    }
  };

  const handlePayClick = () => {
    setStatus("대기중");
    setTimeout(() => {
      setStatus("VAN사 접속중");
      setTimeout(() => {
        setStatus("승인중");
        setTimeout(() => {
          setStatus(undefined);
          setPageIndex((prev) => prev + 1);
        }, 500);
      }, 200);
    }, 1000);
  };

  return (
    <Container>
      {status && <Modal status={status} />}
      <InfoContainer>
        <InfoBarContainer>
          <InfoTitle>출력 횟수</InfoTitle>
          <PrintCountContainer>
            <PrintCount>{data?.printCount}</PrintCount>
            <PrintControllerContainer>
              <Icon
                icon="ep:arrow-up-bold"
                width={25}
                onClick={() => handleClick(data ? data.printCount + 1 : 1)}
              />
              <Icon
                icon="ep:arrow-up-bold"
                width={25}
                rotate={90}
                onClick={() => handleClick(data ? data.printCount - 1 : 1)}
              />
            </PrintControllerContainer>
          </PrintCountContainer>
        </InfoBarContainer>
        <InfoBarContainer>
          <InfoTitle>총 결제금액</InfoTitle>
          <InfoResult>{data && data?.printCount * 3000}\</InfoResult>
        </InfoBarContainer>
      </InfoContainer>
      <PayButton onClick={handlePayClick}>결제하기</PayButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`;

const InfoContainer = styled.div`
  width: 60%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  background: white;
  border-radius: 12px;
  padding: 50px;
  box-sizing: border-box;
`;

const InfoBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoTitle = styled.span`
  font-family: GSansMedium;
  font-size: 34px;
`;

const InfoResult = styled(InfoTitle)`
  font-family: GSansBold;
`;

const PayButton = styled.span`
  position: absolute;
  bottom: 100px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  color: white;
  font-family: GSansMedium;
  font-size: 30px;
  background: ${theme.blue[500]};
`;

const PrintCountContainer = styled.div`
  width: 60%;
  border: 1px solid ${theme.gray[800]};
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

const PrintCount = styled.span`
  font-family: GSansMedium;
  font-size: 30px;
`;

const PrintControllerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
