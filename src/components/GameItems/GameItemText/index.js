import React from "react";
import Number from "components/Number";
import "../style.scss";

const GameItemText = ({
  randomBigArr,
  randomSmallArr,
  win,
  btnPressBigArr,
  btnPressSmallArr,
  bigResultCount,
  smallResultCount,
  resultFlag
}) => {
  const textResult = win ? "Вы победели!" : "Вы проиграли!";
  return (
    <div className="game-field-container">
      {!resultFlag && (
        <h2 className="game-field-container__title">Результат...</h2>
      )}
      {resultFlag && (
        <h2 className="game-field-container__title">{textResult}</h2>
      )}
      {win && resultFlag && (
        <div className="game-field-win">
          <p className="game-field-container__text">
            В <b>поле 1</b> совпало {bigResultCount} числа:
          </p>

          <ul className="game-field-list">
            {randomBigArr.map(item => (
              <Number
                id={item}
                key={item}
                type="fieldBig"
                press={true}
                handleBtnPress={null}
              />
            ))}
          </ul>

          <p className="game-field-container__text">
            В <b>поле 2</b> совпало {smallResultCount} числа:
          </p>
          <ul className="game-field-list">
            {randomSmallArr.map(item => (
              <Number
                id={item}
                key={item}
                type="fieldBig"
                press={true}
                handleBtnPress={null}
              />
            ))}
          </ul>
        </div>
      )}

      {!win && resultFlag && (
        <div className="game-field-fail">
          <p className="game-field-container__text">
            В <b>поле 1</b> совпало {bigResultCount} числа:
          </p>
          <ul className="game-field-list">
            {randomBigArr.map(item => {
              const flag = btnPressBigArr.length
                ? btnPressBigArr.some(elem => elem === item)
                : false;
              return (
                <Number
                  id={item}
                  key={item}
                  type="fieldBig"
                  press={flag}
                  handleBtnPress={null}
                />
              );
            })}
          </ul>
          <br />
          <br />
          <p className="game-field-container__text">
            В <b>поле 2</b> совпало {smallResultCount} числа:
          </p>
          <ul className="game-field-list">
            {randomSmallArr.map(item => {
              const flag = btnPressSmallArr.length
                ? btnPressSmallArr.some(elem => elem === item)
                : false;
              return (
                <Number
                  id={item}
                  key={item}
                  type="fieldSmall"
                  press={flag}
                  handleBtnPress={null}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameItemText;
