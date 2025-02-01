// export const deleteProductApi =  (id) => {
//   return fetch(`http://localhost:3000/products/${id}`, {
//     method: "DELETE",
//   })
//     .then((data) => data)
//     .catch((error) => console.log("Error:", error))
// };
export const deleteProductApi = async (id) => {
  try {
  return await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  }).then((data) => data.json()).then(data => data)
}
catch (error) {
  console.log(error.message);
  }
};
