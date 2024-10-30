import styled from "styled-components";
import {Button} from "@/Components/Mobile";
import Friend from "@/assets/Friend.jpeg"
import Lover from "@/assets/lover.jpeg"
import Travel from "@/assets/TravelImg.jpeg"

export const AlbumList = () => {
  return (
    <Layout>
      <Button type="blue" fontType="medium" width="100%" height="40px" radius="8px" onClick={() => {}}>앨범 추가</Button>
      <AlbumLayout>
        <AlbumInfo>
          <AlbumImgLayout>
            <AlbumImg src={Travel} />
          </AlbumImgLayout>
          <AlbumName>여행 ✈️</AlbumName>
        </AlbumInfo>
      </AlbumLayout>
      <AlbumLayout>
        <AlbumInfo>
          <AlbumImgLayout>
            <AlbumImg src={Friend} />
          </AlbumImgLayout>
          <AlbumName>친구들 👯‍♀️</AlbumName>
        </AlbumInfo>
      </AlbumLayout>
      <AlbumLayout>
        <AlbumInfo>
          <AlbumImgLayout>
            <AlbumImg src={Lover} />
          </AlbumImgLayout>
          <AlbumName>연인 🥰</AlbumName>
        </AlbumInfo>
      </AlbumLayout>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const AlbumLayout = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  background: #F7F7F7;
  border-radius: 8px;
`
const AlbumInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const AlbumImgLayout = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 100%;
`
const AlbumImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const AlbumName = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
`