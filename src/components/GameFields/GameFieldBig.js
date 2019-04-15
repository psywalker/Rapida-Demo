import React from "react";
import Number from "components/Number";
import "./style.scss";

const GameFieldBig = ({ bigFieldArr, handleBtnPress, btnPressBigArr }) => {
  return (
    <div className="game-field">
      <h3 className="game-field__title">
        <b>Поле 1</b> отметьте 8 чисел
      </h3>

      <ul className="game-field-list">
        {bigFieldArr.map(item => {
          const flag = btnPressBigArr.length
            ? btnPressBigArr.some(elem => elem === item)
            : false;
          return (
            <Number
              id={item}
              key={item}
              type="fieldBig"
              press={flag}
              handleBtnPress={handleBtnPress}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default GameFieldBig;
