const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (type = true) {
    this.reverse = !type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error;
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let str = '';
    let shift = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        str += message[i];
        shift++;
      } else {
        str += String.fromCharCode((message[i].charCodeAt() + key[(i - shift) % key.length].charCodeAt() - 130) % 26 + 65); 
      }
    }

    return this.reverse ? str.split('').reverse().join('') : str;
  }    
  decrypt(message, key) {
    if (!message || !key) {
      throw Error;
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let str = '';
    let shift = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        str += message[i];
        shift++;
      } else {
        str += String.fromCharCode((message[i].charCodeAt() - key[(i - shift) % key.length].charCodeAt() - 130 + 260) % 26 + 65); 
      }
    }

    return this.reverse ? str.split('').reverse().join('') : str;
  }
}

module.exports = VigenereCipheringMachine;


let a = new VigenereCipheringMachine()
a.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'), 'LEARN FRONTEND DEVELOPMENT :)'