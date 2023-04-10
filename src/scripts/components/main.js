
export function sectionComponent(title) {

    const section = document.createElement("section");
    section.classList.add("products");

    const productsInfo = document.createElement("div");
    productsInfo.classList.add("products__info");
    section.appendChild(productsInfo);

    const h2 = document.createElement("h2");
    h2.innerText = title;
    productsInfo.appendChild(h2);

    const allProducts = document.createElement("a");
    allProducts.setAttribute("href", "products.html");
    allProducts.innerText = "Ver tudo";
    productsInfo.appendChild(allProducts);

    const arrow = document.createElement("svg");
    allProducts.appendChild(arrow);

    arrow.innerHTML = `<svg viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#346]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -6643.000000)" fill="#2A7AE4"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="arrow_right-[#346]" points="264 6488.26683 258.343 6483 256.929 6484.21678 260.172 6487.2264 244 6487.2264 244 6489.18481 260.172 6489.18481 256.929 6492.53046 258.343 6494"> </polygon> </g> </g> </g> </g>
    </svg>`

    const productsCards = document.createElement("div");
    productsCards.classList.add("products__cards");
    section.appendChild(productsCards);
    return section

}


export function cardProductComponent(insertCards, img, title, price) {


    const productsCard = document.createElement("div");
    productsCard.classList.add("products__card");
    insertCards.appendChild(productsCard);

    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", `./src/images/${img}.png`);
    imgProduct.setAttribute("alt", "Imagem do produto");
    productsCard.appendChild(imgProduct);

    const titleProduct = document.createElement("h3");
    titleProduct.innerText = title;
    productsCard.appendChild(titleProduct);

    const priceProduct = document.createElement("span");
    priceProduct.innerText = `R$ ${price}`;
    productsCard.appendChild(priceProduct);

    const viewProduct = document.createElement("a");
    viewProduct.setAttribute("href", "#");
    viewProduct.innerText = "Ver produto";
    productsCard.appendChild(viewProduct);
}