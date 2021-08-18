const Blockchain = require("../BlockchainBackend/Blockchain.js");
const Block = require("../BlockchainBackend/Block");

describe("Blockchain", () => {
  const blockchain = new Blockchain();
  it("contain a `chain` array instance", () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });
  it("starts with the genesis block", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });
  it("adds a new block to the chain", () => {
    const newData = "foo-bar";
    blockchain.addBlock({ data: newData });
    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
  });
});
