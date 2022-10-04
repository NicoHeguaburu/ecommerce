import React from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from '../../context/CartContext';
import { useContext} from 'react';
import { useState } from "react";

const ItemDetail = ({title, price, description, imgUrl, id}) => {

    const [quantity, setQuantity] = useState(0);
    const {addItem} = useContext(CartContext);

    const onAdd = (cantidad)=>{
        addItem(id, cantidad)
        setQuantity(cantidad)
    }

    return (
        quantity > 0 ? 
        <div>
            <div className="item-detail">
                <img src={imgUrl} className="imgDetail"/>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <Link to='/cart'><button>Finalizar compra</button></Link> 
        </div>
        :
        <div>
            <div className="item-detail">
                <img src={imgUrl} className="imgDetail"/>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <ItemCount stock={10} initial={1} onAdd={onAdd} className="ItemCount"/>
        </div>

    )
    }

export default ItemDetail;



            