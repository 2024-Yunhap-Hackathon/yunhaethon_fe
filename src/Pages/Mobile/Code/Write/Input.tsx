import styled from "styled-components";

interface IProp {
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder: string;
}

export const Input = ({ label, value, onChange, required, placeholder }: IProp) => {
  return (
    <Container>
      <Label>
        {label}
        {required && <Require>*</Require>}
      </Label>
      <CustomInput value={value} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  flex-direction: column;
`;

const Label = styled.span`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
`;

const Require = styled.span`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  color: red;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 15px;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 1px solid black;
  outline: none;
  padding: 20px 10px;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 17px;
`;
