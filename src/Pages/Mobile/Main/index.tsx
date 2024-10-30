import Footer from "@/Components/mobile/footer.tsx";
import styled from "styled-components";
import KarinaImg from "@/assets/Karina.png"
import fourCutImg from "@/assets/4cutImg.png"
import HeartIcon from "@/assets/HeartIcon.tsx";

export const Main = () => {
  return (
    <Layout>
      <Contents>
        <PostLayout>
          <PostHeader>
            <UserInfo>
              <UserImg src={KarinaImg} />
              <UserName>aespa_official</UserName>
            </UserInfo>
          </PostHeader>
          <ImageLayout>
            <FourCutImg src={fourCutImg} />
          </ImageLayout>
          <PostFooter>
            <LikeLayout>
              <HeartIcon />
              <LikeCount>523K</LikeCount>
            </LikeLayout>
            <PostDetails>
              <Title>나 에스판데 우리 다같이 사진찍었다</Title>
              <Date>2024.07.26 99:99</Date>
            </PostDetails>
          </PostFooter>
        </PostLayout>

      </Contents>
      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F0F1FA;
`
const Contents = styled.div`
  width: 100%;
  padding: 60px 16px 20px 16px;
`
const PostLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 16px;
  border: 2px solid #EEE;
  background: #FFF;
`
const PostHeader = styled.div`
  display: flex;
  padding: 10px 12px;
  justify-content: space-between;
  align-items: center;
`
const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
const UserImg = styled.img`
  
`
const UserName = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
`
const ImageLayout = styled.div`
  width: 100%;
`
const FourCutImg = styled.img`
  
`
const PostFooter = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`
const LikeLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const LikeCount = styled.p`
  color: #FE4B4B;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
`
const PostDetails = styled.div`
  display: flex;
  padding: 2px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
const Title = styled.p`
  color: #303030;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 400;
`
const Date = styled.p`
  color: #8E8E8E;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`;