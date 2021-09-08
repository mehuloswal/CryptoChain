import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { PostConductTransaction } from "../../api/conductTransaction";
import "./style.css";

export const ConductTransaction = () => {
  let history = useHistory();
  const initialData = {
    recipient: "",
    amount: "",
  };
  const [formData, setFormData] = useState(initialData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await PostConductTransaction(JSON.stringify(formData)).then(() => {
        history.push("/transaction-pool");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="conduct-transaction">
      <Link to="/">Home</Link>
      <h3>Conduct a Transaction</h3>
      <hr />
      <br />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Control
            input="text"
            name="recipient"
            placeholder="recipient..."
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            input="number"
            name="amount"
            placeholder="amount..."
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button type="submit" variant="warning">
          Transact
        </Button>
      </Form>
    </div>
  );
};
