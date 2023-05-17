import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import  Nosotros from './otros/hoc/Nosotros';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';



function App() {
 
  return (
    <BrowserRouter>
         <Navbar />

        <Routes>
          <Route path='/' element={ < ItemListContainer /> } /> 
          <Route path='/productos/:categotyId' element={ < ItemListContainer /> } />
          <Route path='/detail/:itemID' element={< ItemListContainer />} /> 
          <Route path='/nosotros' element={ < Nosotros /> } /> 
          <Route path='*' element={ < Navigate to={"/"} /> } /> 
        </Routes>

    </BrowserRouter>
  );  
}

export default App;

