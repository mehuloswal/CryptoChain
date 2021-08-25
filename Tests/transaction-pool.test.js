const TransactionPool = require("../Wallet/transaction-pool.js");
const Transaction = require("../Wallet/transaction");
const Wallet = require("../Wallet/wallet");

describe("TransactionPool", () => {
  let transactionPool, transaction;

  beforeEach(() => {
    transactionPool = new TransactionPool();
    transaction = new Transaction({
      senderWallet: new Wallet(),
      recipient: "fake-recipient",
      amount: 50,
    });
  });

  describe("setTransaction()", () => {
    it("adds a transaction", () => {
      transactionPool.setTransaction(transaction);
      
      expect(transactionPool.transactionMap[transaction.id]).toBe(transaction);
    }); 
  });
});
