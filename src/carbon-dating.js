const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(N) {
  if (typeof N !== 'string') {
    return false
  }

  let rate = +N;
  if (isNaN(rate) || 0 >= rate || rate > 15) {
    return false
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / (+N)) / (0.693 / HALF_LIFE_PERIOD))

};