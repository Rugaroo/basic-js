const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;

  };

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let mesArr = [];
    let kArr = [];
    let result = [];
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      mesArr.push(message.charCodeAt(i) - 65);
      kArr.push(key.charCodeAt((i - count) % key.length) - 65);

      if (mesArr[i] < 26 && mesArr[i] >= 0) {
        result.push(String.fromCharCode((mesArr[i] + kArr[i]) % 26 + 65));
      } else {
        result.push(String.fromCharCode(mesArr[i] + 65));
        count++;
      }
    }
    if (this.direct === false || this.direct === undefined) {
      result = result.reverse();
    }
    return result.join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let mesArr = [];
    let kArr = [];
    let result = [];
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      mesArr.push(message.charCodeAt(i) - 65);
      kArr.push(key.charCodeAt((i - count) % key.length) - 65);

      if (mesArr[i] < 26 && mesArr[i] >= 0) {
        result.push(String.fromCharCode((26 + mesArr[i] - kArr[i]) % 26 + 65));
      } else {
        result.push(String.fromCharCode(mesArr[i] + 65));
        count++;
      }
    }
    if (this.direct === false || this.direct === undefined) {
      result = result.reverse();
    }
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;