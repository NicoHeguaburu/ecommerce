import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const {getTotalProducts, productCartList} =  useContext(CartContext)
    getTotalProducts()
    return (
        <div>
            <i className="carrito bi bi-bag"></i>
            {
                    productCartList.length > 0 ?
                    <p className='cartCount'>{getTotalProducts()}</p>
                    :
                    ''
                }
        </div>
    );
};

export default CartWidget;