const displayFormat = (number, limit) => {
  let x = limit - 3;
  let resultString = number.toString();
  while (resultString.length > limit && x > 0) {
    resultString = number.toExponential(x).toString();
    x -= 1;
  }
  return resultString;
};
