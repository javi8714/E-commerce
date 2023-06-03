import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import  Nosotros from './otros/hoc/Nosotros';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Error404 from './otros/Error404';
import Cart from './components/Cart/Cart';
import Contacto from './components/Contacto/Contacto';
import Checkout from './components/Checkout/Checkout';





function App() {

  return (
    <CartProvider>
            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path='/' element={ < ItemListContainer /> } /> 
                <Route path='/productos/:categoryId' element={ < ItemListContainer /> } />
                <Route path='/detail/:itemId' element={< ItemDetailContainer />} /> 
                <Route path='/nosotros' element={ < Nosotros /> } /> 
                <Route path='/cart' element={ < Cart/> } /> 
                <Route path='/checkout' element={ <Checkout/> } /> 
                <Route path='/contacto' element={ <Contacto/> } /> 
                <Route path='*' element={ <Error404 /> } /> 
                
              </Routes>
            
            </BrowserRouter>
            
     </CartProvider>
  );  
}

export default App;

