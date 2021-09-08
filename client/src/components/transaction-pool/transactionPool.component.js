import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FetchTransactionPool } from "../../api/transactionPoolFetch";
import { Transaction } from "../transaction/transaction.component";
import "./style.css";

export const TransactionPool = () => {
  let history = useHistory();
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

  const handleMining = async () => {
    await axios
      .get("http://localhost:3000/api/mine-transactions")
      .then((res) => {
        if (res.status === 200) {
          alert("SuccessFully Mined");
          history.push("/blocks");
        } else {
          alert("Mine Transactions block request not complete");
        }
      });
  };
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
      <hr />
      <Button variant="warning" onClick={handleMining}>
        Mine Transactions
      </Button>
    </div>
  );
};
