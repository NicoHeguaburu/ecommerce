import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {productCartList, removeItem, clearCart, getPrecioTotal} = useContext(CartContext);

    return (
        <div>
            <h2 className='carritoElement'>CARRITO DE COMPRAS</h2>
            {
                productCartList.map((item) => {


                    console.log(item.title)


                    return (
                        <div className='itemEnCarrito'>
                            <img src={item.imgUrl} className='carritoElement' />
                            <p className='carritoElement'>{item.cantidad}</p>
                            <p className='carritoElement'>{item.title}</p>
                            <p className='carritoElement'>${item.price}</p>
                            <button onClick={()=>removeItem(item.id)} className='carritoElement'>Remover producto</button>
                        </div>
                    )
                })
            }
             {
                productCartList.length > 0 ?
                <div className='total'>
                    <h3 className='carritoElement'>Total: ${getPrecioTotal()}</h3>
                    <button onClick={()=>clearCart()} className='carritoElement'>Vaciar carrito</button>
                </div>
                :
                <div>
                    <p className='carritoElement'>El carrito está vacío</p>
                    <Link to='/' className='carritoElement'><button>Ver productos</button></Link>
                </div>
            }
        </div>
    )
}

export default Cart;