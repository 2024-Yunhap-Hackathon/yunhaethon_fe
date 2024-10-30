import { Icon } from "@iconify/react";
import styled from "styled-components";
import { Item } from "./Item";
import Footer from "@/Components/mobile/footer";

export const Album = () => {
  return (
    <Container>
      <PrevButtonContainer>
        <Icon icon="ic:baseline-arrow-back-ios" width={24} />
        <PrevButtonText>카리나</PrevButtonText>
      </PrevButtonContainer>
      <AlbumContainer>
        <Item image="/Image.png" date="2024.07.26 99:99" />
        <Item image="/Image.png" date="2024.07.26 99:99" />
        <Item image="/Image.png" date="2024.07.26 99:99" />
        <Item image="/Image.png" date="2024.07.26 99:99" />
        <Item image="/Image.png" date="2024.07.26 99:99" />
        <Item image="/Image.png" date="2024.07.26 99:99" />
        <Item image="/Image.png" date="2024.07.26 99:99" />
        <Item image="/Image.png" date="2024.07.26 99:99" />
        <Item image="/Image.png" date="2024.07.26 99:99" />
      </AlbumContainer>
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

const AlbumContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 120px;
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
