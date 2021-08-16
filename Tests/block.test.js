const Block = require("../BlockchainBackend/Block");

describe("Block", () => {
  const timestamp = "a-date";
  const lastHash = "hash";
  const hash = "bar-hash";
  const data = ["blockchain", "data"];
  const block = new Block({
    timestamp,
    lastHash,
    hash,
    data,
  });

  it("has timestamp, lastHash, data, hash property", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
