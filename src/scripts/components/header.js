export function header() {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    header.classList.add("header");
    body.appendChild(header)

    const link = document.createElement("a");
    link.setAttribute("href", "index.html")
    header.appendChild(link)

    const logo = document.createElement("img");
    logo.setAttribute("src", "./src/images/Logo.svg");
    logo.setAttribute("alt", "Logotipo alura geek");
    logo.classList.add("header__img")
    link.appendChild(logo);

    const divSearch = document.createElement("div");
    divSearch.classList.add("header__search");
    header.appendChild(divSearch);

    const input = document.createElement("input");
    input.setAttribute("id", "input");
    input.setAttribute("type", "search");
    divSearch.appendChild(input);

    // const svg = document.createElement("svg")
    // svg.setAttribute("id", "search");
    // svg.setAttribute("class", "search__icon");
    // svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    // svg.setAttribute("viewBox", "0 0 14 14")

    // svg.appendChild(divSearch);
    // svg.innerHTML = `<g><circle cx="5.92" cy="5.92" r="5.42" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="13.5" y1="13.5" x2="9.75" y2="9.75" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"></line></g>`

    const button = document.createElement("a");
    button.setAttribute("href", "login.html");
    button.innerText = "Login";
    button.classList.add("header__button")
    header.appendChild(button);



//     <a href="index.html">
//     <img class="header__img" src="./src/images/Logo.svg" alt="logotipo alurageek">
//     </a> 
//     <div class="header__search">
//         <input id="input" type="search" />
//         <svg id="search" class="search__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><g><circle cx="5.92" cy="5.92" r="5.42" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="13.5" y1="13.5" x2="9.75" y2="9.75" fill="none" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"></line></g>
//         </svg>
//     </div>

//     <a class="header__button" href="login.html">Login</a>


    return header
    
function login() {
    if (location.pathname == "/addProduct.html") {
        return "Menu administrador"
    }else if (location.pathname == "/index.html") {
    return "Login"
    } else {
        const link = document.querySelector(".header__button")
        link.style.display = "none"
        return
    }
}

function send() {
    if (login() == "Menu administrador") {
        return "products.html"
    } else if (login() == "Login") {
        return "login.html"
    } else {
        return 
    }
}
}