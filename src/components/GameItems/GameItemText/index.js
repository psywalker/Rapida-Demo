import React from "react";
import "../style.scss";

const GameItemText = () => {
  return (
    <div className="game-field-container">
      <h2 className="game-field-container__title">Билет 1</h2>
      <p className="game-field-container__text">
        Ого, вы выиграли! Поздравляем!
      </p>
    </div>
  );
};

export default GameItemText;
