import React from "react";
import { motion } from "framer-motion";
import BalloonIcon from "./components/BalloonIcon";
import houseIcon from "./assets/house_pixel.png";
import cloudIcon from "./assets/cloud_pixel.png";
import styled from "styled-components";

// 이곳에 모두 구현 후 분리 예정
function App() {
  return (
    <Container>
      <Balloons>
        <BalloonIcon />
        <BalloonIcon />
        <BalloonIcon />
      </Balloons>
      <img src={houseIcon} alt="하우스" />
      <img src={cloudIcon} alt="구름" style={{ width: "40%" }} />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Balloons = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;

export default App;
