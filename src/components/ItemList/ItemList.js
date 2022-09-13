import React from "react";
import Item from "../Item/Item"
import './ItemList.css';

const ItemList = ({itemsList}) => {

    console.log(itemsList)

    return(
        <div className="itemList">
            {itemsList.map((item) => {
                return (
                    <Item id={item.id} title={item.title} price={item.price} imgUrl={item.imgUrl} key={item.id} description={item.description}/>
                )
            })}
        </div>
    )
};

export default ItemList;