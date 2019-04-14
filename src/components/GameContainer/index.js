import React, { Component } from "react";
import GameItemField from "components/GameItems/GameItemField";
import GameItemText from "components/GameItems/GameItemText";
import { fieldSmallState, fieldBigState } from "initialStates/fieldsState";
import "./style.scss";

class GameContainer extends Component {
  state = { smallFieldCount: 0 };

  smallFieldArr = Array.from({ length: fieldSmallState.count }, (v, k) => ++k);

  bigFieldArr = Array.from({ length: fieldBigState.count }, (v, k) => ++k);

  render() {
    return (
      <div className="game">
        <div className="game__item">
          <GameItemField
            smallFieldArr={this.smallFieldArr}
            bigFieldArr={this.bigFieldArr}
          />
        </div>
        <div className="game__item">
          <GameItemText />
        </div>
      </div>
    )
  }
}

export default GameContainer;
