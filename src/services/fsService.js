import { getFirestore, addDoc, collection } from "firebase/firestore";

const uploadOrder = async (order, products, total) => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    // Set the date of the order.
    const date = new Date().toString()
    
    // Set an array with the products of the cart.
    const productsInfo = [];
    products.forEach( (product) => {
        productsInfo.push({
            id:         product.id,
            title:      product.title,
            quantity:   product.quantity,
            price:      product.price
        })
    })

    // Set an object with all the necesary info.
    const orderInfo = {
        contactInfo: {
            fullName:   order.fullName,
            email:      order.email,
            phone:      order.phone
        },
        productsInfo,
        total,
        date
    }

    const orderId = await addDoc(ordersCollection, orderInfo).then({id});
    return orderId;
}

export const productService = { uploadOrder };