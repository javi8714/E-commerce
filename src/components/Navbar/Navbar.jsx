import "./Navbar.scss"
import logo from '../../assets/sho.svg'
import CartWidget from "../CartWidget/CartWidget"



export const Navbar = () => {

    return (
        <header className="header">
            <div className="header_container">
                <img src={'/public/vite.svg'} alt="LOGO" />           
                

                <nav className="navbar">
                    <a href="" className="navbar_li">Enlace 1</a>
                    <a href=""  className="navbar_li">Enlace 2</a>
                    <a href="" className="navbar_li">Enlace 3</a>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}