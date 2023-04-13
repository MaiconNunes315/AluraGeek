import { postProduct } from "../services/service.js";

export async function productController() {
    
    window.onload = () => {
        const formProduct = document.querySelector(".addProduct__container");
    
        formProduct.addEventListener("submit", async (event) => {
            event.preventDefault()
    
            const img = event.target.querySelector("#image").value;
            const category = event.target.querySelector("#category").value;
            const name = event.target.querySelector("#name").value;
            const price = event.target.querySelector("#price").value;
            const description = event.target.querySelector("#description").value;
            
            const post = {
                img: img,
                category: category,
                name: name,
                price: price,
                description:description
            }
            await postProduct(post)
        })
    }
   

    
}
