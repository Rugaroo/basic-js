const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    
      if (Array.isArray(arr)) {
        arr.forEach(item => {
          depth = Math.max(this.calculateDepth(item), depth);
        });
      } else {
        return 0;
      }
      return depth +1;
    }
  }
