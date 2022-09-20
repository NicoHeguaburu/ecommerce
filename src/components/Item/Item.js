import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({title, price, description, imgUrl, id}) => {

    return (
            <div className="item">
                <img src={imgUrl} className="img"/>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <Link to={`/item/${id}`}>
                    <button>Ver</button>
                </Link>
            </div>
    );

};



export default Item;

