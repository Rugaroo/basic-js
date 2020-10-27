const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) === '[object Date]') {
    switch (date.getMonth()) {
      case 0:
      case 1:
      case 11:
        return 'winter';
        break;

      case 3:
      case 4:
      case 2:
        return 'spring';
        break;

      case 6:
      case 7:
      case 5:
        return 'summer';
        break;

      case 9:
      case 10:
      case 8:
        return 'fall';
        break;
    }

  } else {
    throw new Error();
  }
};