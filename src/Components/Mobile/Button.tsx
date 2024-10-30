import { theme } from "@/constants";
import styled from "styled-components";

interface IProp {
  type: "blue" | "gray";
  fontType: "small" | "medium" | "large";
  children: string;
  width: string;
  height: string;
  onClick: () => void;
}

export const Button = ({ type, fontType, children, width, height, onClick }: IProp) => {
  return (
    <Container type={type} width={width} height={height} fontType={fontType} onClick={onClick}>
      {children}
    </Container>
  );
};

const Container = styled.button<{
  type: "blue" | "gray";
  width: string;
  height: string;
  fontType: "small" | "medium" | "large";
}>`
  border: 0;
  border-radius: 4px;
  background: ${({ type }) => (type === "blue" ? theme.blue[500] : theme.gray[50])};
  color: ${({ type }) => (type === "blue" ? "white" : theme.gray[600])};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontType }) =>
    fontType === "large" ? "20px" : fontType === "medium" ? "16px" : "14px"};
`;
