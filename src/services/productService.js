import allProducts from "../data/allProducts";

const getAll = (allProducts) => {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(allProducts);
            reject("Something went wrong !");
        }, 500);

    })
    
}

const getById = (id) => {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(allProducts.find(elem => elem.id.toString() === id));
            reject("Something went wrong !");
        }, 500);

    })

}

export const productService = { getAll, getById };