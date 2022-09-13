import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import data from '../../asyncMock'
import { useEffect, useState } from "react";
import React from 'react';


const ItemListContainer = () => {

    const [items] = useState([]);

    const getItems = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve (data);
        },2000)
    })

    getItems.then((items) => {
        console.log(items)
    })
    
    return (   
        <div>
            <ItemList itemsList={items}/>
        </div>
    )
};

export default ItemListContainer;