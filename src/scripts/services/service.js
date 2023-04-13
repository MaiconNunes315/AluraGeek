


export async function productService() {
    const getData = await fetch('http://localhost:3000/produtos');
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