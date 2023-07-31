import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import BalloonImage from "./components/BalloonImage";
import houseImage from "./assets/house.png";
import cloudImage from "./assets/cloud.png";
import styled, { keyframes } from "styled-components";
import mojs from "@mojs/core";
import randomColor from "randomcolor";

// 이곳에 모두 구현 후 분리 예정
function App() {
  const [balloons, setBalloons] = useState([]);
  const houseRef = useRef(null);

  const getDegree = () => {
    const interval = 10;
    const randomDegree = Math.floor(Math.random() * 90) - 45;
    const adjustedDegree = Math.floor(randomDegree / interval) * interval;
    return adjustedDegree;
  };

  const getColor = () => randomColor();
  const shapeArray = ["ordinary", "square", "triangle"];
  const createBalloon = () => {
    setBalloons((prevBalloons) => [
      ...prevBalloons,
      {
        id: prevBalloons.length + 1,
        degree: getDegree(),
        color: getColor(),
        shape: "",
      },
    ]);
  };

  const burst = (e, id) => {
    const burst = new mojs.Burst({
      left: 0,
      top: 0,
      angle: 45,
      children: {
        shape: "line",
        radius: { 2: 5 },
        scale: 2,
        stroke: balloons.find((balloon) => balloon.id === id).color,
        strokeDasharray: "100%",
        strokeDashoffset: { "-100%": "100%" },
        duration: 700,
        easing: "quad.out",
        onComplete: () => {
          burst.el.remove();
        },
      },
    });

    setBalloons((prevBalloons) => prevBalloons.filter((b) => b.id !== id));

    burst.tune({ x: e.pageX, y: e.pageY }).setSpeed(3).replay();
  };

  const handleBalloonClick = (e, id) => {
    burst(e, id);
  };

  const handleHouseClick = () => {
    createBalloon();
  };

  return (
    <Container>
      <Balloons>
        {balloons.map((balloon) => (
          <SvgContainer
            onClick={(e) => handleBalloonClick(e, balloon.id)}
            rotate={balloon.degree}
            key={balloon.id}
          >
            <Animated>
              <BalloonImage rotate={balloon.rotate} color={balloon.color} />
            </Animated>
          </SvgContainer>
        ))}
      </Balloons>
      <img
        src={houseImage}
        onClick={handleHouseClick}
        alt="하우스"
        width="200rem"
        ref={houseRef}
      />
      <CloudAnimated>
        <img src={cloudImage} alt="구름" width="300rem" />
      </CloudAnimated>
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

const moveVertical = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }  
`;

const Animated = styled(motion.div)`
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
  animation: ${moveVertical} 2s 1s infinite;
`;

const moveHorizontal = keyframes`
  0% { transform: translate(0px,  0); }
  50%  { transform: translate(15px, 0); }
  100%   { transform: translate(-0px, 0); }  
`;

const CloudAnimated = styled(motion.div)`
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 5px;
  margin-top: 30px;
  animation: ${moveHorizontal} 2s 1s infinite;
`;

const SvgContainer = styled(motion.div)`
  position: absolute;
  top: 4rem;
  left: -2rem;
  transform-origin: bottom;
  transform: rotate(${({ rotate }) => rotate}deg);
`;

export default App;
