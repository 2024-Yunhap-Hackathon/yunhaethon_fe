import styled from "styled-components";

export const Download = () => {
  return (
    <Container>
      <Code>G1J8N</Code>
      <Input placeholder="아이디 입력" />
      <UsageContainer>
        <UsageText>
          화면에 뜨는 코드를 <UsageBold>네컷내컷 모바일</UsageBold>에서 사용해주세요!
        </UsageText>
        <UsageText>
          또는 아이디를 입력하여 <UsageBold>알림</UsageBold>으로 받으실 수 있습니다
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

const Code = styled.span`
  font-family: GSansBold;
  font-size: 48px;
`;

const Input = styled.input`
  font-family: GSansMedium;
  font-size: 30px;
  width: 70%;
  padding: 30px;
  background: white;
  border-radius: 20px;
  border: 0;
`;

const UsageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 15px;
  bottom: 170px;
`;

const UsageText = styled.span`
  font-family: GSansMedium;
  font-size: 36px;
`;

const UsageBold = styled(UsageText)`
  font-family: GSansBold;
`;
