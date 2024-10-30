import styled from "styled-components";
import KarinaImg from "@/assets/Karina.png";
import fourCutImg from "@/assets/4cutImg.png";
import HeartIcon from "@/assets/HeartIcon.tsx";
import { useState } from "react";
import Footer from "@/Components/mobile/footer";
import { useNavigate } from "react-router-dom";

const post = {
  id: 1,
  userName: "aespa_official",
  image: fourCutImg,
  date: "2024.07.26 99:99",
  title: "나 에스판데 우리 다같이 사진찍었다",
  likeCount: "523K",
};

export const Detail = () => {
  const navigate = useNavigate();
  const [isHeartClick, setIsHeartClick] = useState<{ [key: number]: boolean }>({});

  const toggleHeartClick = (id: number) => {
    setIsHeartClick((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container>
      <PostLayout>
        <PostHeader>
          <UserInfo>
            <UserImg src={KarinaImg} />
            <UserName>{post.userName}</UserName>
          </UserInfo>
        </PostHeader>
        <ImageLayout>
          <FourCutImg src={post.image} />
          <EditButton onClick={() => navigate("/mobile/replace")}>사진 재배치</EditButton>
        </ImageLayout>
        <PostFooter>
          <LikeInfos>
            <HeartLayout onClick={() => toggleHeartClick(post.id)}>
              <HeartIcon mode={isHeartClick[post.id]} />
            </HeartLayout>
            <LikeCount>{post.likeCount}</LikeCount>
          </LikeInfos>
          <PostDetails>
            <Title>{post.title}</Title>
            <Date>{post.date}</Date>
          </PostDetails>
        </PostFooter>
      </PostLayout>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 88px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostLayout = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 16px;
  border: 2px solid #eee;
  background: #fff;
`;
const PostHeader = styled.div`
  display: flex;
  padding: 10px 12px;
  justify-content: space-between;
  align-items: center;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const UserImg = styled.img``;
const UserName = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
`;
const ImageLayout = styled.div`
  width: 100%;
  position: relative;
`;

const FourCutImg = styled.img``;
const PostFooter = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
const LikeInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const HeartLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LikeCount = styled.p`
  color: #fe4b4b;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
`;
const PostDetails = styled.div`
  display: flex;
  padding: 2px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const Title = styled.p`
  color: #303030;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 400;
`;
const Date = styled.p`
  color: #8e8e8e;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`;

const EditButton = styled.button`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(18.899999618530273px);
  position: absolute;
  bottom: 15px;
  right: 10px;
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
