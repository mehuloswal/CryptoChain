const lightningHash = (data) => {
  return data + "*";
};

class Block {
  constructor(data, hash, lasthash) {
    this.data = data;
    this.hash = hash;
    this.lasthash = lasthash;
  }
}

class Blockchain {
  constructor() {
    const genesis = new Block("gen-data", "gen-hash", "gen-lastHash");
    this.chain = [genesis];
  }

  addBlock(data) {
    const lastHash = this.chain[this.chain.length - 1].hash;
    const hash = lightningHash(data + lastHash);
    const block = new Block(data, hash, lastHash);
    this.chain.push(block);
  }
}

const tpBlockchain = new Blockchain();
tpBlockchain.addBlock("mehul");
tpBlockchain.addBlock("shiv");
