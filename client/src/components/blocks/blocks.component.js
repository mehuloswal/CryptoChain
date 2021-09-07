import React, { useState, useEffect } from "react";
import { Block } from "../block/block.component";
import { FetchBlocks } from "../../api/blocks";
import { Link } from "react-router-dom";

export const Blocks = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    FetchBlocks().then((res) => {
      setBlocks([...res]);
    });
  }, [setBlocks]);

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <h3>Blocks</h3>
      {blocks.map((block, i) => {
        return <Block key={i} block={block} />;
      })}
    </div>
  );
};
