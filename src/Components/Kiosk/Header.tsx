import { theme } from "@/constants";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const pages = [
  "사진 형태 선택",
  "결제 방식 선택",
  "결제",
  "촬영",
  "사진 선택",
  "배경 선택",
  "다운로드",
];

interface IProp {
  pageIndex: number;
  setPageIndex: (index: number) => void;
}

export const Header = ({ pageIndex, setPageIndex }: IProp) => {
  return (
    <Container>
      {pages.map((item, index) => (
        <>
          <Title
            selected={pages[pageIndex] === item}
            onClick={() => pageIndex > index && pageIndex !== 3 && setPageIndex(index)}
          >
            {item}
          </Title>
          {index < pages.length - 1 && (
            <Icon icon="ep:arrow-up-bold" rotate={45} color={theme.gray[200]} />
          )}
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  width: 100vw;
  z-index: 20;
  position: absolute;
  padding: 20px 100px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Title = styled.div<{ selected: boolean }>`
  font-size: 20px;
  font-family: ${({ selected }) => (selected ? "GSansBold" : "GSansLight")};
`;
