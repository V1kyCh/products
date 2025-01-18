import {createMarkup} from "../productsLayout"
export const getProductsAPI = ()=>{
    return fetch('http://localhost:3000/products').then(data=> data.json()).then(data=>createMarkup(data))
}