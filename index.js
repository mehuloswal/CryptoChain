const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const Blockchain = require("./BlockchainBackend/Blockchain");
const PubSub = require("./App/pubsub");
const TransactionPool = require("./Wallet/transaction-pool");
const Wallet = require("./Wallet/wallet");

const app = express();
const DEFAULT_PORT = 3000;

const blockchain = new Blockchain();
const transactionPool = new TransactionPool();
const wallet = new Wallet();
const pubsub = new PubSub({ blockchain });

const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

setTimeout(() => pubsub.broadcastChain(), 1000);

app.use(bodyParser.json());

app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});
app.post("/api/mineblock", (req, res) => {
  const { data } = req.body;
  blockchain.addBlock({ data });
  pubsub.broadcastChain();
  res.json(blockchain.chain);
});

app.post("/api/transact", (req, res) => {
  const { amount, recipient } = req.body;
  let transaction = transactionPool.existingTransaction({
    inputAddress: wallet.publicKey,
  });
  try {
    if (transaction) {
      transaction.update({ senderWallet: wallet, recipient, amount });
    } else {
      transaction = wallet.createTransaction({ recipient, amount });
    }
  } catch (error) {
    return res.status(400).json({ type: "error", message: error.message });
  }
  transactionPool.setTransaction(transaction);
  res.json({ type: "sucess", transaction });
});

app.get("/api/transaction-pool-map", (req, res) => {
  res.json(transactionPool.transactionMap);
});

const syncChains = () => {
  request(
    { url: `${ROOT_NODE_ADDRESS}/api/blocks` },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const rootChain = JSON.parse(body);
        console.log("replace chain on a sync with", rootChain);
        blockchain.replaceChain(rootChain);
      }
    }
  );
};

let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === "true") {
  PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}
const PORT = PEER_PORT || DEFAULT_PORT;
app.listen(PORT, () => {
  console.log(`listening at localhost:${PORT} !`);
  if (PORT !== DEFAULT_PORT) {
    syncChains();
  }
});
