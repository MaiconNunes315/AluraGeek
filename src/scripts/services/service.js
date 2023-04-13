export async function getCategories() {
    const getData = await fetch(`http://localhost:3000/categories`);
    return getData.json();
}


export async function getProduct(category) {

    if (category.includes(" ")) {
        category = category.replace(" ", "-")
    }

    const getData = await fetch(`http://localhost:3000/${category}`);



    return getData.json() 
}

export async function postProduct(product) {
        try {
           const post = fetch(`http://localhost:3000/${product.category}`, {
             method: "POST",
            headers: {
                "Content-Type": "application/json"
               },
            body: JSON.stringify(product)
            
            })
        return await post
        } catch (error) {
            console.log(error)
        }
        
}