import React, { useState } from "react";
import { motion } from "framer-motion";
import BalloonIcon from "./components/BalloonIcon";
import houseIcon from "./assets/house_pixel.png";
import cloudIcon from "./assets/cloud_pixel.png";
import styled from "styled-components";
import mojs from "@mojs/core";

// 이곳에 모두 구현 후 분리 예정
function App() {
  const [balloons, setBalloons] = useState([]);

  const getDegree = () => Math.floor(Math.random() * 90) - 45;

  const createBalloon = () => {
    setBalloons((prevBalloons) => [
      ...prevBalloons,
      {
        id: prevBalloons.length + 1,
        degree: getDegree(),
      },
    ]);
  };

  const burst = (e, id) => {
    const burst = new mojs.Burst({
      left: 0,
      top: 0,
      radius: { 4: 19 },
      angle: 45,
      children: {
        shape: "line",
        radius: 3,
        scale: 1,
        stroke: "#FD7932",
        strokeDasharray: "100%",
        strokeDashoffset: { "-100%": "100%" },
        duration: 700,
        easing: "quad.out",
      },
    });

    burst.tune({ x: e.pageX, y: e.pageY }).replay();

    setBalloons((prevBalloons) => prevBalloons.filter((b) => b.id !== id));
  };

  const handleBalloonClick = (e, id) => {
    burst(e, id);
  };

  const handleHouseClick = () => {
    console.log("click");
    createBalloon();
  };

  return (
    <Container>
      <Balloons>
        {balloons.map((balloon) => (
          <SvgContainer rotate={balloon.degree} key={balloon.id}>
            <BalloonIcon
              onClick={(e) => handleBalloonClick(e, balloon.id)}
              rotate={balloon.rotate}
            />
          </SvgContainer>
        ))}
      </Balloons>
      <img
        src={houseIcon}
        onClick={handleHouseClick}
        alt="하우스"
        width="200rem"
      />
      <img src={cloudIcon} alt="구름" width="400rem" />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
`;

const Balloons = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: 15rem;
  position: relative;
`;

const SvgContainer = styled(motion.div)`
  position: absolute;
  top: 4rem;
  left: -2rem;
  transform-origin: bottom;
  transform: rotate(${({ rotate }) => rotate}deg);
`;

export default App;
