import './ItemCount.css';

import React,{useState} from 'react';

const ItemCount = ({ stock, initial}) => {

    const [cantidad, setCantidad] = useState(initial);

    const reducir = () => {
        setCantidad(cantidad - 1);
    }

    const aumentar = () => {
        setCantidad(cantidad + 1);
    }

    const [visible, oculto] = useState("")

    const onAdd = () =>{
        console.log(`elegiste ${cantidad} productos`)
        if (cantidad > 0) {
            document.querySelector("#change-class").classList.add('ocultar');
            console.log("funciona")
        }
    }

    return (
        <div className="contador" id='change-class'>
            <h2>{stock} Disponible</h2>
            <div>
            <button disabled={cantidad <= 1} onClick={reducir}>-</button>
            <span>{cantidad}</span>
            <button disabled={cantidad >= stock} onClick={aumentar}>+</button>
            </div>
            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;