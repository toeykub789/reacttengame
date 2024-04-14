import React from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const goto = useNavigate();
  return (
    <div className="container">
      <div className="text">
        <div className="text-game">GAME</div>
        <div className="text-name">Ten Answers</div>
      </div>
      <div>
        <button className="btn-Easy" onClick={() => goto("/Easy")}>
          Easy
        </button>
        <button className="btn-Normal" onClick={() => goto("/Normal")}>
          Normal
        </button>
      </div>
    </div>
  );
};
