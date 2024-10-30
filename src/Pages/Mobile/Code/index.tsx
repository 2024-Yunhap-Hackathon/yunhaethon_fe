import Footer from "@/Components/Mobile/footer";
import { theme } from "@/constants";
import { useState } from "react";
import styled from "styled-components";
// export * from "./Write";

const loading = false;

export const Code = () => {
  const [code, setCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 7) {
      setCode(e.target.value);
    }
    if (e.target.value.length === 6) {
      console.log("test");
    }
  };

  return (
    <Container>
      {loading && <LoadingMessage>사진과 요약을 불러오는 중입니다 ...</LoadingMessage>}
      <TextContainer>
        <TextItemContainer>{code[0] ? <Text>{code[0]}</Text> : <Empty />}</TextItemContainer>
        <TextItemContainer>{code[1] ? <Text>{code[1]}</Text> : <Empty />}</TextItemContainer>
        <TextItemContainer>{code[2] ? <Text>{code[2]}</Text> : <Empty />}</TextItemContainer>
        <TextItemContainer>{code[3] ? <Text>{code[3]}</Text> : <Empty />}</TextItemContainer>
        <TextItemContainer>{code[4] ? <Text>{code[4]}</Text> : <Empty />}</TextItemContainer>
        <TextItemContainer>{code[5] ? <Text>{code[5]}</Text> : <Empty />}</TextItemContainer>
        <input
          style={{
            display: "block",
            height: 0,
            width: 0,
            border: 0,
            padding: 0,
          }}
          value={code}
          onChange={handleChange}
        />
      </TextContainer>
      <UsageText>코드 입력 시 자동으로 사진이 다운로드 됩니다.</UsageText>
      <Footer />
    </Container>
  );
};

const UsageText = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 300;
  color: ${theme.gray[400]};
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

const LoadingMessage = styled.div`
  font-family: Pretendard;
  font-weight: 100;
  font-size: 32px;
`;

const TextContainer = styled.label`
  display: flex;
  gap: 2px;
`;

const TextItemContainer = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.blue[300]};
`;

const Empty = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background: ${theme.gray[300]};
`;

const Text = styled.div`
  font-family: Pretendard;
  font-weight: light;
  font-size: 32px;
`;
