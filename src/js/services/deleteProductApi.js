// export const deleteProductApi =  (id) => {
//   return fetch(`http://localhost:3000/products/${id}`, {
//     method: "DELETE",
//   })
//     .then((data) => data)
//     .catch((error) => console.log("Error:", error))
// };
export const deleteProductApi = async (id) => {
  
  try {
  return await fetch(`https://679fbd2724322f8329c48216.mockapi.io/products/products/${id}`, {
    method: "DELETE",
  }).then((data) => data.json())
}
catch (error) {
  console.log(error.message);
  }
};
