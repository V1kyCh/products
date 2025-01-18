const productsList = document.querySelector('.products-list')

export const createMarkup = (productsData)=>{
    console.log(productsData)
    const makrup = productsData.map(obj=>
        `<li class="news-item">
            <p class="product-name">${obj.name}</p>
            <p class="product-price">${obj.price}</p>
            <p class="product-sort">${obj.description}</p>
            <img src="${obj.image}" class="product-img"></img>
        </li>`
    ).join('')
    productsList.insertAdjacentHTML("beforeend", makrup)
}