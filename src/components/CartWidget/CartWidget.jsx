import  { TiShoppingCart } from 'react-icons/ti'
import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {
    const { cart, totalCantidad } = useContext(CartContext)


     return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-on' : ''}`}>
            <TiShoppingCart />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget