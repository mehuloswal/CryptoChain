import React, { useState } from "react";
import { Transaction } from "../transaction/transaction.component";

import "./style.css";
export const Block = (props) => {
  const { timestamp, hash, data } = props.block;
  const [readMore, setReadMore] = useState(false);
  const stringifiedData = JSON.stringify(data);
  const initialData =
    stringifiedData.length > 35
      ? `${stringifiedData.substring(0, 35)}...`
      : stringifiedData;
  const [dataToDisplay, setDataToDisplay] = useState(initialData);
  console.log(dataToDisplay);
  const hashDisplay = `${hash.substring(0, 15)}...`;

  const linkName = readMore ? "Read Less << " : "Read More >> ";
  return (
    <div className="block">
      <div>Hash: {hashDisplay}</div>
      <div>TimeStamp: {new Date(timestamp).toLocaleString()}</div>
      <div>
        Data:{" "}
        {typeof dataToDisplay === "string"
          ? dataToDisplay
          : dataToDisplay.map((transaction, i) => (
              <div key={i}>
                <hr />
                <Transaction transaction={transaction} />
              </div>
            ))}
      </div>
      <button
        onClick={() => {
          setReadMore(!readMore);
          if (!readMore) {
            setDataToDisplay(JSON.parse(stringifiedData));
          } else {
            setDataToDisplay(initialData);
          }
        }}
        className="button"
      >
        {linkName}
      </button>
    </div>
  );
};
