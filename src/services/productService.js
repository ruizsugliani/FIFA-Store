const getAll = (data) => {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(data);
            reject("Something went wrong !");
        }, 500);

    })
    
}

const getById = (data, id) => {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(data.find(elem => elem.id.toString() === id));
            reject("Something went wrong !");
        }, 500);

    })

}

export const productService = { getAll, getById };