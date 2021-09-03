import React, { useState, useEffect } from "react";
import { FetchWalletInfo } from "../../api/walletInfo";

export const WalletInfo = () => {
  // console.log(FetchWalletInfo());
  const [result, setResult] = useState({ loading: true });
  const info = FetchWalletInfo();
  useEffect(() => {
    const mp = () => {
      info.then((res) => {
        setResult({
          ...res,
          loading: false,
        });
        console.log(res);
      });
    };
    mp();
  }, [setResult]);

  const { address, balance } = result;

  return (
    <div>
      <div>Address: {address}</div>
      <div>Balance: {balance}</div>
    </div>
  );
};
