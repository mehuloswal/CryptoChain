import React, { useState, useEffect } from "react";
import { Block } from "../block/block.component";
import { FetchBlocks } from "../../api/blocks";

export const Blocks = () => {
  const [blocks, setBlocks] = useState([]);

  const blockchain = FetchBlocks();
  useEffect(() => {
    const call = () => {
      blockchain.then((res) => {
        setBlocks([...res]);
      });
    };
    call();
  }, [setBlocks]);

  return (
    <div>
      <h3>Blocks</h3>
      {blocks.map((block, i) => {
        return <Block key={i} block={block} />;
      })}
    </div>
  );
};
