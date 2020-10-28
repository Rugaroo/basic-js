const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Error');

  if (arr.length == 0) return arr;

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!(((arr[i] === '--discard-prev' || arr[i] === '--double-prev') && i === 0) ||
        ((arr[i] === '--discard-next' || arr[i] === '--double-next') && i === arr.length - 1))) {
      if (arr[i] == '--discard-next') {
        i++;
      } else if (arr[i] == '--discard-prev') {
        if (arr[i - 2] !== '--discard-next') {
          newArr.pop();
        };
      } else if (arr[i] == '--double-next') {
        newArr.push(arr[i + 1]);
      } else if (arr[i] == '--double-prev') {
        if (arr[i - 2] !== '--discard-next') {
          newArr.push(arr[i - 1])
        };
      } else {
        newArr.push(arr[i]);
      }
    }
  }

  return newArr;
};