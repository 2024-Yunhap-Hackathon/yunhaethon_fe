import styled from "styled-components";
import fourCut from "@/assets/4cutImg.png"
import iu from "@/assets/iu.png"

export const Storage = () => {
  return (
    <Layout>
      <PostLayout>
        <PhotoLayout>
          <Photo src={iu} />
        </PhotoLayout>
        <Date>2024.07.26 99:99</Date>
      </PostLayout>
      <PostLayout>
        <PhotoLayout>
          <Photo src={fourCut} />
        </PhotoLayout>
        <Date>2024.07.26 99:99</Date>
      </PostLayout>
      <PostLayout>
        <PhotoLayout>
          <Photo src={fourCut} />
        </PhotoLayout>
        <Date>2024.07.26 99:99</Date>
      </PostLayout>
      <PostLayout>
        <PhotoLayout>
          <Photo src={iu} />
        </PhotoLayout>
        <Date>2024.07.26 99:99</Date>
      </PostLayout>
      <PostLayout>
        <PhotoLayout>
          <Photo src={iu} />
        </PhotoLayout>
        <Date>2024.07.26 99:99</Date>
      </PostLayout>
      <PostLayout>
        <PhotoLayout>
          <Photo src={fourCut} />
        </PhotoLayout>
        <Date>2024.07.26 99:99</Date>
      </PostLayout>
    </Layout>
  );
};

const Layout = styled.div`
  max-width: 376px;
  display: flex;
  gap: 12px 22px;
  padding-bottom: 120px;
  flex-wrap: wrap;
`
const PostLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const PhotoLayout = styled.div`
  width: 177px;
  height: auto;
`
const Photo = styled.img`
  width: 100%;
  height: auto;
`
const Date = styled.p`
  color: #8E8E8E;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`