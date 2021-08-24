const uuid = require("uuid");
const { verifySignature } = require("../Utils/Elliptic-curve");

class Transaction {
  constructor({ senderWallet, recipient, amount }) {
    this.id = uuid.v1();
    this.outputMap = this.createOutputMap({ senderWallet, recipient, amount });
    this.input = this.createInput({ senderWallet, outputMap: this.outputMap });
  }
  createOutputMap({ senderWallet, recipient, amount }) {
    const outputMap = {};
    outputMap[recipient] = amount;
    outputMap[senderWallet.publicKey] = senderWallet.balance - amount;
    return outputMap;
  }
  createInput({ senderWallet, outputMap }) {
    return {
      timestamp: Date.now(),
      amount: senderWallet.balance,
      address: senderWallet.publicKey,
      signature: senderWallet.sign(outputMap),
    };
  }

  static validTransaction(transaction) {
    const { input, outputMap } = transaction;
    const { address, amount, signature } = input;

    const outputTotalValue = Object.values(outputMap).reduce(
      (total, outputAmount) => total + outputAmount
    );
    if (amount !== outputTotalValue) {
      console.error(`Inavlid Transaction from ${address}`);
      return false;
    }
    if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
      console.error(`Invalid signature from ${address}`);
      return false;
    }
    return true;
  }
}
module.exports = Transaction;
