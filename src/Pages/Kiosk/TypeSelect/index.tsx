import { usePageIndex, useShotData } from "@/hooks";
import styled from "styled-components";
import * as i from "@/assets/";
import { Cut } from "./Cut";

export const TypeSelect = () => {
  const { set, type } = useShotData();
  const { next } = usePageIndex();

  const handleClick = (type: string) => {
    set({ type });
    setTimeout(next, 300);
  };

  return (
    <Container>
      <CutContainer>
        <Cut
          title="일반 세로 4컷"
          image={i.NormalFour}
          id="NRM_VER_4"
          selected={type}
          onClick={handleClick}
        />
        <Cut
          title="일반 세로 2컷"
          image={i.NormalTwo}
          selected={type}
          id="NRM_VER_2"
          onClick={handleClick}
        />
        <Cut
          title="더블 세로 4컷"
          image={i.DoubleFour}
          id="DBL_VER_4"
          selected={type}
          onClick={handleClick}
        />
      </CutContainer>
      <UsageContainer>
        <UsageText>
          사용하실 <UsageStrong>사진 형태</UsageStrong>를 선택해주세요!
        </UsageText>
      </UsageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`;

const CutContainer = styled.div`
  gap: 40px;
  align-items: flex-end;
  overflow: scroll;
  display: flex;
  padding: 0 300px;
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
