const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )');
      return this
    }else {
      this.chain.push('( ' + value + ' )')
    return this
    }
  },
  removeLink(position) {
    if (position > this.chain.length || !Number.isInteger(position) || position < 1) {
      this.chain.length = 0;
      throw Error();
    } else {
      this.chain.splice(position - 1, 1);
        return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let answer = this.chain.join('~~');
    this.chain.length = 0;
    return answer;
  }
};

module.exports = chainMaker;
