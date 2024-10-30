import { pageList, preventList, usePageIndex } from "@/hooks";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { theme } from "@/constants";

export const Header = () => {
  const { index, setIndex } = usePageIndex();

  const handleClick = (count: number) => {
    if (index > count && !preventList.includes(pageList[count])) setIndex(count);
  };

  return (
    <Wrapper>
      {pageList.map((item, count) => (
        <>
          <Title selected={pageList[index] === item} onClick={() => handleClick(count)}>
            {item}
          </Title>
          {count < pageList.length - 1 && (
            <Icon icon="ep:arrow-up-bold" rotate={45} color={theme.gray[200]} />
          )}
        </>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
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
