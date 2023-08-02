import React, { forwardRef, useEffect, useRef } from "react";
import BalloonSVG from "./BalloonSVG";
import mojs from "@mojs/core";
import { motion, AnimatePresence } from "framer-motion";
import { styled, keyframes } from "styled-components";

const Balloons = forwardRef((props, ref) => {
  Balloons.displayName = "Balloons";
  const { balloons, setBalloons, top, left, cursorStatus, setCursorStatus } =
    props;
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

    burst.tune({ x: e.pageX, y: e.pageY }).setSpeed(2).replay();
  };

  const cut = (id) => {
    setBalloons((prevBalloons) =>
      prevBalloons.map((balloon) =>
        balloon.id === id ? { ...balloon, isTied: false } : balloon
      )
    );
  };

  const handleBalloonClick = (e, id) => {
    burst(e, id);
  };

  return (
    <Container $top={top} $left={left} ref={ref}>
      <AnimatePresence>
        {balloons.map((balloon) => (
          <SvgContainerAnimated
            onClick={(e) => handleBalloonClick(e, balloon.id)}
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: cursorStatus === "cut" ? -500 : 0 }}
            key={balloon.id}
            drag
            whileDrag={{ scale: 0.7 }}
            dragSnapToOrigin
          >
            <SvgContainer rotate={balloon.degree}>
              <BalloonAnimated>
                <BalloonImage
                  shape={balloon.shape}
                  rotate={balloon.rotate}
                  color={balloon.color}
                />
              </BalloonAnimated>
            </SvgContainer>
          </SvgContainerAnimated>
        ))}
      </AnimatePresence>
    </Container>
  );
});

const SvgContainerAnimated = styled(motion.div)``;
const BalloonImage = styled(BalloonSVG)`
  user-select: none;
`;

const Container = styled.div`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  display: flex;
  flex-direction: row;
  height: 15rem;
  background-color: pink;
  z-index: 1;
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

const up = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, -15px); }
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
