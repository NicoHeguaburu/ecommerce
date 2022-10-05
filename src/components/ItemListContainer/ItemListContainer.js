import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../itemCollection';

const ItemListContainer = () => {
    const {categoria} = useParams();

    const [items, setItems] = useState();


    useEffect(() => {
        const getData = async() => {
            if(categoria) {
                const queryRef = query(collection(dataBase, "items"), where("categoria", "==", categoria ))
                const response = await getDocs(queryRef)
                const data = response.docs.map ( doc => {
                    const items = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return(items)
                })
                setItems(data);
            }else {
                const queryRef = query(collection(dataBase, "items"))
                const response = await getDocs(queryRef)
                const data = response.docs.map ( doc => {
                    const items = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return items;
                })
                setItems(data);
            }
        }

        getData()
    }, [categoria]);




    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items);
        }, 2000);
    });



    return (
        <div className="item-list-container">
            {!items ? (<h3>Cargando...</h3>) : (<ItemList itemsList={items}/>)}
        </div>
    );
}

export default ItemListContainer;



