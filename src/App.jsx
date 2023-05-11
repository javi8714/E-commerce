import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import  Catalogo1  from './otros/Catalogo1';
import { BrowserRouter } from 'react-router-dom';


function App() {
 
  return (
    <BrowserRouter>
         <Navbar />

         <Catalogo1 />
         <ItemListContainer />
    </BrowserRouter>
  );  
}

export default App;

