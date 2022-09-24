import './ItemCount.css';
import React from 'react';
import {useState} from 'react';

const ItemCount = ({ stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial);

    const reducir = () => {
        setCantidad(cantidad - 1);
    }

    const aumentar = () => {
        setCantidad(cantidad + 1);
    }

    return (
        <div className="contador">
            <div>
            <button disabled={cantidad <= 1} onClick={reducir}>-</button>
            <span>{cantidad}</span>
            <button disabled={cantidad >= stock} onClick={aumentar}>+</button>
            </div>
            <div>
                <button onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;