import Footer from "@/Components/mobile/footer";
import styled from "styled-components";
import { Input } from "./Input";
import { useState } from "react";
import { Button } from "@/Components/Mobile";

export const Write = () => {
  const [data, setData] = useState({
    title: "",
    shorten: "",
  });

  return (
    <Container>
      <Title>게시물 내용을 작성해주세요</Title>
      <Input
        label="제목"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
        required
        placeholder="제목을 입력하세요"
      />
      <Photo src="" />
      <Input
        label="요약글"
        value={data.shorten}
        onChange={(e) => setData({ ...data, shorten: e.target.value })}
        placeholder="요약글이 입력됩니다"
      />
      <div style={{ padding: "0 20px", width: "100%" }}>
        <Button type="blue" fontType="large" width="100%" height="50px" onClick={() => {}}>
          등록하기
        </Button>
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 0 0 0;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 24px;
  font-family: Pretendard;
`;

const Photo = styled.img`
  width: 100%;
`;
