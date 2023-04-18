
import { adminProduct } from "./components/adminProduct.js";
import { footer } from "./components/footer.js";
import { header } from "./components/header.js";
import { sectionComponent } from "./components/main.js";
import { cardProductComponent } from "./components/main.js";
import { productController } from "./controller/controller.js";
import { login } from "./controller/login.js";

import { handleInputSearch } from "./handleInputSearch.js";
import { getCategories, getProduct } from "./services/service.js";
import { users } from "./users.js";


const pathnameString = "/index.html" || "/AluraGeek/index.html" || "/AluraGeek/ " || "/"
//será renderizado apenas no arquivo index
const body = document.querySelector("body");
body.insertBefore(header(), document.querySelector("section"))
body.appendChild(footer());

if (location.pathname == "/" || location.pathname == "" || location.pathname.includes("index")) {

    //buscando a tag html principal da pagina
    const main = document.querySelector("main");
    //recebendo os valores das categorias dos produtos e declarando em uma variável
    // const categories = await getCategories();
    const categories = getCategories();

    //separando as categorias atravéns dos nomes recebidos pelo json-server, e colocando em seus devidos lugares através dos parâmetros

    categories.forEach(section => {
        main.appendChild(sectionComponent(section));

    })

    // const products = {
    //     star: getProduct("Star Wars"),
    //     consoles: getProduct("Console"),
    //     divers: getProduct("Diversos")
    // }     

    const sectionProduct = document.querySelectorAll(".products");

    getProduct()["Star-Wars"].map(card => {
        cardProductComponent(sectionProduct[0].lastChild, card.img, card.name, card.price)
    })
    getProduct()["Console"].map(card => {
        cardProductComponent(sectionProduct[1].lastChild, card.img, card.name, card.price)
    })
    getProduct()["Diversos"].map(card => {
        cardProductComponent(sectionProduct[2].lastChild, card.img, card.name, card.price)
    })

    // products.star.map(card => {
    //     cardProductComponent(sectionProduct[0].lastChild, card.img, card.name, card.price)
    // })

    // products.consoles.map(card => {
    //     cardProductComponent(sectionProduct[1].lastChild, card.img, card.name, card.price)
    // })

    // products.divers.map(card => {
    //     cardProductComponent(sectionProduct[2].lastChild, card.img, card.name, card.price)
    // })       
}

if (location.pathname.includes("addProduct")) {
    productController()
}
if (location.pathname.includes("login")) {
    login();
}
if (location.pathname.includes("products")) {

    adminProduct()
}
handleInputSearch()
