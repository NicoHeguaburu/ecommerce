import React from "react";
import './Item.css';
import {useState, useEffect } from "react";
import ItemCount from '../ItemCount/ItemCount';

const Item = () => {
    const [items, setItems] = useState([]);

    const onAdd = (cantidad) =>{
        console.log(`elegiste ${cantidad} productos`)
    }


    const item = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve([
                    {
                        id: "1",
                        title: "Nombre1",
                        description: "descripcion del producto1",
                        price: "$precio1",
                        imgUrl: "Imagen1",
                    },
                    {
                        id: "2",
                        title: "Nombre2",
                        description: "descripcion del producto2",
                        price: "$precio2",
                        imgUrl: "Imagen2",
                    },
                    {
                        id: "3",
                        title: "Nombre3",
                        description: "descripcion del producto3",
                        price: "$precio3",
                        imgUrl: "Imagen3",
                    },
                ]);
            }, 2000);
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const itemList = await item();
            setItems(itemList);
        };
        fetchData();
    }, []);
    
    return (
        <div className="container-cards"> 
        {items.map((i) => (
            <div key="i.id" className="card-item">
                <h6>{i.title}</h6>
                <img src="{i.imgUrl}" alt="" />
                <h6>{i.price}</h6>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
                
            </div>
        ))}
    </div>  
    );
};

export default Item;