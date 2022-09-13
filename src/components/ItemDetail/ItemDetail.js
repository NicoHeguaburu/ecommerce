import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({title, price, description, imgUrl, id}) => {

    const onAdd = (cantidad) =>{
        console.log(`elegiste ${cantidad} productos`)
    }


    return (
        <div>
            <div className="item-detail">
                <img href={imgUrl}/>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <ItemCount stock={10} initial={1}  />
        </div>
    )
    }

export default ItemDetail;