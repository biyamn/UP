const shapeArray = ["noLine", "line", "pink", "heart"];
export const getRandomShape = () => {
  const randomIndex = Math.floor(Math.random() * shapeArray.length);
  return shapeArray[randomIndex];
};
