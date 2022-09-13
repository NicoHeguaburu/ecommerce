import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import data from '../../asyncMock'
import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const {categoria} = useParams();
    console.log(categoria)

    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getItems.then((result) => {
            if (categoria) {
                const newCategoria = result.filter(items => items.categoria === categoria)
                setItems(newCategoria)
            } else {
                setItems(result);
            }
        })
    }, [categoria]);

    return (
        <div className="item-list-container">
            <ItemList itemsList={items}/>
        </div>
    );
}

export default ItemListContainer;



