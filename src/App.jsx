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
      <ButtonContainer>
        <Button onClick={handleButtonClick}>
          <span>터뜨리기</span>
        </Button>
        <Button onClick={handleBallonCut}>
          <span>날리기</span>
        </Button>
      </ButtonContainer>
      <CloudAnimated>
        <CloudImage src={cloudImage} alt="구름" width="300px" />
      </CloudAnimated>
    </Background>
  );
}
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  margin: 20px;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  padding: 10px 25px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  background: rgb(247, 150, 192);
  background: radial-gradient(
    circle,
    rgba(247, 150, 192, 1) 0%,
    rgba(118, 174, 241, 1) 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;
  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 0.9rem;
    font-weight: 400;
  }

  &:before {
    right: 0;
    top: 0;
    transition: all 500ms ease;
  }
  &:after {
    left: 0;
    bottom: 0;
    transition: all 500ms ease;
  }
  &:hover {
    background: transparent;
    color: #76aef1;
    box-shadow: none;
    :before {
      transition: all 500ms ease;
      height: 100%;
    }
    :after {
      transition: all 500ms ease;
      height: 100%;
    }
  }
  span:before {
    left: 0;
    top: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  span:after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  span:hover:before {
    width: 100%;
  }
  span:hover:after {
    width: 100%;
  }
`;

const Background = styled(motion.div)`
  padding-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
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
