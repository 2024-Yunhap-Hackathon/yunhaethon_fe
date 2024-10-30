import Footer from "@/Components/mobile/footer.tsx";
import styled from "styled-components";

export const Main = () => {
  return (
    <Layout>
      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F0F1FA;
`
