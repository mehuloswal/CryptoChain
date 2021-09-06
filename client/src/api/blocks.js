const axios = require("axios");

export const FetchBlocks = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3000/api/blocks");
      resolve(result.data);
      console.log(result);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};
