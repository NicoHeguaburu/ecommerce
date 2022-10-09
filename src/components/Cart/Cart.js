import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css";
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../itemCollection';

const Cart = () => {
    const {productCartList, removeItem, clearCart, getTotalPrice} = useContext(CartContext);
    const [ orderId, setOrderId ] = useState("");

    const sendOrder = (event) => {
        event.preventDefault();
        const order = {
            buyer: {
                name: event.target[1].value,
                email: event.target[2].value,
                number: event.target[3].value,
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


console.log(productCartList)

    return(
        <div>
        {!orderId ?
            <div>
                <h2 className='carritoElement'>Carrito:</h2>
                <div className='cart carritoElement'>
                    {
                        productCartList.map((item) => {
                            return (
                                <div className='' key={item.id}>    
                                    <p className=''>{item.quantity}</p>
                                    <img src={item.imgUrl} className=''/>
                                    <p className=''>{item.title}</p>
                                    <p className=''>${item.price}</p>
                                    <div className=''>
                                        <button onClick={()=>removeItem(item.id)} className=''>Quitar del carrito</button>
                                    </div>
                                </div>
                            )
                        })
                    }   
                </div>
                {
                    productCartList.length > 0 ?
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Total: ${getTotalPrice()}</h3>
                            <button onClick={()=>clearCart()} className=''>Vaciar carrito</button>
                        </div>
                        <div className=''>
                            <form onSubmit={sendOrder}>
                                <fieldset> 
                                    <legend><strong>Finalizar Compra:</strong></legend>
                                    <div>
                                        <label for="nombre">Nombre:</label>
                                        <input type="text" name="name" />
                                    </div>
                                    <div>
                                        <label for="email">Email:</label>
                                        <input type="email" name="email" />
                                    </div>
                                    <div>
                                        <label for="numero">Número de telefono:</label>
                                        <input type="number" name="number" />
                                    </div>
                                    <input type="submit" value="Guardar orden" className="button" /> 
                                    <input type="reset" value="Borrar" className="button" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    :
                    <div className=''>
                        <p className=''>El carrito está vacío</p>
                        <Link to='/' className=''><button>Ver productos</button></Link>
                    </div>
                }
            </div>
            :
            <div>
                <h3>ORDEN RECIBIDA!</h3>
                <Link to='/' className=''><button>Ver productos</button></Link>
            </div>
        }
    </div>
)
}

export default Cart;