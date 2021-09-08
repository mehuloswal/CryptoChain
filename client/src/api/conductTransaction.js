const axios = require("axios");

export const PostConductTransaction = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(
        "http://localhost:3000/api/transact",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};
