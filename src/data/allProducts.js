const allProducts = [
    {
        "id": 1,
        "title": "Al Rihla Official Match Ball",
        "description": "Official FIFA QATAR 2022 certified ball",
        "price":25,
        "pictureUrl": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e9f4bf4ae664b0798d4ae6201337d82_9366/Pelota_Al_Rihla_League_Blanco_H57791_01_standard.jpg",
    },
    {
        "id": 2,
        "title": "Al Hilm Official Match Ball", 
        "description": "Official FIFA QATAR 2022 certified ball",
        "price":25, 
        "pictureUrl": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae4874fa8d2b40d483f5ae88012a2af4_9366/Pelota_Al_Hilm_Pro_Dorado_HC0437_01_standard.jpg"
    },
    {
        "id": 3,
        "title": "Brown WC 2020 Ball", 
        "description": "Official FIFA certified ball",
        "price":25,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ00073_1.jpg%3Fv%3D1666965936&w=1920&q=50" 
    },
    {
        "id": 4,
        "title": "Argentina WC 2022 Ball", 
        "description": "Official FIFA certified ball",
        "price":25,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0008_1.jpg%3Fv%3D1666879538&w=1920&q=50" 
    },
    {
        "id": 5,
        "title": "France WC 2022 Ball", 
        "description": "Official FIFA certified ball",
        "price":25,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0011_1.jpg%3Fv%3D1666880712&w=1920&q=50" 
    },
    {
        "id": 6,
        "title": "Countries WC 2022 Ball", 
        "description": "Official FIFA certified ball",
        "price":25,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ007705_1.jpg%3Fv%3D1668691861&w=1920&q=50" 
    },
    {
        "id": 7,
        "title": "Brasil WC 2022 Ball", 
        "description": "Official FIFA certified ball",
        "price":25,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0007_1.jpg%3Fv%3D1666879836&w=1920&q=50" 
    },
    {
        "id": 8,
        "title": "Portugal WC 2022 Ball", 
        "description": "Official FIFA certified ball",
        "price":25,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0023_1.jpg%3Fv%3D1666883889&w=1920&q=50" 
    },
    {
        "id": 9,
        "title": "England WC 2022 Ball", 
        "description": "Official FIFA certified ball",
        "price":25,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0009_1.jpg%3Fv%3D1666880427&w=1920&q=50" 
    },
    {
        "id": 10,
        "title": "Argentina First Kit Shirt", 
        "description": "This text has to be replaced",
        "price":90,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMZ0005_1.jpg%3Fv%3D1665067307&w=1920&q=50" 
    },
    {
        "id": 11,
        "title": "Argentina Second Kit Shirt", 
        "description": "This text has to be replaced",
        "price":90,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMZ000603_1.jpg%3Fv%3D1668793126&w=1920&q=50" 
    },
    {
        "id": 12,
        "title": "Argentina Blue Warm Up", 
        "description": "This text has to be replaced",
        "price":90,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMT0005_1.jpg%3Fv%3D1665484760&w=1920&q=50" 
    },
    {
        "id": 13,
        "title": "Argentina White Warm Up", 
        "description": "This text has to be replaced",
        "price":90,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMT000603_1.jpg%3Fv%3D1671207492&w=1920&q=50" 
    },
    {
        "id": 14,
        "title": "Argentina Reversible Jacket", 
        "description": "This text has to be replaced",
        "price":90,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMJ0040_1.jpg%3Fv%3D1666344063&w=1920&q=50" 
    },
    {
        "id": 15,
        "title": "Argentina Finalist Shirt", 
        "description": "This text has to be replaced",
        "price":90,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FAN5A52288.jpg%3Fv%3D1671534146&w=1920&q=50" 
    },
    {
        "id": 16,
        "title": "Argentina Hoodie", 
        "description": "This text has to be replaced",
        "price":90,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAYS0047_1.jpg%3Fv%3D1663246968&w=1920&q=50" 
    },
    {
        "id": 17,
        "title": "Argentina National Shirt", 
        "description": "This text has to be replaced",
        "price":90,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAYT0068_1.jpg%3Fv%3D1663237984&w=1920&q=50" 
    },
    {
        "id": 18,
        "description": "Example text", 
        "title": "Senegal Cap", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0015_1.jpg%3Fv%3D1664190868&w=1080&q=50" 
    },
    {
        "id": 19,
        "description": "Example text", 
        "title": "Uruguay Cap", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0024_1.jpg%3Fv%3D1664191029&w=1080&q=50" 
    },
    {
        "id": 20,
        "description": "Example text", 
        "title": "Japan Cap", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0006_1.jpg%3Fv%3D1664191728&w=1080&q=50" 
    },
    {
        "id": 21,
        "description": "Example text", 
        "title": "Spain Cap", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0006_1.jpg%3Fv%3D1664191728&w=1080&q=50" 
    },
    {
        "id": 22,
        "description": "Example text", 
        "title": "Netherlands Cap", 
        "price": 17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0008_1.jpg%3Fv%3D1664191661&w=1080&q=50" 
    },
    {
        "id": 23,
        "description": "Example text", 
        "title": "Germany Cap", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0004_1.jpg%3Fv%3D1664190776&w=1080&q=50" 
    },
    {
        "id": 24,
        "description": "Example text", 
        "title": "Brazil Cap", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0022_1.jpg%3Fv%3D1664191402&w=1080&q=50" 
    },
    {
        "id": 25,
        "description": "Example text", 
        "title": "Mexico Cap", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0011_1.jpg%3Fv%3D1664190791&w=1920&q=50" 
    },
    {
        "id": 26,
        "description": "Example text", 
        "title": "France Cap", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0005_1.jpg%3Fv%3D1664190726&w=1080&q=50" 
    },
    {
        "id": 27,
        "description": "Example text", 
        "title": "Qatar Cap", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0025_1.jpg%3Fv%3D1664190824&w=1920&q=50" 
    },{
        "id": 28,
        "description": "Example text", 
        "title": "Brazil Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0030_1.jpg%3Fv%3D1664194407&w=1920&q=50" 
    },
    {
        "id": 29,
        "description": "Example text", 
        "title": "USA Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0039_1.jpg%3Fv%3D1664194182&w=1920&q=50" 
    },
    {
        "id": 30,
        "description": "Example text", 
        "title": "Morocco Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0058_1.jpg%3Fv%3D1664538486&w=1920&q=50" 
    },
    {
        "id": 31,
        "description": "Example text", 
        "title": "France Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0034_1.jpg%3Fv%3D1664538394&w=1080&q=50" 
    },
    {
        "id": 32,
        "description": "Example text", 
        "title": "England Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0032_1.jpg%3Fv%3D1664194121&w=1080&q=50" 
    },
    {
        "id": 33,
        "description": "Example text", 
        "title": "Qatar Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0054_1.jpg%3Fv%3D1664538522&w=1080&q=50" 
    },
    {
        "id": 34,
        "description": "Example text", 
        "title": "Canada Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0041_1.jpg%3Fv%3D1664538247&w=1080&q=50" 
    },
    {
        "id": 35,
        "description": "Example text", 
        "title": "Germany Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0073_1.jpg%3Fv%3D1664538655&w=1080&q=50" 
    },
    {
        "id": 37,
        "description": "Example text", 
        "title": "Australia Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0074_1.jpg%3Fv%3D1664538155&w=1080&q=50" 
    },
    {
        "id": 38,
        "description": "Example text", 
        "title": "Switzerland Hat", 
        "price":17.50,
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0049_1.jpg%3Fv%3D1664194307&w=1080&q=50" 
    }    
]


export default allProducts;