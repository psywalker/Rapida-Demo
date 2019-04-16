import React, { Component } from "react";
import GameItemField from "components/GameItems/GameItemField";
import GameItemText from "components/GameItems/GameItemText";
import { fieldSmallState, fieldBigState } from "initialStates/fieldsState";
import axios from "axios";
import {
  getInitionalBtnArr,
  getNewStateArr,
  getGameResult,
  getPressBtnState,
  getRandomInt
} from "selectors/selectors";
import "./style.scss";

class GameContainer extends Component {
  state = {
    btnPressSmallArr: [],
    latestNumberSmall: null,
    btnPressBigArr: [],
    latestNumberBig: null,
    randomBigArr: [],
    randomSmallArr: [],
    win: false,
    bigResultCount: 0,
    smallResultCount: 0,
    resultFlag: false,
    queryDataFlag: false
  };

  smallFieldArr = getInitionalBtnArr(fieldSmallState.count);
  bigFieldArr = getInitionalBtnArr(fieldBigState.count);

  handleBtnPress = action => {
    const {
      btnPressBigArr,
      latestNumberBig,
      btnPressSmallArr,
      latestNumberSmall
    } = this.state;

    const newArrObj = getPressBtnState(
      action,
      btnPressBigArr,
      btnPressSmallArr,
      latestNumberBig,
      latestNumberSmall,
      fieldBigState.max,
      fieldSmallState.max
    );

    if (newArrObj.type === "big") {
      this.setState({
        btnPressBigArr: getNewStateArr(newArrObj.newArr, action),
        latestNumberBig: action.id
      });
      return true;
    }

    this.setState({
      btnPressSmallArr: getNewStateArr(newArrObj.newArr, action),
      latestNumberSmall: action.id
    });
  };

  handleResult = () => {
    const { btnPressSmallArr, btnPressBigArr } = this.state;
    let queryTimeOut;
    let timeOutCount = 0;

    const handleGetGameResult = getGameResult(
      btnPressSmallArr,
      btnPressBigArr,
      fieldSmallState.max,
      fieldBigState.max
    );

    const handleQueryData = () => {
      const queryData = {
        selectedNumber: {
          firstField: btnPressBigArr,
          secondField: btnPressSmallArr
        },
        isTicketWon: handleGetGameResult.win
      };
      axios
        .post("/finch-test", { queryData })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(error => {
          if (timeOutCount === 2) {
            clearTimeout(queryTimeOut);
            this.setState({ queryDataFlag: true });
            return false;
          }
          queryTimeOut = setTimeout(handleQueryData, 2000);
          timeOutCount++;
        });
    };
    handleQueryData();

    this.setState({
      randomBigArr: handleGetGameResult.randomBigArr,
      randomSmallArr: handleGetGameResult.randomSmallArr,
      win: handleGetGameResult.win,
      bigResultCount: handleGetGameResult.bigResultCount,
      smallResultCount: handleGetGameResult.smallResultCount,
      resultFlag: true
    });
  };

  handleGeneratedNumbers = () => {
    const bigArr = getRandomInt(0, 19, fieldBigState.max),
      smallArr = getRandomInt(0, 2, fieldSmallState.max),
      latBig = bigArr[bigArr.length - 1],
      latSmall = smallArr[smallArr.length - 1];

    this.setState({
      btnPressBigArr: bigArr,
      latestNumberBig: latBig,
      btnPressSmallArr: smallArr,
      latestNumberSmall: latSmall,
      resultFlag: false
    });
  };
  handleQueryPopupToggle = () => this.setState({ queryDataFlag: false });
  render() {
    const {
      btnPressBigArr,
      btnPressSmallArr,
      randomBigArr,
      randomSmallArr,
      win,
      bigResultCount,
      smallResultCount,
      resultFlag,
      queryDataFlag
    } = this.state;

    const btnPressLength = btnPressBigArr.length + btnPressSmallArr.length;
    const btnPressLengthFlag =
      btnPressLength < fieldSmallState.max + fieldBigState.max ? true : false;

    return (
      <div className="game">
        <div className="game__item">
          {queryDataFlag && (
            <div className="game__query game-query-popup">
              <i
                onClick={this.handleQueryPopupToggle}
                className="game-query-popup__btn-toggle"
              >
                ✖
              </i>
              Уведомление об ошибке запроса
            </div>
          )}
          <GameItemField
            smallFieldArr={this.smallFieldArr}
            bigFieldArr={this.bigFieldArr}
            handleBtnPress={this.handleBtnPress}
            btnPressBigArr={btnPressBigArr}
            btnPressSmallArr={btnPressSmallArr}
            handleResult={this.handleResult}
            btnPressLengthFlag={btnPressLengthFlag}
            handleGeneratedNumbers={this.handleGeneratedNumbers}
          />
        </div>
        <div className="game__item">
          <GameItemText
            randomBigArr={randomBigArr}
            randomSmallArr={randomSmallArr}
            win={win}
            btnPressBigArr={btnPressBigArr}
            btnPressSmallArr={btnPressSmallArr}
            bigResultCount={bigResultCount}
            smallResultCount={smallResultCount}
            resultFlag={resultFlag}
          />
        </div>
      </div>
    )
  }
}

export default GameContainer;
