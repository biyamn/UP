import React, { useState, useRef } from "react";
import Balloons from "./components/Balloons";
import houseImage from "../public/images/house.png";
import cloudImage from "../public/images/cloud.png";
import { getRandomDegree, getRandomColor, getRandomShape } from "./utils";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

function App() {
  const [balloons, setBalloons] = useState([]);
  const houseRef = useRef(null);
  const balloonsRef = useRef(null);

  const createBalloon = () => {
    setBalloons((prevBalloons) => [
      ...prevBalloons,
      {
        id: prevBalloons.length + 1,
        degree: getRandomDegree(),
        color: getRandomColor(),
        shape: getRandomShape(),
      },
    ]);
  };

  const handleHouseClick = () => {
    createBalloon();
  };

  const negativeMargin = 40;
  const defaultBalloonsTop = 200;
  const defaultBalloonsLeft = 200;
  const balloonsTop =
    -(balloonsRef.current?.offsetHeight || defaultBalloonsTop) + negativeMargin;
  const balloonsLeft =
    (houseRef.current?.offsetWidth || defaultBalloonsLeft) / 2;

  return (
    <Background>
      <Container>
        <Balloons
          balloons={balloons}
          setBalloons={setBalloons}
          top={balloonsTop}
          left={balloonsLeft}
          ref={balloonsRef}
        />
        <HouseImage
          src={houseImage}
          onClick={handleHouseClick}
          alt="하우스"
          width="200rem"
          ref={houseRef}
        />
      </Container>
      <CloudAnimated>
        <CloudImage src={cloudImage} alt="구름" width="300px" />
      </CloudAnimated>
    </Background>
  );
}

const Background = styled(motion.div)`
  padding-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("./public/images/sky.jpg");
  /* background-image: url("C:/Users/지선/Desktop/wiggle-wiggle/src/asset/sky.jpg"); */
  background-size: cover;
`;

const Container = styled.div`
  position: relative;
`;

const HouseImage = styled.img`
  user-select: none;
  position: relative;
  z-index: 10;
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

const CloudImage = styled.img`
  user-select: none;
`;

export default App;
