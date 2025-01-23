import { addProduct } from "../services/addProducrApi"
import { getProductsAPI } from "../services/getProductsApi"

const formEl = document.querySelector('.form-info')
const modalEl = document.querySelector('.modal')

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    modalEl.classList.add('is-hidden')
    const productDataToAdd = {
        name: `${formEl.elements.name.value}`,
        price: `${formEl.elements.price.value}`,
        description: `${formEl.elements.description.value}`,
        img: `${formEl.elements.img.value}`,
    }
    addProduct(productDataToAdd)
})
getProductsAPI()
