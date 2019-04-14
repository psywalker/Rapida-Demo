import React, { useState } from "react";
import "./style.scss";

const Number = ({ id }) => {
  const [btnPress, setBtnPress] = useState(false);
  const setItemPressToggle = () => setBtnPress(!btnPress);

  const classBtn = btnPress
    ? "game-field-list__btn game-field-list__btn_press"
    : "game-field-list__btn ";

  return (
    <div className="game-field-list__item">
      <button onClick={setItemPressToggle} type="button" className={classBtn}>
        {id}
      </button>
    </div>
  );
};

export default Number;
