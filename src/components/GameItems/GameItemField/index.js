import React from "react";
import GameFieldBig from "components/GameFields/GameFieldBig";
import GameFieldSmall from "components/GameFields/GameFieldSmall";
import "../style.scss";

const GameItemField = ({
  bigFieldArr,
  smallFieldArr,
  handleBtnPress,
  btnPressBigArr,
  btnPressSmallArr,
  handleResult,
  btnPressLengthFlag,
  handleGeneratedNumbers
}) => {
  return (
    <div className="game-field-container">
      <i
        onClick={handleGeneratedNumbers}
        onTouchStart={handleGeneratedNumbers}
        onTouchEnd={handleGeneratedNumbers}
        className="game-field-container__icon"
      />
      <h2 className="game-field-container__title">Билет 1</h2>
      <div className="game-field-container__fields">
        <GameFieldBig
          bigFieldArr={bigFieldArr}
          handleBtnPress={handleBtnPress}
          btnPressBigArr={btnPressBigArr}
        />
        <GameFieldSmall
          smallFieldArr={smallFieldArr}
          handleBtnPress={handleBtnPress}
          btnPressSmallArr={btnPressSmallArr}
        />
      </div>

      <button
        disabled={btnPressLengthFlag}
        onClick={handleResult}
        onTouchStart={handleResult}
        onTouchEnd={handleResult}
        className="game-field-container__result result-btn"
      >
        Показать результат
      </button>
    </div>
  );
};

export default GameItemField;
