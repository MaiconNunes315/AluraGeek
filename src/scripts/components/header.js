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

    const searchIcon = document.createElement("img")
    searchIcon.setAttribute("src", "./src/images/vetor-pesquisa.svg");
    searchIcon.setAttribute("alt", "icone de pesquisa");
    searchIcon.setAttribute("id", "search");
    searchIcon.setAttribute("class", "search__icon");
    divSearch.appendChild(searchIcon);

    const button = document.createElement("a");
    
    if (location.pathname.includes("addProduct")) {
        button.innerText = "Menu administrador"
        button.setAttribute("href", "products.html");
    }
    else if (location.pathname.includes("login")) {
        button.style.display = "none"

    } else if (location.pathname.includes("")) {
        button.innerText = "Login"
        button.setAttribute("href", "login.html");
    }
    
    button.classList.add("header__button")
    header.appendChild(button);

    return header
    
}

function login() {
    if (location.pathname.includes("addProduct")) {
        return "Menu administrador"
    }else if (location.pathname.includes("")) {
    return "Login"
    } else if (location.pathname.includes("login")) {
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