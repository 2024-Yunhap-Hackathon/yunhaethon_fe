import styled from "styled-components";

interface IProp {
  title: string;
  id: string;
  image: string;
  selected?: string;
  onClick: (id: string) => void;
}

export const Cut = ({ title, id, image, selected, onClick }: IProp) => {
  return (
    <Container onClick={() => onClick(id)} selected={selected === id}>
      <img src={image} />
      <CutText>{title}</CutText>
    </Container>
  );
};

const Container = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  transition: 0.3s all;
  transform: scale(${({ selected }) => (selected ? "0.9" : "1")});
`;

const CutText = styled.span`
  font-family: GSansLight;
  font-size: 24px;
`;
