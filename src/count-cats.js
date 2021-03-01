const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix.length) {
    return 0
  }

  let countCat = 0;

  matrix.forEach(arrayCats => {
    arrayCats.forEach(element => {
      if (element === '^^') {
        countCat++
      }
    })
  });

  return countCat;
};
