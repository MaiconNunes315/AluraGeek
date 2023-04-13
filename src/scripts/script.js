import { footer } from "./components/footer.js";
import { header } from "./components/header.js";
import { sectionComponent } from "./components/main.js";
import { cardProductComponent } from "./components/main.js";
import { productController } from "./controller/controller.js";

import { handleInputSearch } from "./handleInputSearch.js";



(async () => {

    console.log(location.pathname)
    
    if (location.pathname === "/index.html") {
    const main = document.querySelector("main");
    
    main.appendChild(sectionComponent("Star Wars"));
    main.appendChild(sectionComponent("Console"));
    main.appendChild(sectionComponent("Diversos"));
    const productsCard = document.querySelectorAll(".products__cards");


    cardProductComponent( productsCard[0], "star1", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[0], "star2", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[0], "star3", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[0],  "star4", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[0], "star5", "Produto XYZ", "60,00")
    cardProductComponent(productsCard[0], "star6", "Produto XYZ", "60,00")
   

    cardProductComponent( productsCard[1], "Consoles1", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[1], "Consoles2", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[1], "Consoles3", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[1],  "Consoles4", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[1], "Consoles5", "Produto XYZ", "60,00")
    cardProductComponent(productsCard[1], "Consoles6", "Produto XYZ", "60,00")

    cardProductComponent( productsCard[2], "diversos1", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[2], "diversos2", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[2], "diversos3", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[2],  "diversos4", "Produto XYZ", "60,00")
    cardProductComponent( productsCard[2], "diversos5", "Produto XYZ", "60,00")
    cardProductComponent(productsCard[2], "diversos6", "Produto XYZ", "60,00")

    }
    
        const body = document.querySelector("body");
        body.insertBefore(header(), document.querySelector("section"))
        body.appendChild(footer());
    if (location.pathname == "/addProduct.html") {
        productController()
    }    
    
    
    
    handleInputSearch()

})()