import React from "react";
import './ItemDetail.css';
import {useState, useEffect } from "react";

const ItemDetail = () => {
    const [items, setItems] = useState([]);

    const getItem = () => {
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
            const itemList = await getItem();
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
                <p>{i.description}</p>
                <h6>{i.price}</h6>
            </div>
        ))}
    </div>  
    );
};

export default ItemDetail;