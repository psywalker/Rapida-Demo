import "core-js";

export const shuffle = array => {
  for (var tmp, cur, top = array.length; top--; ) {
    cur = (Math.random() * (top + 1)) << 0;
    tmp = array[cur];
    array[cur] = array[top];
    array[top] = tmp;
  }
  return array;
};

export const getInitionalBtnArr = num =>
  Array.from({ length: num }, (v, k) => ++k);

export const getNewStateArr = (arr, action) => {
  let newStateArr = [...arr];
  return action.btnPress
    ? [...newStateArr, action.id]
    : [...newStateArr].filter(field => field !== action.id);
};

export const getActionPressNum = (bol, arr, max, latest) => {
  let numBig = !bol ? arr.length - 1 : arr.length;
  return numBig < max ? arr : arr.filter(field => field !== latest);
};

export const getRandomInt = (min, max, length) => {
  const arr = Array.from({ length: max - min }, (v, k) => max - k);
  return shuffle(arr).slice(0, length);
};

export const getGameResult = (smallArr, bigArr, smallArrMax, bigArrMax) => {
  const randomBigArr = getRandomInt(0, 19, bigArrMax);
  const randomSmallArr = getRandomInt(0, 2, smallArrMax);

  let bigResultCount = 0;
  let smallResultCount = 0;

  bigArr.every(el => {
    if (randomBigArr.includes(el)) {
      bigResultCount++;
    }
    return bigArr.includes(el);
  });

  smallArr.every(el => {
    if (randomSmallArr.includes(el)) {
      smallResultCount++;
    }
    return smallArr.includes(el);
  });

  if (
    (bigResultCount === 7 || bigResultCount === 8) &&
    smallResultCount === 1
  ) {
    return {
      randomBigArr,
      randomSmallArr,
      win: true,
      bigResultCount,
      smallResultCount
    };
  }
  return {
    randomBigArr,
    randomSmallArr,
    win: false,
    bigResultCount,
    smallResultCount
  };
};

export const getPressBtnState = (
  action,
  bigArr,
  smallArr,
  latestNumberBig,
  latestNumberSmall,
  bigMax,
  smallMax
) => {

  let newArr;
  switch (action.type) {
    case "fieldBig":
      newArr = getActionPressNum(
        action.btnPress,
        bigArr,
        bigMax,
        latestNumberBig
      );

      return { newArr, type: "big" };
    case "fieldSmall":
      newArr = getActionPressNum(
        action.btnPress,
        smallArr,
        smallMax,
        latestNumberSmall
      );
      return { newArr, type: "small" };
    default:
      return false;
  }
};