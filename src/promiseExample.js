const promiseExample = (itemData, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemData);
            reject("Something went wrong !");
        }, delay);
    })
}

export default promiseExample;