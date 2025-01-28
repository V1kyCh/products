export const editProduct = (data, editedProductId) =>{
    const options = {

        method: "PATCH",
        
        body: JSON.stringify(data),
        
        headers: {
        
        "Content-Type": "application/json; charset=UTF-8",
        
        },
        
        };
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${editedProductId}`, options)
        
        .then(response => response.json())
        
        .then(post => console.log(post))
        
        .catch(error => console.log("ERROR" + error));
}