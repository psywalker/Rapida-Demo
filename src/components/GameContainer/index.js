import React, { Component } from "react";
import GameItemField from "components/GameItems/GameItemField";
import GameItemText from "components/GameItems/GameItemText";
import { fieldSmallState, fieldBigState } from "initialStates/fieldsState";
import {
  getInitionalBtnArr,
  getNewStateArr,
  getActionPressNum,
  getRandomInt
} from "selectors/selectors";
import "./style.scss";

class GameContainer extends Component {
  state = {
    btnPressSmallArr: [],
    latestNumberSmall: null,
    btnPressBigArr: [],
    latestNumberBig: null
  };

  smallFieldArr = getInitionalBtnArr(fieldSmallState.count);
  bigFieldArr = getInitionalBtnArr(fieldBigState.count);
  
  handleBtnPress = action => {
    switch (action.type) {
      case "fieldBig":
        let newArrBig = getActionPressNum(
          action.btnPress,
          this.state.btnPressBigArr,
          fieldBigState.max,
          this.state.latestNumberBig
        );

        this.setState({
          btnPressBigArr: getNewStateArr(newArrBig, action),
          latestNumberBig: action.id
        });
        break;
      case "fieldSmall":
        let newArrSmall = getActionPressNum(
          action.btnPress,
          this.state.btnPressSmallArr,
          fieldSmallState.max,
          this.state.latestNumberSmall
        );
        this.setState({
          btnPressSmallArr: getNewStateArr(newArrSmall, action),
          latestNumberSmall: action.id
        });
        break;
      default:
        return false;
    }
  };

  handleResult = () => {
    const { btnPressBigArr, btnPressSmallArr } = this.state;

    const randomBigArr = getRandomInt(19, 1, fieldBigState.max);
    const randomSmallArr = getRandomInt(2, 1, fieldSmallState.max);

    //let arr1 = [1, 2, 3, 5, 6, 7, 8, 9];
    //let arr2 = [3, 2, 4, 5, 6, 7, 8, 1];

    let bigResultCount = 0;
    let smallResultCount = 0;

    const resultBigArr = randomBigArr.every(el => {
      if (btnPressBigArr.includes(el)) {
        bigResultCount++;
      }
      return btnPressBigArr.includes(el);
    });

    const resultSmallArr = randomSmallArr.every(el => {
      if (btnPressSmallArr.includes(el)) {
        smallResultCount++;
      }
      return btnPressSmallArr.includes(el);
    });
    
    //console.log("1: ", bigResultCount);
    //console.log("2: ", btnPressBigArr);
    //console.log("3: ", resultBigArr);
  };

  render() {
    const { btnPressBigArr, btnPressSmallArr } = this.state;
    return (
      <div className="game">
        <div className="game__item">
          <GameItemField
            smallFieldArr={this.smallFieldArr}
            bigFieldArr={this.bigFieldArr}
            handleBtnPress={this.handleBtnPress}
            btnPressBigArr={btnPressBigArr}
            btnPressSmallArr={btnPressSmallArr}
            handleResult={this.handleResult}
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
