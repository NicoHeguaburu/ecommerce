import React from "react";
import './Item.css';


const Item = ({title, price, description, imgUrl, id}) => {

    return (
            <div className="item">
                <img src={imgUrl}/>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <button></button>
            </div>
    );

};



export default Item;

