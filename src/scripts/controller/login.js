import { users } from "../users.js";

export function login() {
    const form = document.querySelector(".login__form");
    
    form.addEventListener("submit", (event) => {
    event.preventDefault()
    const user = document.querySelector('.input__text');
    const password = document.querySelector('.input__password');

    
        if (user.value == users.admin.email && password.value == users.admin.password) {
            sessionStorage.setItem("logado", "true");
            window.location.href = `${location.origin}/products.html`
        } else {
        console.log("error")
        }
        
    });
}

