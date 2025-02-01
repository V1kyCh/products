export const editProduct = async (data, editedProductId) => {
  try {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${editedProductId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((post) => console.log(post));
  } catch (error) {
    console.log(error.message);
  }
};
