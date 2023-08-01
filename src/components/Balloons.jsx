import React, { forwardRef } from "react";
import BalloonImage from "./BalloonImage";
import mojs from "@mojs/core";
import { motion } from "framer-motion";
import { styled, keyframes } from "styled-components";

const Balloons = forwardRef((props, ref) => {
  Balloons.displayName = "Balloons";
  const burst = (e, id) => {
    const burst = new mojs.Burst({
      left: 0,
      top: 0,
      angle: 45,
      children: {
        shape: "line",
        radius: { 2: 5 },
        scale: 2,
        stroke: props.balloons.find((balloon) => balloon.id === id).color,
        strokeDasharray: "100%",
        strokeDashoffset: { "-100%": "100%" },
        duration: 700,
        easing: "quad.out",
        onComplete: () => {
          burst.el.remove();
        },
      },
    });

    props.setBalloons((prevBalloons) =>
      prevBalloons.filter((b) => b.id !== id)
    );

    burst.tune({ x: e.pageX, y: e.pageY }).setSpeed(2).replay();
  };

  const handleBalloonClick = (e, id) => {
    burst(e, id);
  };

  return (
    <Container $top={props.top} $left={props.left} ref={ref}>
      {props.balloons.map((balloon) => (
        <SvgContainer
          onClick={(e) => handleBalloonClick(e, balloon.id)}
          rotate={balloon.degree}
          key={balloon.id}
        >
          <motion.div
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <BalloonAnimated>
              <BalloonImage
                shape={balloon.shape}
                rotate={balloon.rotate}
                color={balloon.color}
              />
            </BalloonAnimated>
          </motion.div>
        </SvgContainer>
      ))}
    </Container>
  );
});

const Container = styled.div`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  display: flex;
  flex-direction: row;
  height: 15rem;
  z-index: 0;
`;

const SvgContainer = styled(motion.div)`
  position: absolute;
  // svgContainer width의 절반 정도
  left: -70px;
  transform: rotate(${({ rotate }) => rotate}deg);
  transform-origin: bottom;
`;

const moveVertical = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }  
`;

const BalloonAnimated = styled(motion.div)`
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
  animation: ${moveVertical} 2s 1s infinite;
`;

export default Balloons;
