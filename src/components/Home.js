import NavBar from "./NavBar";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";

function Home() {
    return (
        <>
            <NavBar />
            <ItemListContainer
                greeting="Welcome to our web app! We are actually delevoping a brand new FIFA Store, stay tuned! The world's dream, thirty two nations, one winner..."
                />  
            <Footer />
        </>
    )
}

export default Home;