import { getFirestore, addDoc, collection } from "firebase/firestore";

const uploadOrder = (itemsInCart, contactInfo) => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    console.log(contactInfo);

    // Set an object with all the necesary info.
    const orderInfo = {
        date: new Date().toString(),
        total: 2500,
        contactInfo,
        products: itemsInCart
    }
    
    return addDoc(ordersCollection, orderInfo);
}

const uploadProductsToFS = (allProducts) => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products')

    allProducts.forEach(
        (product) => {
            addDoc(productsCollection, product)
        }
    )
}

export const fsService = { uploadOrder, uploadProductsToFS };