import React from "react";
import Number from "components/Number";
import "./style.scss";

const GameFieldSmall = ({
  smallFieldArr,
  handleBtnPress,
  btnPressSmallArr
}) => {
  return (
    <div className="game-field">
      <h3 className="game-field__title">
        <b>Поле 2</b> отметьте 1 число
      </h3>
      <ul className="game-field-list">
        {smallFieldArr.map(item => {
          const flag = btnPressSmallArr.length
            ? btnPressSmallArr.some(elem => elem === item)
            : false;
          return (
            <Number
              id={item}
              key={item}
              type="fieldSmall"
              press={flag}
              handleBtnPress={handleBtnPress}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default GameFieldSmall;
