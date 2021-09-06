import React from "react";
import "./style.css";
export const Block = (props) => {
  const { timestamp, hash, data } = props.block;
  console.log(props);
  const hashDisplay = `${hash.substring(0, 15)}...`;
  const stringifiedData = JSON.stringify(data);
  const dataDisplay =
    stringifiedData.length > 35
      ? `${stringifiedData.substring(0, 35)}...`
      : stringifiedData;
  return (
    <div className="block">
      <div>Hash: {hashDisplay}</div>
      <div>TimeStamp: {new Date(timestamp).toLocaleString()}</div>
      <div>Data: {dataDisplay}</div>
    </div>
  );
};
