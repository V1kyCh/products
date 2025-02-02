// export const getProductsAPI = ()=>{
//     return fetch('http://localhost:3000/products').then(data=> data.json()).then(data=>{createMarkup(data); deleteProduct(); openModal()}).catch(error => console.log(error))
// }

export const getProductsAPI = async ()=>{
    let response
    try{
     response = await fetch('https://679fbd2724322f8329c48216.mockapi.io/products/products').then(data=> data.json())
    } catch(error) {
       response = error
    }
    return response
}