import React, { useState, useRef } from "react";
import Balloons from "./components/Balloons";
import houseImage from "../public/images/house.png";
import cloudImage from "../public/images/cloud.png";
import skyImage from "../public/images/sky.jpg";
import { getRandomDegree, getRandomColor, getRandomShape } from "./utils";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

function App() {
  const [cursorStatus, setCursorStatus] = useState("default"); // ["default", "cut"]
  const [balloons, setBalloons] = useState([]);
  const houseRef = useRef(null);
  const balloonsRef = useRef(null);

  const createBalloon = () => {
    if (balloons.length > 20) return;
    setBalloons((prevBalloons) => [
      ...prevBalloons,
      {
        id: prevBalloons.length + 1,
        degree: getRandomDegree(),
        color: getRandomColor(),
        shape: getRandomShape(),
        isTied: true,
      },
    ]);
  };

  const handleHouseClick = () => {
    createBalloon();
  };

  const handleButtonClick = () => {
    setCursorStatus("default");
  };

  const handleBallonCut = () => {
    setCursorStatus("cut");
  };

  const negativeMargin = 40;
  const defaultBalloonsTop = 200;
  const defaultBalloonsLeft = 200;
  const balloonsTop =
    -(balloonsRef.current?.offsetHeight || defaultBalloonsTop) + negativeMargin;
  const balloonsLeft =
    (houseRef.current?.offsetWidth || defaultBalloonsLeft) / 2;

  const ballonWeight = balloons.length;
  const houseFlyHeight = ballonWeight;

  return (
    <Background>
      <Container>
        <Balloons
          cursorStatus={cursorStatus}
          setCursorStatus={setCursorStatus}
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
          $houseFlyHeight={houseFlyHeight}
        />
      </Container>
      <Button onClick={handleButtonClick}>일반</Button>
      <Button onClick={handleBallonCut}>컷</Button>
      <CloudAnimated>
        <CloudImage src={cloudImage} alt="구름" width="300px" />
      </CloudAnimated>
    </Background>
  );
}

const Button = styled.button`
  background-color: red;
`;
const Background = styled(motion.div)`
  padding-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${skyImage});
  background-size: cover;
  padding-bottom: 5rem;
`;

const Container = styled.div`
  position: relative;
`;

const HouseImage = styled.img`
  padding-bottom: ${({ $houseFlyHeight }) => $houseFlyHeight * 0.8}rem;
  user-select: none;
  position: relative;
  z-index: 10;
  transition: all 0.5s ease-in-out;
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
