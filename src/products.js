const products = [
    // Balls
    {
        "title": "Al Rihla Official Match Ball",
        "price": "25",
        "pictureUrl": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e9f4bf4ae664b0798d4ae6201337d82_9366/Pelota_Al_Rihla_League_Blanco_H57791_01_standard.jpg",
    },    
    {
        "title": "Al Rihla Official Match Ball",
        "price": "25",
        "pictureUrl": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e9f4bf4ae664b0798d4ae6201337d82_9366/Pelota_Al_Rihla_League_Blanco_H57791_01_standard.jpg",
    },
    {
        "title": "Al Hilm Official Match Ball", 
        "price":"25", 
        "pictureUrl": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae4874fa8d2b40d483f5ae88012a2af4_9366/Pelota_Al_Hilm_Pro_Dorado_HC0437_01_standard.jpg"
    },
    {
        "title": "Brown WC 2020 Ball", 
        "price":"25",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ00073_1.jpg%3Fv%3D1666965936&w=1920&q=50" 
    },
    {
        "title": "Argentina WC 2022 Ball", 
        "price":"25",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0008_1.jpg%3Fv%3D1666879538&w=1920&q=50" 
    },
    {
        "title": "France WC 2022 Ball", 
        "price":"25",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0011_1.jpg%3Fv%3D1666880712&w=1920&q=50" 
    },
    {
        "title": "Countries WC 2022 Ball", 
        "price":"25",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ007705_1.jpg%3Fv%3D1668691861&w=1920&q=50" 
    },
    {
        "title": "Brasil WC 2022 Ball", 
        "price":"25",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0007_1.jpg%3Fv%3D1666879836&w=1920&q=50" 
    },
    {
        "title": "Portugal WC 2022 Ball", 
        "price":"25",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0023_1.jpg%3Fv%3D1666883889&w=1920&q=50" 
    },
    {
        "title": "England WC 2022 Ball", 
        "price":"25",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAEQ0009_1.jpg%3Fv%3D1666880427&w=1920&q=50" 
    },

    // WC
    {
        "title": "Brazil Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0030_1.jpg%3Fv%3D1664194407&w=1920&q=50" 
    },
    {
        "title": "USA Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0039_1.jpg%3Fv%3D1664194182&w=1920&q=50" 
    },
    {
        "title": "Morocco Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0058_1.jpg%3Fv%3D1664538486&w=1920&q=50" 
    },
    {
        "title": "France Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0034_1.jpg%3Fv%3D1664538394&w=1080&q=50" 
    },
    {
        "title": "England Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0032_1.jpg%3Fv%3D1664194121&w=1080&q=50" 
    },
    {
        "title": "Qatar Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0054_1.jpg%3Fv%3D1664538522&w=1080&q=50" 
    },
    {
        "title": "Canada Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0041_1.jpg%3Fv%3D1664538247&w=1080&q=50" 
    },
    {
        "title": "Germany Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0073_1.jpg%3Fv%3D1664538655&w=1080&q=50" 
    },
    {
        "title": "Australia Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0074_1.jpg%3Fv%3D1664538155&w=1080&q=50" 
    },
    {
        "title": "Switzerland Hat", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0049_1.jpg%3Fv%3D1664194307&w=1080&q=50" 
    },

    // Caps
    {
        "title": "Senegal Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0015_1.jpg%3Fv%3D1664190868&w=1080&q=50" 
    },
    {
        "title": "Uruguay Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0024_1.jpg%3Fv%3D1664191029&w=1080&q=50" 
    },
    {
        "title": "Japan Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0006_1.jpg%3Fv%3D1664191728&w=1080&q=50" 
    },
    {
        "title": "Spain Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0006_1.jpg%3Fv%3D1664191728&w=1080&q=50" 
    },
    {
        "title": "Netherlands Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0008_1.jpg%3Fv%3D1664191661&w=1080&q=50" 
    },
    {
        "title": "Germany Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0004_1.jpg%3Fv%3D1664190776&w=1080&q=50" 
    },
    {
        "title": "Brazil Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0022_1.jpg%3Fv%3D1664191402&w=1080&q=50" 
    },
    {
        "title": "Mexico Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0011_1.jpg%3Fv%3D1664190791&w=1920&q=50" 
    },
    {
        "title": "France Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0005_1.jpg%3Fv%3D1664190726&w=1080&q=50" 
    },
    {
        "title": "Qatar Cap", 
        "price":"17,50",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMH0025_1.jpg%3Fv%3D1664190824&w=1920&q=50" 
    },

    // Argentina
    {
        "title": "Argentina First Kit Shirt", 
        "price":"90",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMZ0005_1.jpg%3Fv%3D1665067307&w=1920&q=50" 
    },
    {
        "title": "Argentina Second Kit Shirt", 
        "price":"90",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMZ000603_1.jpg%3Fv%3D1668793126&w=1920&q=50" 
    },
    {
        "title": "Argentina Blue Warm Up", 
        "price":"90",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMT0005_1.jpg%3Fv%3D1665484760&w=1920&q=50" 
    },
    {
        "title": "Argentina White Warm Up", 
        "price":"90",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMT000603_1.jpg%3Fv%3D1671207492&w=1920&q=50" 
    },
    {
        "title": "Argentina Reversible Jacket", 
        "price":"90",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAMJ0040_1.jpg%3Fv%3D1666344063&w=1920&q=50" 
    },
    {
        "title": "Argentina Finalist Shirt", 
        "price":"90",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FAN5A52288.jpg%3Fv%3D1671534146&w=1920&q=50" 
    },
    {
        "title": "Argentina Hoodie", 
        "price":"90",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAYS0047_1.jpg%3Fv%3D1663246968&w=1920&q=50" 
    },
    {
        "title": "Argentina National Shirt", 
        "price":"90",
        "pictureUrl": "https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Fproducts%2FFIFAYT0068_1.jpg%3Fv%3D1663237984&w=1920&q=50" 
    },


]

export default products;