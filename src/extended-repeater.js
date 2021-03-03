const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  let repeatTimes = options.repeatTimes || 1;
  let addition = typeof options.addition === 'undefined' ? '' : options.addition;
  addition += ''
  let additionRepeatTimes = options.additionRepeatTimes || (addition ? 1 : 0);

  let result = str + '';

  let additionStr = addition;
  while (addition && additionRepeatTimes) {
    result = result + additionStr;
    additionRepeatTimes--;
    if (additionRepeatTimes) {
      result += additionSeparator;
    }
  }

  let fullStr = result;
  while (repeatTimes - 1) {
    result = result + separator + fullStr
    repeatTimes--;
  }

  return result;
};
