import './ListItems.css';

import React,{useState} from 'react';

const ListItems = () => {
    const [cantidad, setCantidad] = useState(1);

    const stock = 10;

    const reducir = () => {
        setCantidad(cantidad - 1);
    }

    const aumentar = () => {
        setCantidad(cantidad + 1);
    }

    return (
        <div className="contador">
            <h2>{stock} Disponible</h2>
            <div>
            <button disabled={cantidad <= 1} onClick={reducir}>-</button>
            <span>{cantidad}</span>
            <button disabled={cantidad >= stock} onClick={aumentar}>+</button>
            </div>
            <div>
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ListItems;