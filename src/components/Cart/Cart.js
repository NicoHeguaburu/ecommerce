import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {productCartList, removeItem, clearCart, getTotalPrice} = useContext(CartContext);

    console.log(productCartList.length)

    const cartPrint = () => {
                    productCartList.map((item) => {
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



    return(

        productCartList.length > 0 ? 
            productCartList.map((item) => {
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
        : 
            <h3>Carrito VACIO</h3>

    )

    }

export default Cart;