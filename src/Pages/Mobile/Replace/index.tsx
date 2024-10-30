import Footer from "@/Components/mobile/footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";
import fourCutImg from "@/assets/4cutImg.png";
import * as images from "@/assets/Changes";
import { useNavigate } from "react-router-dom";

export const Replace = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <PrevButtonContainer>
        <Icon icon="ic:baseline-arrow-back-ios" width={24} />
        <PrevButtonText>사진 재배치</PrevButtonText>
      </PrevButtonContainer>
      <ImageLayout>
        <FourCutImg src={fourCutImg} />
        <EditButton onClick={() => navigate("/mobile/detail")}>수정 완료</EditButton>
      </ImageLayout>
      <ChangeItemContainer>
        {Object.values(images).map((i) => (
          <img src={i} />
        ))}
      </ChangeItemContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px;
  padding-top: 50px;
`;

const PrevButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PrevButtonText = styled.span`
  font-weight: 600;
  font-size: 20px;
  font-family: Pretendard;
`;

const ImageLayout = styled.div`
  width: 100%;
  position: relative;
`;

const FourCutImg = styled.img`
  width: 100%;
`;

const EditButton = styled.button`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(18.899999618530273px);
  position: absolute;
  bottom: 15px;
  right: 10px;
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ChangeItemContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  gap: 20px;
  left: 0;
  overflow: scroll;
  bottom: 88px;
`;
