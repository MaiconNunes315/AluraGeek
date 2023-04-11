export function handleInputSearch() {
    const handleSearch = document.querySelector("#search");
    const searchContainer = document.querySelector(".header__search");

    handleSearch.addEventListener("click", (event) => {
        
        const input = document.querySelector("#input");
        

        if (searchContainer.className == "header__search") {
            searchContainer.classList.add("header__searchActive");
            searchContainer.classList.remove('header__search');
            input.classList.add("input__active");
    
        } else {
            searchContainer.classList.remove("header__searchActive");
            searchContainer.classList.add("header__search")
        }
        
    })
}