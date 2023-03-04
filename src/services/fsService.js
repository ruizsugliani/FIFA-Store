import { getFirestore, doc, addDoc, getDoc, getDocs, collection, query, where, serverTimestamp } from "firebase/firestore";
import allProducts from "../data/allProducts";

const uploadOrder = (itemsInCart, contactInfo, totalPrice) => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    // Set an object with all the necesary info.
    const orderInfo = {
        date: serverTimestamp(),
        total: totalPrice,
        contactInfo,
        products: itemsInCart
    }
    
    return addDoc(ordersCollection, orderInfo);
}

const uploadProducts = () => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products')

    allProducts.forEach(
        (product) => {
            addDoc(productsCollection, product)
        }
    )
}

const getProduct = async (productId) => {
    const db = getFirestore();
    const productDoc = doc(db, 'products', productId);
    const snapshot = await getDoc(productDoc);
    return { id: snapshot.id, ...snapshot.data() };
}

const getProducts = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(
        (doc) => ({id: doc.id, ...doc.data()})
    );
}

const getProductsByCategory = async (categoryId) => {
    const db = getFirestore();

    const q = query(
        collection(db, 'products'),
        where("category", "==", categoryId)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(
        (doc) => ({id: doc.id, ...doc.data()})
    );
}

export const fsService = { uploadOrder, uploadProducts, getProducts, getProduct, getProductsByCategory };