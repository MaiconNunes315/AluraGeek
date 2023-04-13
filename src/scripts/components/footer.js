export function footer() {
    const footer = document.createElement("footer");
    const body = document.querySelector("body");

    body.appendChild(footer);

    footer.innerHTML = `
    <div class="footer">
            <div class="footer__imgContainer">
                <img src="./src/images/Logo.svg" alt="logotipo alurageek">
                <div class="footer__about">
                <a href="#">Quem somos nós</a>
                <a href="#">Politica de privacidade</a>
                <a href="#">Programa fidelidade</a>
                <a href="#">Nossas lojas</a>
                <a href="#">Quero ser franqueado</a>
                <a href="#">Anuncie aqui</a>
                </div>
            </div>
            <form class="footer__contact">
                <p>Fale conosco</p>
                <div class="footer__form">
                    <label for="name" class="footer__label">Nome</label>
                    <input id="name" class="footer__input" type="text"/>
                </div>
                <div class="footer__form">
                    <label class="footer__label" for="textarea">Escrever mensagem</label>
                    <textarea id="textarea" ></textarea>
                </div>
                
                <button>Enviar mensagem</button>
            </form>
        </div>

        <div class="footer__author">
            Desenvolvido por Maicon Nunes 2023
        </div>
    `
    return footer
}