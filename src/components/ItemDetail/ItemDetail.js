import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({title, price, description, imgUrl, id}) => {

    return (
        <div>
            <div className="item-detail">
                <img href={imgUrl}/>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <ItemCount stock={10} initial={1} className="ItemCount"/>
        </div>
    )
    }

export default ItemDetail;