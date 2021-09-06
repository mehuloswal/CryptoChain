import React, { useState, useEffect } from "react";
import { FetchBlocks } from "../../api/blocks";
import "./style.css";

export const Blocks = () => {
  const [blocks, setBlocks] = useState([]);

  const blockchain = FetchBlocks();
  useEffect(() => {
    const call = () => {
      blockchain.then((res) => {
        setBlocks([...res]);
        console.log(res);
      });
    };
    call();
  }, [setBlocks]);
  console.log(blocks);
  return (
    <div>
      <h3>Blocks</h3>

      {blocks.map((block, i) => {
        return (
          <div className="block" key={i}>
            {JSON.stringify(block)}
          </div>
        );
      })}
    </div>
  );
};
