// export const addProduct = (addData) => {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(addData),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
//   return fetch("http://localhost:3000/products", options)
//     .then((data) => data.json())
//     .then((data) => data)
//     .catch((error) => console.log(error));
// };

export const addProductApi = async (addData) => {
  try {
    return await fetch("https://679fbd2724322f8329c48216.mockapi.io/products/products", {
      method: "POST",
      body: JSON.stringify(addData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
  } catch (error) {
    console.log(error);
  }
};