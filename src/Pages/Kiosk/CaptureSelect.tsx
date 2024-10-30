import styled from "styled-components";
import { IKioskScreenProp } from ".";
import { Icon } from "@iconify/react";
import { theme } from "@/constants";
import { useEffect } from "react";

export const CaptureSelect = ({ data, setData, pageIndex, setPageIndex }: IKioskScreenProp) => {
  const checkedLength = data?.images.filter((i) => i.selected).length;

  useEffect(() => {
    if (checkedLength == data?.type.split("_")[2] && pageIndex === 4) {
      setPageIndex((prev) => prev + 1);
    }
  }, [data]);

  return (
    <Container>
      <SelectionContainer>
        {data?.images.map((i) => (
          <SelectionItemContainer
            onClick={() =>
              setData &&
              setData((prev) => ({
                ...prev,
                images: prev.images.map((j) =>
                  j.name === i.name ? { selected: !j.selected, name: j.name } : j
                ),
              }))
            }
          >
            {i.selected && (
              <Checked>
                <Icon icon="mdi:check" color="white" width={40} />
              </Checked>
            )}
            <Selection src={i.name} />
          </SelectionItemContainer>
        ))}
      </SelectionContainer>
      <CounterContainer>
        <CounterCurrent>{checkedLength}</CounterCurrent>
        <CounterBar />
        <CounterMax>{data?.type.split("_")[2]}</CounterMax>
      </CounterContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`;

const SelectionItemContainer = styled.div`
  position: relative;
`;

const SelectionContainer = styled.div`
  width: 1300px;
  flex-wrap: wrap;
  gap: 20px;
  display: flex;
  flex-shrink: 0;
`;

const Selection = styled.img`
  width: 310px;
  height: 230px;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
`;

const CounterLayout = styled.span`
  font-family; GSansLight;
  font-size: 50px;
`;

const CounterMax = styled(CounterLayout)`
  color: ${theme.gray[800]};
`;

const CounterCurrent = styled(CounterLayout)`
  color: ${theme.blue[500]};
`;

const CounterBar = styled.div`
  width: 2px;
  height: 20px;
  background: ${theme.gray[300]};
`;

const Checked = styled.div`
  z-index: 20;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #000000dd;
  position: absolute;
`;
