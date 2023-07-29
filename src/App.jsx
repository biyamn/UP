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

  const createBalloon = (x, y) => {
    setBalloons((prevBalloons) => [
      ...prevBalloons,
      { x, y, id: prevBalloons.length + 1 },
    ]);
  };

  const burst = (e, id) => {
    console.log("burst!1");
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
    console.log("e: ", e);
    burst.tune({ x: e.pageX, y: e.pageY }).replay();

    setBalloons((prevBalloons) => prevBalloons.filter((b) => b.id !== id));
    console.log("burst!2");
  };

  const handleBalloonClick = (e, id) => {
    burst(e, id);
  };

  const handleHouseClick = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    createBalloon(x, y);
  };

  return (
    <Container>
      <Balloons>
        {balloons.map((balloon) => (
          <BalloonIcon
            key={balloon.id}
            style={{ position: "absolute", left: balloon.x, top: balloon.y }}
            onClick={(e) => handleBalloonClick(e, balloon.id)}
          />
        ))}
      </Balloons>
      <House src={houseIcon} onClick={handleHouseClick} alt="하우스" />
      <Cloud src={cloudIcon} alt="구름" style={{ width: "40%" }} />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50rem;
`;

const Balloons = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: 60%;
`;

const House = styled(motion.img)``;

const Cloud = styled(motion.img)``;

export default App;
