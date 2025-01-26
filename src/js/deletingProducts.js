import { deleteProductApi } from "./services/deleteProductApi"
export const deleteProduct = () =>{
    const deleteBtnArr = document.querySelectorAll('.delete-btn')
    deleteBtnArr.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', ()=>{
            deleteProductApi(deleteBtn.parentElement.id)
            location.reload();
        })
    })
}