const axios = require("axios");

export const FetchTransactionPool = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(
        "http://localhost:3000/api/transaction-pool-map"
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};
