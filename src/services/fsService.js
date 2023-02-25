import { getFirestore, addDoc, collection } from "firebase/firestore";

function uploadOrder(itemsInCart) {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    // Set an object with all the necesary info.
    const orderInfo = {
        date: new Date().toString(),
        total: 2500,
        contact: {
                    fullName: "John",
                    email:  "a@a.com",
                    phone:  "123"
        },
        products: itemsInCart    
    }
    
    addDoc(ordersCollection, orderInfo);
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