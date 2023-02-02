import './App.css';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
          {/* <Route path="/winners" element={<Category />}></Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App;
