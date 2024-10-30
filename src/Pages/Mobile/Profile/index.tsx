import styled from "styled-components";
import Footer from "@/Components/Mobile/footer.tsx";
import Karina from "@/assets/Karina.png"
import {Button} from "@/Components/Mobile";
import {HomeIcon} from "@/assets/HomeIcon.tsx";
import {AlbumIcon} from "@/assets/AlbumIcon.tsx";
import {useState} from "react";
import {Storage} from "@/Pages/Mobile/Profile/Storage";
import {AlbumList} from "@/Pages/Mobile/Profile/AlbumList";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("storage");
  return (
    <>
      <Layout>
        <ContentLayout>
          <UserInfoLayout>
            <UserInfo>
            <TextInfo>
              <Name>최성훈</Name>
              <NickName>@seonghoon07</NickName>
            </TextInfo>
            <ProfileImg src={Karina} />
            </UserInfo>
            <Introduce>송하영 팬입니다</Introduce>
          </UserInfoLayout>
          <ProfileButtons>
            <Button type="blue" width="192px" height="44px" radius="8px" fontType="medium" onClick={() => {}}>정보 수정</Button>
            <Button type="gray" width="192px" height="44px" radius="8px" fontType="medium" onClick={() => {}}>정보 수정</Button>
          </ProfileButtons>
          <Tabs>
            <Tab
                isActive={activeTab === "storage"}
                onClick={() => setActiveTab("storage")}>
              <HomeIcon fill={activeTab === "storage" ? "#6171DA" : "#B2B2B2"} />
            </Tab>
            <Tab
              isActive={activeTab === "album"}
              onClick={() => setActiveTab("album")}
            >
              <AlbumIcon fill={activeTab === "album" ? "#6171DA" : "#B2B2B2"} />
            </Tab>
          </Tabs>
          {
            activeTab === "storage" ? <Storage /> : <AlbumList />
          }
        </ContentLayout>
      </Layout>
      <Footer />
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F0F1FA;
`
const ContentLayout = styled.div`
  width: 100%;
  height: calc(100vh - 92px);
  background-color: white;
  padding: 80px 16px 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const UserInfoLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4px;
`
const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const Name = styled.p`
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 600;
`
const NickName = styled.p`
  color: #575757;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 300;
`
const ProfileImg = styled.img`
  width: 84px;
  height: 84px;
`
const Introduce = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
`
const ProfileButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 199px;
  height: 47px;
  padding: 5px 78px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ isActive }) => (isActive ? "#6171DA" : "#CBCBCB")};
`