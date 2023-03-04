import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Cart from './pages/Cart/Cart'
import ItemDetailContainer from './pages/Item/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </CartProvider>      
    </BrowserRouter>
  )
}

export default App;
