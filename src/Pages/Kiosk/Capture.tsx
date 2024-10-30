import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "@/constants";
import { usePageIndex, useShotData } from "@/hooks";

let timer: NodeJS.Timeout | undefined = undefined;
const CONSTRAINTS = { video: true };
const COUNT = 3;

export const Capture = () => {
  const { images, set, pushImage: push } = useShotData();
  const [count, setCount] = useState(COUNT);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { next, getNameByIndex, index } = usePageIndex();

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
    if (videoRef && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setLocalStream(stream);
    }
  };

  const pushImage = () => {
    timer = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          videoRef?.current?.pause();
          const canvas = document.createElement("canvas");
          const w = videoRef.current?.videoWidth as number;
          const h = videoRef.current?.videoHeight as number;
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          if (ctx && videoRef.current) {
            ctx.drawImage(videoRef.current, 0, 0, w, h);
            push(canvas);
          }
          setTimeout(() => {
            videoRef?.current?.play();
          }, 1000);

          return COUNT;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    if (getNameByIndex() === "촬영") {
      startVideo().then(pushImage);
    } else if (videoRef.current?.srcObject) {
      if (localStream && videoRef?.current) {
        setCount(COUNT);
        videoRef.current.pause();
        videoRef.current.srcObject = null;
        localStream.getTracks().forEach((i) => i.stop());
      }
    }
  }, [index]);

  useEffect(() => {
    if (images.length === 8 && getNameByIndex() === "촬영") {
      clearTimeout(timer);
      next();
    }
  }, [images]);

  return (
    <Container>
      <CameraContainer>
        <CaptureContainer>
          <CaptureTimer>{count}</CaptureTimer>
        </CaptureContainer>
        <Camera autoPlay ref={videoRef} />
      </CameraContainer>
      <CounterContainer>
        <CounterCurrent>{images.length}</CounterCurrent>
        <CounterBar />
        <CounterMax>8</CounterMax>
      </CounterContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Camera = styled.video`
  width: 1280px;
  height: 750px;
  background: black;
  border-radius: 12px;
  transform: scaleX(-1);
  object-fit: cover;
`;

const CameraContainer = styled.div`
  width: 1280px;
  height: 750px;
  position: relative;
`;

const CaptureContainer = styled.div`
  width: 90px;
  height: 90px;
  background: #000000aa;
  border-radius: 100px;
  display: flex;
  position: absolute;
  z-index: 20;
  right: 15px;
  top: 15px;
  align-items: center;
  justify-content: center;
`;

const CaptureTimer = styled.span`
  font-family: GSansBold;
  font-size: 30px;
  color: white;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
`;

const CounterLayout = styled.span`
  font-family; GSansLight;
  font-size: 50px;
`;

const CounterMax = styled(CounterLayout)`
  color: ${theme.gray[800]};
`;

const CounterCurrent = styled(CounterLayout)`
  color: ${theme.blue[500]};
`;

const CounterBar = styled.div`
  width: 2px;
  height: 20px;
  background: ${theme.gray[300]};
`;
