import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { IoTrashOutline } from "react-icons/io5"
import { Link } from "react-router-dom"



const Cart  = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)
    
    if (cart.length === 0) {
        return (
            <div className="container my-4">
                    <h2>Tu carrito se vacio</h2>
                    <hr/>
                    <p>Volve a comprar algo...</p>
                    <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        )
    }


    return (
        <div className="container my-4">
          
              <h2>Tu compra</h2>
              <hr/>
          
                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <img src={item.img}  />
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Subtotal: {item.cantidad*item.precio}</p>
                            <button onClick={() => removeItem(item.id)} className="btn btn-danger"><IoTrashOutline/></button>
                            <hr/>
                        </div>
                    ))          
                }


                <div>
                    <h3>Total De La Compra: ${totalCompra()}</h3>
                    <hr/>
                    <button onClick={emptyCart} className="btn btn-danger">Vaciar el carrito</button>
                    <Link to="/checkout" className="btn btn-success">Terminar mi compra</Link>
                </div>
        </div>
    )
}

export default Cart 