import {createMarkup} from "../productsLayout"
import { deleteProduct } from "../deletingProducts";

export const getProductsAPI = ()=>{
    return fetch('http://localhost:3000/products').then(data=> data.json()).then(data=>{createMarkup(data); deleteProduct()})
}