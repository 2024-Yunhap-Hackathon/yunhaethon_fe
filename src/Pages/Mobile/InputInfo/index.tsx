import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export const InputInfo = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <ContentLayout>
        <TextLayout>
          <Comment>자, 마지막이에요</Comment>
          <Comment><Bold>닉네임</Bold>을 입력해주세요!</Comment>
        </TextLayout>
        <InputForm>
          <NicknameInput />
          <SubmitButton onClick={() => navigate("/mobile/main")}>완료하기</SubmitButton>
        </InputForm>
      </ContentLayout>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EBEDFA;
`
const ContentLayout = styled.div`
  padding: 0 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`
const TextLayout = styled.span`
  display: flex;
  flex-direction: column;
`
const Bold = styled.span`
  font-weight: 700;
`
const Comment = styled.p`
  text-align: center;
  margin: 0;
  font-family: Pretendard,serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const NicknameInput = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #CBCBCB;
  background: #FFF;
  display: flex;
  align-items: center;
  font-family: Pretendard,serif;
  padding: 0 16px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const InputForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const SubmitButton = styled.button`
  display: flex;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #394DD1;
  border: none;
  color: #FFF;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  
  &:active {
    background-color: #3446BE;
  }
`