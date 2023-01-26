const getAll = (data) => {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(data);
            reject("Something went wrong !");
        }, 2000);

    })
    
}

export const productService = { getAll };