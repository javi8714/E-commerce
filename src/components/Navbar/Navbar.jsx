import "./Navbar.scss"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { useContext } from "react"

 


export const Navbar = () => {
    return (
        <header className="header">
            <div className="header_container">
                <img src={'/public/wine2.svg'} alt="LOGO" />           
                

                <nav className="navbar">
                    <Link to="/" className="navbar_link">Inicio</Link>
                    <Link to="/productos/tintos"  className="navbar_link">Tintos</Link>
                    <Link to="/productos/blancos" className="navbar_link">Blancos</Link>
                    <Link to="/productos/rosados"  className="navbar_link">Rosados</Link>
                    <Link to="/productos/cervezas"  className="navbar_link">Cervezas</Link>
                    <Link to="/productos/espumantes"  className="navbar_link">Espumantes</Link>
                    <Link to="/productos/cavas"  className="navbar_link">Cavas</Link>
                </nav>

                
                <CartWidget />
            </div>
           
           
        </header>
    )
}