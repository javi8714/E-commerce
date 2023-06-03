import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"



const ItemDetail = ({item}) => {
    const { agregarAlcarrito, isInCart } = useContext(CartContext)

    console.log( isInCart(item.id) )


    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newIten = {
            ...item,
            cantidad 
        }

        agregarAlcarrito(newIten)
    }
    
    return (
        <div>
           <h3>{item.nombre}</h3>
           <img src={item.img} alt={item.nombre}/>
           <p>{item.descripcion}</p>
           <p>Categoria {item.category}</p>
           <p><strong>Precio: ${item.precio}</strong></p>
           <p>Subtotal: {item.precio * cantidad}</p>

            {
                isInCart(item.id)
                    ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                    : <ItemCount 
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        stock={item.stock}
                        agregar={handleAgregar}
                    />
            }  
        </div>    
    )
}


export default ItemDetail