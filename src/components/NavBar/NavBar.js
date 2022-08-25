import logo from '../../logo.svg';
import './NavBar.css';

const NavBar = () => {
    return(
        <div className="navbar-container">
            <div>
                <img scr={logo} className="logo"/>
            </div>
            <div>
                <ul className="list">
                    <li><a className="list-item" href="#">Home</a></li>
                    <li><a className="list-item" href="#">About</a></li>
                    <li><a className="list-item" href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <a className="login">Login</a>
            </div>
        </div>
    );
};

export default NavBar;