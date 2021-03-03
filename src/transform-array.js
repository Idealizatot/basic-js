const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }

  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    switch(newArr[i]) {
      case '--discard-next':
        if (typeof newArr[i + 1] !== 'undefined') {
          newArr[i + 1] = '--deleted';
        }
        newArr[i] = '--deleted'
        break;
      case '--discard-prev':
        if (typeof newArr[i - 1] !== 'undefined') {
          newArr[i - 1] = '--deleted';
        }
        newArr[i] = '--deleted'
        break;
      case '--double-next':
        if (typeof newArr[i + 1] !== 'undefined') {
          newArr[i] = newArr[i + 1];
        } else {
          newArr[i] = '--deleted'
        }
        break;
      case '--double-prev':
        if (typeof newArr[i - 1] !== 'undefined') {
          newArr[i] = newArr[i - 1];
        } else {
          newArr[i] = '--deleted'
        }
        break;
    }
  }

  return newArr.filter(element => element !== '--deleted')

};
