const interval = 10;
export const getRandomDegree = () => {
  const randomDegree = Math.floor(Math.random() * 90) - 45;
  const adjustedDegree = Math.floor(randomDegree / interval) * interval;
  return adjustedDegree;
};
