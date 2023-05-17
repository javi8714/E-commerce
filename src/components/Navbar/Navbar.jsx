import "./Navbar.scss"
import logo from '../../assets/sho.svg'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"



export const Navbar = () => {

    return (
        <header className="header">
            <div className="header_container">
                <img src={'/public/wine2.svg'} alt="LOGO" />           
                

                <nav className="navbar">
                    <Link to="/" className="navbar_link">Inicio</Link>
                    <Link to="/productos/tintos"  className="navbar_link">Tintos</Link>
                    <Link to="/nosotros/edicion"  className="navbar_link">Edicion</Link>
                    <Link to="/nosotros/especiales" className="navbar_link">Especiales</Link>
                    <Link to="/nosotros/comunes"  className="navbar_link">Comunes</Link>
                    <Link to="/nosotros/limitada"  className="navbar_link">Limitada</Link>
                    <Link to="/nosotros/blancos"  className="navbar_link">Blancos</Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}