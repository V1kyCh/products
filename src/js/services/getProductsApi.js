import {createMarkup} from "../productsLayout"
import { deleteProduct } from "../deletingProducts";
import { openModal } from "../modal/edit-product-modal";

export const getProductsAPI = ()=>{
    return fetch('http://localhost:3000/products').then(data=> data.json()).then(data=>{createMarkup(data); deleteProduct(); openModal()})
}