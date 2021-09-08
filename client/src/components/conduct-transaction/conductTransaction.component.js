import React, { useState } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export const ConductTransaction = ({ transaction }) => {
  const [recipient, setRecipient] = useState();
  const [amount, setAmount] = useState();

  const updateRecipient = (e) => {
    const { name, value } = e.target;
    setRecipient({ ...recipient, [name]: value });
  };
  const updateAmount = (e) => {
    const { name, value } = e.target;
    setAmount({ ...amount, [name]: value });
  };
  console.log(recipient, amount);
  return (
    <div className="conduct-transaction">
      <Link to="/">Home</Link>
      <h3>Conduct a Transaction</h3>
      <hr />
      <br />
      <FormGroup>
        <FormControl
          input="text"
          name="recipient"
          placeholder="recipient..."
          onChange={updateRecipient}
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          input="number"
          name="amount"
          placeholder="amount..."
          onChange={updateAmount}
        />
      </FormGroup>
    </div>
  );
};
