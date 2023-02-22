// import { getFirestore, addDoc, collection } from "firebase/firestore";
import allProducts from "../data/allProducts";
const DELAY = 2000

// const uploadProductsToFS = (allProducts) => {
//     const db = getFirestore();
//     const productsCollection = collection(db, 'products')

//     for (let product of allProducts) {
//         console.log(product);
//     }
// }

// const uploadOrderToFS = (order) => {}
// const getProductById = (id) => {}
// const getProductsByCategory = (category) => {}

const getAll = (category) => {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(category);
            reject("Something went wrong !");
        }, DELAY);

    })
    
}

const getById = (id) => {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(allProducts.find(elem => elem.id.toString() === id));
            reject("Something went wrong !");
        }, DELAY);

    })

}

export const productService = { getAll, getById };