import { db } from "../db.js";

export function adminProduct() {
    const section = document.querySelector(".products__section");

    const htmlElement = db["Star-Wars"].map(element => {
        return `<div class="product">
                    <div class="product__icon">
                        <div class="icon__container">
                            <button class="icon1"></button>
                            <button class="icon2"></button>
                        </div>
                        <img src=${element.img} alt="imagem star wars produto" />
                    </div>
                <h3>${element.name}</h3>
                <span class="price">${element.price}</span>
        </div>
        `
    })

    const htmlElementConsole = db["Console"].map(element => {
        return `<div class="product">
                    <div class="product__icon">
                        <div class="icon__container">
                            <button class="icon1"></button>
                            <button class="icon2"></button>
                        </div>
                        <img src=${element.img} alt="imagem star wars produto" />
                    </div>
                <h3>${element.name}</h3>
                <span class="price">${element.price}</span>
        </div>
        `
    })

    const htmlElementDivers = db["Diversos"].map(element => {
        return `<div class="product">
                    <div class="product__icon">
                        <div class="icon__container">
                            <button class="icon1"></button>
                            <button class="icon2"></button>
                        </div>
                        <img src=${element.img} alt="imagem star wars produto" />
                    </div>
                <h3>${element.name}</h3>
                <span class="price">${element.price}</span>
        </div>
        `
    })

    section.innerHTML = htmlElement + htmlElementConsole + htmlElementDivers

}