import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchTransactionPool } from "../../api/transactionPoolFetch";
import { Transaction } from "../transaction/transaction.component";
import "./style.css";

export const TransactionPool = () => {
  const [transactionPool, setTransactionPool] = useState({});
  useEffect(() => {
    FetchTransactionPool().then((res) => {
      setTransactionPool({ ...res });
    });
  }, []);
  return (
    <div className="transaction-pool">
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/conduct-transaction">Conduct Transactions</Link>
      </div>
      <br />

      <div>Transaction-Pool</div>

      <br />
      <div>
        {Object.values(transactionPool).map((transaction, i) => {
          return (
            <div key={i}>
              <hr />
              <Transaction transaction={transaction} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
