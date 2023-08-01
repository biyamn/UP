import React from "react";
import BalloonHeart from "../../public/images/BalloonHeart";
import BalloonPink from "../../public/images/BalloonPink";
import BalloonLine from "../../public/images/BalloonLine";
import BalloonNoLine from "../../public/images/BalloonNoLine";

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
