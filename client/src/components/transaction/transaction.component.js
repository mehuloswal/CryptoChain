import React from "react";
import "./style.css";

export const Transaction = ({ transaction }) => {
  const { input, outputMap } = transaction;
  console.log(outputMap);
  const recipients = Object.keys(outputMap);
  return (
    <div className="transaction">
      <div>
        From: {`${input.address.substring(0, 20)}...`} | Balance:{input.amount}
      </div>
      {recipients.map((recipient, i) => (
        <div key={i}>
          To:{`${recipient.substring(0, 20)}...`} | Sent: {outputMap[recipient]}
        </div>
      ))}
    </div>
  );
};
