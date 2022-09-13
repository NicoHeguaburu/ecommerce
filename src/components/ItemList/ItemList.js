import React from "react";
import Item from "../Item/Item"
import './ItemList.css';

const ItemList = ({itemsList}) => {
    return (
        <div className="item-list">
            {itemsList.map((item) => {
                return (
                    <Item 
                        id={item.id}
                        title={item.title} 
                        description={item.description} 
                        pictureUrl={item.pictureUrl} 
                        price={item.price} 
                        key={item.id} 
                    />
                )
            })}
        </div>
    )
};

export default ItemList;