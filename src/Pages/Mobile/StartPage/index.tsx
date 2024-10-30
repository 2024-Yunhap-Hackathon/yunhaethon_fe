import styled from "styled-components";
import BlueLogo from "@/assets/BlueLogo.svg"
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const StartPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/mobile/login")
    }, 1200)
  })
  return (
    <Layout>
      <Logo src={BlueLogo} />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background: #3446BE;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  
`
