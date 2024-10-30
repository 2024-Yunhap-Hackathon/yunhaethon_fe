import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeIcon } from "@/assets/HomeIcon.tsx";
import { CodeIcon } from "@/assets/CodeIcon.tsx";
import { StoreIcon } from "@/assets/StoreIcon.tsx";
import { AlarmIcon } from "@/assets/AlarmIcon.tsx";
import { ProfileIcon } from "@/assets/ProfileIcon.tsx";
import { theme } from "@/constants";

interface NavItem {
  icon: React.FC<{ fill?: string }>;
  label: string;
  path: string;
}

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getColor = (path: string) => {
    return location.pathname === path ? "#394DD1" : "#B2B2B2";
  };

  const navItems: NavItem[] = [
    { icon: HomeIcon, label: "홈", path: "/mobile/home" },
    { icon: CodeIcon, label: "코드 입력", path: "/mobile/code" },
    { icon: StoreIcon, label: "스토어", path: "/mobile/store" },
    { icon: AlarmIcon, label: "알림", path: "/mobile/notifications" },
    { icon: ProfileIcon, label: "프로필", path: "/mobile/profile" },
  ];

  return (
    <Layout>
      <ContentsLayout>
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavItemLayout key={path} onClick={() => navigate(path)}>
            <Icon fill={getColor(path)} />
            <ItemName style={{ color: getColor(path) }}>{label}</ItemName>
          </NavItemLayout>
        ))}
      </ContentsLayout>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 88px;
  padding-bottom: 24px;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-top: 4px solid ${theme.blue[400]};
`;
const ContentsLayout = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
`;
const NavItemLayout = styled.button`
  height: 100%;
  background-color: white;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
`;
const ItemName = styled.p`
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 400;
`;

export default Footer;
