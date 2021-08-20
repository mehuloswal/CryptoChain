const express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("./BlockchainBackend/Blockchain");
const app = express();
const port = 3000;
const blockchain = new Blockchain();

app.use(bodyParser.json());

app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});
app.post("/api/mineblock", (req, res) => {
  const { data } = req.body;
  blockchain.addBlock({ data });
  res.json(blockchain.chain);
});
app.listen(port, () => console.log(`listening at localhost:${port} !`));
