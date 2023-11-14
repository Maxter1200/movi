import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer title="Productos"/>} />
        <Route path="/category/:id" element={<ItemListContainer title="Categoria"/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="*" element={<h1 className='m-5'>Error 404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
