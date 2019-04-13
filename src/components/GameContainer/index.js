import React, { Component } from "react";
import GameItem from "components/GameItem";
import "./style.scss";

class GameContainer extends Component {
  state = { value: 0 };

  render() {
    return (
      <div className="game">
        <GameItem />
        <GameItem />
      </div>
    )
  }
}

export default GameContainer;
