const CustomError = require("../extensions/custom-error");

// module.exports = class DepthCalculator {
//   depth = 0

//   calculateDepth(arr) {
//     this.findDepth(arr, 1)
//     return this.depth;
//   }

//   findDepth(array, index) {
//     array.forEach(element => {
//       if (Array.isArray(element)) {
//         this.findDepth(element, index + 1)
//       }
//     });
//     if (index > this.depth) {
//       this.depth = index;
//     }
//   }
// };

class DepthCalculator {
  depth = 0

  calculateDepth(arr) {
    this.findDepth(arr, 1)
    return this.depth;
  }

  findDepth(array, index) {
    array.forEach(element => {
      if (Array.isArray(element)) {
        this.findDepth(element, index + 1)
      }
    });
    if (index > this.depth) {
      this.depth = index;
    }
  }
};

new DepthCalculator().calculateDepth([1, 2, 3, 4, 5, [1, []]]);