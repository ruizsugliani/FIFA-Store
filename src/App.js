import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from "./contexts";

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
        </Routes>
        <Footer />
      </CartProvider>      
    </BrowserRouter>
  )
}

export default App;
