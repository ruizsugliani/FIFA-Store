const getAll = (data) => {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(data);
            reject("Something went wrong !");
        }, 3000);

    })
    
}

export const productService = { getAll };