import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css";
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../itemCollection';

const Cart = () => {
    const {productCartList, removeItem, clearCart, getTotalPrice} = useContext(CartContext);

    console.log(productCartList.length)


    const sendOrder = (event) => {
        event.preventDefault();
        const order = {
            client: {
                name: event.target[1].value,
                surname: event.target[2].value,
                email: event.target[3].value,
                number: event.target[4].value,
            },
            items: productCartList,
            total: getTotalPrice(),
            date: new Date()
        }

        const queryRef = collection (dataBase, "orders");
        addDoc(queryRef, order).then(response => {
            setOrderId(response.id);
        });
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