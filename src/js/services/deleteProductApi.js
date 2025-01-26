export const deleteProductApi = (id) => {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  })
    .then((data) => console.log(data))
    .catch((error) => console.log("Error:", error));
};
