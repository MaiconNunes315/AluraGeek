import { footer } from "./components/footer.js";
import { header } from "./components/header.js";
import { sectionComponent } from "./components/main.js";
import { cardProductComponent } from "./components/main.js";
import { productController } from "./controller/controller.js";
import { handleInputSearch } from "./handleInputSearch.js";
import { getCategories, getProduct } from "./services/service.js";



(async () => {
    //será renderizado apenas no arquivo index
    if (location.pathname === "/index.html") {
        //buscando a tag html principal da pagina
        const main = document.querySelector("main");
        //recebendo os valores das categorias dos produtos e declarando em uma variável 
        const categories = await getCategories();
        
        //separando as categorias atravéns dos nomes recebidos pelo json-server, e colocando em seus devidos lugares através dos parâmetros

        categories.forEach(async section => {
            main.appendChild(sectionComponent(section));
            
        })

        const products = {
            star: await getProduct("Star Wars"),
            consoles: await getProduct("Console"),
            divers: await getProduct("Diversos")
        }     

        const sectionProduct = document.querySelectorAll(".products");

        products.star.map(card => {
            cardProductComponent(sectionProduct[0].lastChild, card.img, card.name, card.price)
        })

        products.consoles.map(card => {
            console.log(card)
            cardProductComponent(sectionProduct[1].lastChild, card.img, card.name, card.price)
        })

        products.divers.map(card => {
            cardProductComponent(sectionProduct[2].lastChild, card.img, card.name, card.price)
        })
        
        
        
        
        
            
   

        // section.map(async cards => {
        //     await getProduct("Star Wars").map(card => {
        //         console.log(card)
        //         cardProductComponent(cards, card.img, card.name, card.price)
        //     })
            
        // })

        // const productsCard = document.querySelectorAll(".products__cards");
       
        // cardProductComponent(productsCard[0], "star1", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[0], "star2", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[0], "star3", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[0], "star4", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[0], "star5", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[0], "star6", "Produto XYZ", "60,00")


        // cardProductComponent(productsCard[1], "Consoles1", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[1], "Consoles2", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[1], "Consoles3", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[1], "Consoles4", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[1], "Consoles5", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[1], "Consoles6", "Produto XYZ", "60,00")

        // cardProductComponent(productsCard[2], "diversos1", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[2], "diversos2", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[2], "diversos3", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[2], "diversos4", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[2], "diversos5", "Produto XYZ", "60,00")
        // cardProductComponent(productsCard[2], "diversos6", "Produto XYZ", "60,00")

    }

    const body = document.querySelector("body");
    body.insertBefore(header(), document.querySelector("section"))
    body.appendChild(footer());

    if (location.pathname == "/addProduct.html") {
        productController()
    }



    handleInputSearch()

})()