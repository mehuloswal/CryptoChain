import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import history from "./history";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Blocks } from "./components/blocks/blocks.component";
import { ConductTransaction } from "./components/conduct-transaction/conductTransaction.component";
import { TransactionPool } from "./components/transaction-pool/transactionPool.component";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/blocks" component={Blocks} />
      <Route exact path="/conduct-transaction" component={ConductTransaction} />
      <Route exact path="/transaction-pool" component={TransactionPool} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
