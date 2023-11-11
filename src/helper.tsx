export const restartGame = (
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setTime: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setCount(0);
    setTime(10);
  };