import React from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';

const ItemDetail = ({title, price, description, imgUrl, id}) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (cantidad)=>{
        addItem(id, cantidad)
        console.log(id)
        console.log(cantidad)
    }


    return (
        <div>
            <div className="item-detail">
                <img src={imgUrl} className="imgDetail"/>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <ItemCount stock={10} initial={1} onAdd={onAdd} className="ItemCount"/>
            <Link to='/cart'><button>Finalizar compra</button></Link>
        </div>
    )
    }

export default ItemDetail;