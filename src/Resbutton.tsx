import React from "react";
import './App.css';

interface ButtonProps {
  restartGame: () => void;
}

const Button: React.FC<ButtonProps> = ({ restartGame }) => {
  return <button className='btn2' onClick={restartGame}>Restart</button>
}

export default Button;