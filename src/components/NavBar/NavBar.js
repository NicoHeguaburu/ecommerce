import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
    <nav className="nav-container">
        <i className="menu bi bi-list"></i>
        <h3 className='name-store'>NOMBRE DE LA TIENDA</h3>
        <div className="right-container">
            <div className="triangulo"></div>
            <div className="icon-container">
            <i className="carrito bi bi-search"></i>
            <CartWidget/>
            </div>
        </div>
    </nav>
    );
};

export default NavBar;