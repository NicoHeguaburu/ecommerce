import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../1.png'

const NavBar = () => {
    return(
        <nav>
            <div className="nav-top-container">
                <div className="social-container">
                    <i className="bi bi-facebook social"></i>
                    <i className="bi bi-whatsapp social"></i>
                    <i className="bi bi-twitter social"></i>
                    <i className="bi bi-instagram social"></i>
                    <h6 className="nav-top-title social">ENVIO GRATIS A PARTIR DE -- <span className="orange">U$$ 100</span></h6>
                </div>
                <div className="button-container">
                    <i class="bi bi-search button"></i>
                    <i class="bi bi-list button"></i>
                </div> 
            </div>
            <div className="nav-bottom-container">
                <div className="logo-container">
                    <img src={logo} className="logo"/>
                </div>
                <div className="navegation-container">
                    <div>
                        <div className="navegation-grup-top">
                            <a href="">link1</a>
                            <a href="">link2</a>
                            <a href="">link3</a>
                            
                        </div>
                        <div className="navegation-grup-bottom">
                            <a href="">link1</a>
                            <a href="">link2</a>
                            <a href="">link3</a>
                            <a href="">link4</a>
                        </div> 
                    </div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;




{/* <i className="menu bi bi-list"></i>
        <h3 className='name-store'>NOMBRE DE LA TIENDA</h3>
        <div className="right-container">
            <div className="triangulo"></div>
            <div className="icon-container">
            <i className="carrito bi bi-search"></i>
            <CartWidget/>
            </div>
        </div> */}