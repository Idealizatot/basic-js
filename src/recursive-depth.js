const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 0

  calculateDepth(arr, index = 1) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        this.calculateDepth(element, index + 1)
      }
    });
    if (index > this.depth) {
      this.depth = index;
    }

    let result = this.depth;
    if (index === 1) {
      this.depth = 0;
    }
    
    return result;
  }
};
