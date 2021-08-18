const Block = require("./Block");
const cryptoHash = require("./Crypto-hash");
class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }

  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      //since in JS two objects cant be triple equal unless they are same underlying object instance
      //chain[0] and Block.genesis are two different instances.
      return false;
    }
    for (let i = 1; i < chain.length; i++) {
      const { timestamp, lastHash, hash, data } = chain[i];
      const actualLastHash = chain[i - 1].hash;
      if (lastHash !== actualLastHash) return false;
      const validatedHash = cryptoHash(timestamp, lastHash, data);
      if (hash !== validatedHash) return false;
    }
    return true;
  }
}
module.exports = Blockchain;
