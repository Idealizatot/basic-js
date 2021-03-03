const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    this.chain = this.chain || [];
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain = this.chain || [];
    this.chain.push(value + '');
    return this;
  },
  removeLink(position) {
    this.chain = this.chain || [];
    if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw "Error"
    } else {
      this.chain.splice(position - 1, 1)
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain || [];
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.chain || [];
    let str = this.chain.reduce((str, element) => {
      return str + '( ' + element + ' )~~';
    }, '');

    this.chain = [];
    return str.slice(0, str.length - 2);
  }
};

module.exports = chainMaker;


chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()