import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IKioskScreenProp } from ".";
import { theme } from "@/constants";

let timer: NodeJS.Timeout | undefined = undefined;
const CONSTRAINTS = { video: true };

export const Capture = ({ data, setData, pageIndex, setPageIndex }: IKioskScreenProp) => {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [count, setCount] = useState({
    start: 5,
    wait: 3,
  });

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
    if (videoRef && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setLocalStream(stream);
    }
  };

  const startCaptureWait = () => {
    timer = setInterval(() => {
      setCount((prev) => {
        if (prev.start >= 1) {
          return { ...prev, start: prev.start - 1 };
        } else {
          clearInterval(timer);
          startCapture();
          return { ...prev, start: prev.start };
        }
      });
    }, 1000);
  };

  const startCapture = () => {
    timer = setInterval(() => {
      setCount((prev) => {
        if (prev.wait >= 1) {
          return { ...prev, wait: prev.wait - 1 };
        } else {
          videoRef?.current?.pause();
          const canvas = document.createElement("canvas");
          const w = videoRef.current?.videoWidth as number;
          const h = videoRef.current?.videoHeight as number;
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          if (ctx && videoRef.current && setData) {
            ctx.drawImage(videoRef.current, 0, 0, w, h);

            setData((prev) => ({
              ...prev,
              images: [...prev.images, { selected: false, name: canvas.toDataURL("image/png") }],
            }));
          }
          setTimeout(() => {
            videoRef?.current?.play();
          }, 1000);

          return { ...prev, wait: 3 };
        }
      });
    }, 1000);
  };

  useEffect(() => {
    if (pageIndex === 3) {
      startVideo().then(() => startCaptureWait());
    } else if (videoRef.current?.srcObject) {
      if (localStream && videoRef?.current) {
        setCount((prev) => ({ ...prev, start: 5 }));
        videoRef.current.pause();
        videoRef.current.srcObject = null;
        localStream.getTracks().forEach((i) => i.stop());
      }
    }
  }, [pageIndex]);

  useEffect(() => {
    if (data?.images.length === 8 && pageIndex === 3) {
      clearTimeout(timer);
      setPageIndex((prev) => prev + 1);
    }
  }, [data]);
  return (
    <Container>
      <CameraContainer>
        {!!count.start && (
          <StartContainer>
            <StartTimer>
              <StartTimerStrong>{count.start}</StartTimerStrong>초 후 촬영이 시작됩니다!
            </StartTimer>
          </StartContainer>
        )}
        {!count.start && (
          <CaptureContainer>
            <CaptureTimer>{count.wait}</CaptureTimer>
          </CaptureContainer>
        )}
        <Camera autoPlay ref={videoRef} />
      </CameraContainer>
      <CounterContainer>
        <CounterCurrent>{data?.images.length}</CounterCurrent>
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

const StartContainer = styled.div`
  width: 1280px;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000aa;
  position: absolute;
  z-index: 20;
`;

const StartTimer = styled.span`
  font-family: GSansMedium;
  font-size: 50px;
  color: white;
`;

const StartTimerStrong = styled(StartTimer)`
  font-family: GSansBold;
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
