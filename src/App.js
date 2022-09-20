import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './context/CartContext.js';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
    <CartProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
            <Route path="/item/:productId" element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
