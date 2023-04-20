import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";



function App() {
 
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"Hola a todos!"}/>

      <button className="btn btn-primary">Click me</button>
    </div>  
  );  
}

export default App;

