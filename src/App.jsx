import { NavBar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hello World!"/>
    </>
  )
}

export default App
