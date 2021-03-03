const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 if (!Array.isArray(members)) {
    return false
  }

  let str = members.reduce((str, element) => {
    if (typeof element !== 'string') {
      return str
    }
    return str + (element.trim())[0];
  }, '')

  return str.toUpperCase().split('').sort((a, b) => a < b ? -1 : 1).join('');

};