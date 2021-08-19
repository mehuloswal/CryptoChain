const { GENESIS_DATA } = require("../config");
const cryptoHash = require("./Crypto-hash");

class Block {
  constructor({ timestamp, lastHash, hash, data, difficulty, nonce }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.difficulty = difficulty;
    this.nonce = nonce;
  }

  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    let hash, timestamp;
    // const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const difficulty = lastBlock.difficulty;
    let nonce = 0;

    do {
      nonce++;
      timestamp = Date.now();
      hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
    } while (hash.substring(0, difficulty) !== "0".repeat(difficulty));

    return new this({
      timestamp: Date.now(),
      lastHash: lastBlock.hash,
      data,
      difficulty,
      nonce,
      hash,
      // hash: cryptoHash(timestamp, lastHash, data, nonce, difficulty),
    });
  }
}

module.exports = Block;
