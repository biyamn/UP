import React from "react";
import BalloonHeart from "../assets/BalloonHeart";
import BalloonPink from "../assets/BalloonPink";
import BalloonLine from "../assets/BalloonLine";
import BalloonNoLine from "../assets/BalloonNoLine";

const BalloonImage = ({ color, shape }) => {
  switch (shape) {
    case "heart":
      return <BalloonHeart />;
    case "pink":
      return <BalloonPink color={color} />;
    case "line":
      return <BalloonLine color={color} />;
    case "noLine":
    default:
      return <BalloonNoLine color={color} />;
  }
};

export default BalloonImage;
