import styled from "styled-components";
import GoogleLogo from "@/assets/GoogleLogo.svg"
import {customAxios} from "@/utils/customAxios.ts";

export const Login = () => {
  const handleLoginClick = async () => {
    try {
      const { data } = await customAxios.get("/auth/google")
      window.location.href = data.url
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <Layout>
      <ContentLayout>
      <TextLayout>
        <Comment>네컷내컷 서비스를 사용하기 위해</Comment>
        <Comment><Bold>로그인</Bold>을 해주세요!</Comment>
      </TextLayout>
      <GoogleLayout onClick={handleLoginClick}>
        <GoogleImg src={GoogleLogo} />
        <LoginText>구글 로그인</LoginText>
      </GoogleLayout>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 20px;
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
const GoogleLayout = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  border: 1px solid #CBCBCB;
  background: #FFF;
  display: flex;
  align-items: center;
  position: relative;
  
  &:active {
    background-color: #EEEEEE;
  }
`
const GoogleImg = styled.img`
  margin-left: 12px;
`
const LoginText = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
