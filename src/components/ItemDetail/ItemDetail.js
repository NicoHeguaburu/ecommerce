import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';

const ItemDetail = ({title, price, description, imgUrl, item}) => {

    const {addItem} = useContext(CartContext);

    const [contador, setContador] = useState("-");

    const onAdd = (cantidad)=>{
        setContador(cantidad)
        addItem(item, cantidad)
    }




    return (
        <div>
            <div className="item-detail">
                <img href={imgUrl}/>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <ItemCount stock={10} initial={1} onAdd="onAdd" className="ItemCount"/>
            <p>Cantidad: {contador}</p>
        </div>
    )
    }

export default ItemDetail;