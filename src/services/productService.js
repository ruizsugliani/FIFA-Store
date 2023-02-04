import allProducts from "../data/allProducts";
const DELAY = 2000


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