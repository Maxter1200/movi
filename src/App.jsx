import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { CartProvider } from './contexts/CartContext';
import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <header><NavBar /></header>
        <Routes>
          <Route path="/" element={<ItemListContainer title="Productos"/>} />
          <Route path="/category/:id" element={<ItemListContainer title="Categoría"/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={<h1 className='m-5'>Error 404 - Not Found</h1>} />
        </Routes>
        <ToastContainer 
          position="bottom-right" 
          autoClose={1500}
          limit={3}
          theme='colored'
        />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
