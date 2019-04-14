import React from "react";
import Number from "components/Number";
import "./style.scss";

const GameFieldSmall = ({ smallFieldArr }) => {
  return (
    <div className="game-field">
      <h3 className="game-field__title">
        <b>Поле 2</b> отметьте 2 числа
      </h3>
      <ul className="game-field-list">
        {smallFieldArr.map(item => (
          <Number id={item} key={item} />
        ))}
      </ul>
    </div>
  );
};

export default GameFieldSmall;
