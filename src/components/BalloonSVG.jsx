import React, { forwardRef } from "react";
import BalloonHeart from "../../public/images/BalloonHeart";
import BalloonPink from "../../public/images/BalloonPink";
import BalloonLine from "../../public/images/BalloonLine";
import BalloonNoLine from "../../public/images/BalloonNoLine";
const BalloonSVG = forwardRef((props, ref) => {
  BalloonSVG.displayName = "BalloonSVG";

  const { shape, color } = props;
  switch (shape) {
    case "heart":
      return <BalloonHeart ref={ref} />;
    case "pink":
      return <BalloonPink color={color} ref={ref} />;
    case "line":
      return <BalloonLine color={color} ref={ref} />;
    case "noLine":
    default:
      return <BalloonNoLine color={color} ref={ref} />;
  }
});

export default BalloonSVG;
