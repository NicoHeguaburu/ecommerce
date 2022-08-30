import './NavBar.css';
import Menu from '../Menu/Menu';
import Marca from '../Marca/Marca';
import Lupa from '../Lupa/Lupa';
import Carrito from '../Carrito/Carrito';

const NavBar = () => {
    return(
    <nav className="nav-container">
        <Menu/>
        <Marca/>
        <div className="right-container">
            <div className="triangulo"></div>
            <div className="icon-container">
            <Lupa/>
            <Carrito/>
            </div>
        </div>
    </nav>
    );
};

export default NavBar;