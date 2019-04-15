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

export const getRandomInt = (max, min, length) => {
  var result = [],
    resultSorted = [];
  if (typeof max !== "number") return Math.random();
  if (typeof min !== "number") return Math.floor(Math.random() * ++max);
  if (min > max) min = [max, (max = min)][0];
  if (!length || typeof length !== "number")
    return Math.floor(Math.random() * (max - min + 1)) + min;
  if (length > max - min + 1) throw new RangeError("invalid length.");
  for (var j = 0, random, index; j < length; j++, max--) {
    random = Math.floor(Math.random() * (max - min + 1)) + min;
    for (index = j; index && resultSorted[index - 1] <= random; index--)
      random++;
    result.push(random);
    resultSorted.splice(index, 0, random);
  }
  return result;
};
