const url = "https://json-server-orcin.vercel.app";
import { db } from "../db.js"

export async function getCategories() {
    const getData = await fetch(`${url}/categories`);
    return getData.json();
}


export async function getProduct(category) {

    if (category.includes(" ")) {
        category = category.replace(" ", "-")
    }

    const getData = await fetch(`${url}/${category}`);
    return getData.json()
}

// export async function postProduct(product) {
//         try {
//            const post = fetch(`${url}/${product.category}`, {
//              method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//                },
//             body: JSON.stringify(product)

//             })
//         return await post
//         } catch (error) {
//             console.log(error)
//         }

// }


// export async function getCategories() {
//     const getData = await db
//     return getData.categories;
// }


// export async function getProduct() {

//     const getData = await db

//     return getData
// }

export async function postProduct(product) {
    try {
        const post = fetch(`${db}.${product.category}`, {
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