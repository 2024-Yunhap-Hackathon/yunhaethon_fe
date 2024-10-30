import { theme } from "@/constants";
import styled from "styled-components";
import { Item } from "./Item";
import Footer from "@/Components/mobile/footer";
import { useState } from "react";
import { Button } from "@/Components/Mobile";

interface IModal {
  name: string;
}

export const Buy = () => {
  const [modal, setModal] = useState<IModal | null>(null);

  const handleModalClose = () => {
    setModal(null);
  };

  return (
    <>
      {modal && (
        <ModalContainer>
          <ModalItemContainer>
            <ModalTitle>
              정말<ModalTitleStrong>{modal.name}</ModalTitleStrong>을(를) 결제하시겠어요?
            </ModalTitle>
            <ModalButtonContainer>
              <Button
                type="blue"
                fontType="medium"
                width="100%"
                height="32px"
                onClick={handleModalClose}
              >
                예
              </Button>
              <Button
                type="gray"
                fontType="medium"
                width="100%"
                height="32px"
                onClick={handleModalClose}
              >
                아니요
              </Button>
            </ModalButtonContainer>
          </ModalItemContainer>
        </ModalContainer>
      )}
      <Container>
        <TitleContainer>
          <Title>
            내 필름 <TitleStrong>0</TitleStrong>
          </Title>
          <Charge>충전하기</Charge>
        </TitleContainer>
        <Item
          title="잔망루피네컷"
          image="/L.png"
          price={2}
          onClick={() => setModal({ name: "잔망루피네컷" })}
        />
        <Item
          title="잔망루피네컷"
          image="/L.png"
          price={2}
          onClick={() => setModal({ name: "잔망루피네컷" })}
        />
        <Item
          title="잔망루피네컷"
          image="/L.png"
          price={2}
          onClick={() => setModal({ name: "잔망루피네컷" })}
        />
        <Item
          title="잔망루피네컷"
          image="/L.png"
          price={2}
          onClick={() => setModal({ name: "잔망루피네컷" })}
        />
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 80px 20px 100px 20px;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  font-family: Pretendard;
`;

const TitleStrong = styled(Title)`
  color: ${theme.blue[500]};
  padding: 0;
`;

const Charge = styled.span`
  color: ${theme.gray[400]};
  font-weight: regular;
  font-family: Pretendard;
  font-size: 18px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #00000055;
  z-index: 40;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalItemContainer = styled.div`
  width: 350px;
  background: white;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  border-bottom: 3px solid ${theme.blue[500]};
`;

const ModalTitle = styled.div`
  font-family: Pretendard;
  font-weight: regular;
  display: flex;
  gap: 4px;
  font-size: 16=2px;
`;

const ModalTitleStrong = styled(ModalTitle)`
  font-weight: bold;
`;

const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
