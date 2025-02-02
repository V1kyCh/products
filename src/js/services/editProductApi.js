export const editProductApi = async (data, editedProductId) => {
  console.log(data, editedProductId)
  try {
    return await fetch(`https://679fbd2724322f8329c48216.mockapi.io/products/products/${editedProductId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
  } catch (error) {
    console.log(error.message);
  }
};
