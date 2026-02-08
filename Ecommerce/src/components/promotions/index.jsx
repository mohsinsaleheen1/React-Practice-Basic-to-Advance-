import { Box, Slide } from "@mui/material";
import { MessageText, PromonotionsContainer } from "../../styles/Promotions";
import { useEffect, useRef, useState } from "react";

const messages = [
  "20% off on your first order!",
  "Summer sale start now, visit any store",
  "Please Like and Subscribe:)",
];
export default function Promotions() {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <PromonotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromonotionsContainer>
  );
}
