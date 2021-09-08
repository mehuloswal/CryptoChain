import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchTransactionPool } from "../../api/transactionPoolFetch";
import { Transaction } from "../transaction/transaction.component";
import "./style.css";

export const TransactionPool = () => {
  const POLL_INTERVAL_MS = 10000;
  const [transactionPool, setTransactionPool] = useState({});

  useEffect(async () => {
    await FetchTransactionPool().then((res) => {
      setTransactionPool({ ...res });
    });
    const interval = setInterval(async () => {
      await FetchTransactionPool().then((res) => {
        setTransactionPool({ ...res });
      });
    }, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
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
