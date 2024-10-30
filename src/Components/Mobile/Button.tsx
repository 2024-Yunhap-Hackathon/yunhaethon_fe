import { theme } from "@/constants";
import styled from "styled-components";

interface IProp {
  type: "blue" | "gray";
  fontType: "small" | "medium" | "large";
  children: string;
  width: number;
  height: number;
}

export const Button = ({ type, fontType, children, width, height }: IProp) => {
  return (
    <Container type={type} width={width} height={height} fontType={fontType}>
      {children}
    </Container>
  );
};

const Container = styled.button<{
  type: "blue" | "gray";
  width: number;
  height: number;
  fontType: "small" | "medium" | "large";
}>`
  background: ${({ type }) => (type === "blue" ? theme.blue[500] : theme.gray[50])};
  color: ${({ type }) => (type === "blue" ? "white" : theme.gray[600])};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-size: ${({ fontType }) =>
    fontType === "large" ? "20px" : fontType === "medium" ? "16px" : "14px"};
`;
