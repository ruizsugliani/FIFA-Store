import allProducts from "../data/allProducts";

const getAll = (category) => {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(category);
            reject("Something went wrong !");
        }, 1500);

    })
    
}

const getById = (id) => {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(allProducts.find(elem => elem.id.toString() === id));
            reject("Something went wrong !");
        }, 1500);

    })

}

export const productService = { getAll, getById };