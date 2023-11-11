import React from "react";
import "./App.css";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { restartGame } from "./helper";

export type RestartRef = {
  restart: () => void;
};

const Game = forwardRef<RestartRef, {}>((props, ref) => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  const restart = () => restartGame(setCount, setTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      setTime(0);
    }
  }, [time]);

  useImperativeHandle(ref, () => ({ restart }));

  return (
    <div className="App">
      <h1>Click Counter Game</h1>
      <h3>Click the button as many times as you can within 10 seconds!</h3>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        disabled={time === 0}>Click Me</button>
      <h3>Time Left: {time}</h3>
      <h3>Click count: {count}</h3>
      {time === 0 && (
        <>
          <h2>Game Over!</h2>
          <h3>Your Final Score: {count}</h3>
        </>
      )}
    </div>
  );
});

export default Game;