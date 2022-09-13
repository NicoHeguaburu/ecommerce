import React from "react";
import './Item.css';


const Item = ({title, price, description, imgUrl, id}) => {

    return (
            <div>
                <img href={imgUrl}/>
                <h2>{title}dada</h2>
                <p>{price}add</p>
                <p>{description}adad</p>
            </div>
    )

    }



export default Item;

