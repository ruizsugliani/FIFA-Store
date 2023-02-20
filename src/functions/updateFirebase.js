import { collection, getFirestore } from 'firebase/firestore'

const clientData = {
    FirstName: 'John',
    MiddleName: 'Barry',
    LastName: 'Allen',
    Email: 'jballen@gmail.com',
    Phone: '1123456789'
};

const items = [
    {
        "id": 1,
        "title": "Al Rihla Official Match Ball",
        "description": "Official FIFA QATAR 2022 certified ball",
        "price": "25",
        "pictureUrl": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e9f4bf4ae664b0798d4ae6201337d82_9366/Pelota_Al_Rihla_League_Blanco_H57791_01_standard.jpg",
    },
    {
        "id": 2,
        "title": "Al Hilm Official Match Ball", 
        "description": "Official FIFA QATAR 2022 certified ball",
        "price":"25", 
        "pictureUrl": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae4874fa8d2b40d483f5ae88012a2af4_9366/Pelota_Al_Hilm_Pro_Dorado_HC0437_01_standard.jpg"
    }
]


const saveOrder = (clientData, items) => {
    const db = getFirestore();
    const ordersCollection = collection(db,'orders')
    const order = {clientData, items}

    addDoc(ordersCollection, order).then( ({ id }) => setOrderId(id))
}