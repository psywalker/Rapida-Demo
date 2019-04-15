import React from "react";
import "./style.scss";

const Number = ({ id, type, press, handleBtnPress }) => {
  const classBtn = press
    ? "game-field-list__btn game-field-list__btn_press"
    : "game-field-list__btn ";

  const handleBtn = () => {
    const action = {
      id,
      type,
      btnPress: !press
    };

    handleBtnPress(action);
  };

  return (
    <div className="game-field-list__item">
      <button onClick={handleBtn} type="button" className={classBtn}>
        {id}
      </button>
    </div>
  );
};

export default Number;
