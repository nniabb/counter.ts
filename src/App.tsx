import React, { useRef, useState } from "react";
import "./App.css";
import Game from "./Game";
import { RestartRef } from "./Game";
import Button from "./Resbutton";

function App() {
  const restartRef = useRef<RestartRef>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  return (
    <div className="App">
      <Game ref={restartRef} onGameOver={handleGameOver} />
      {isGameOver && (
        <Button
          restartGame={() => {
            setIsGameOver(false);
            restartRef.current?.restart();
          }}
        />
      )}
    </div>
  );
}


export default App;











// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Button from './Resbutton';

// function App() {
//   const [count, setCount] = useState(0);
//   const [time, setTime] = useState(10);

//   useEffect(() => {
//     if (time > 0) {
//       const timerId = setTimeout(() => {
//         setTime(time - 1);
//       }, 1000);

//       return () => clearTimeout(timerId);
//     } else {
//       setTime(0);
//     }
//   }, [time]);

//   const restartGame = () => {
//     setCount(0);
//     setTime(10);
//   };

//   return (
//     <div className="App">
//       <h1>Click Counter Game</h1>
//       <h3>Click the button as many times as you can within 10 seconds!</h3>
//       <button className='btn' onClick={() => setCount(count + 1)} disabled={time === 0}>Click Me</button>
//       <h3>Time Left: {time}</h3>
//       <h3>Click count: {count}</h3>
//       {time === 0 && (
//       <>
//       <h2>Game Over!</h2>
//       <h3> Your Final Score: {count}</h3>
//       <Button restartGame={restartGame} />
//       </> )}
//     </div>
//   );
// }

// export default App;       