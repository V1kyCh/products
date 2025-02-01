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

export const addProduct = async (addData) => {
  try {
    return await fetch("http://localhost:3000/products", {
      method: "POST",
      body: JSON.stringify(addData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((data) => data)
  } catch (error) {
    console.log(error);
  }
};