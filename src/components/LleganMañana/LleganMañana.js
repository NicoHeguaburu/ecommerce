import { useEffect, useState } from "react";
import React from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../itemCollection';
import ItemList from '../ItemList/ItemList';
import './LleganMañana.css'


const LleganMañana = () => {

    const [items, setItems] = useState();

    useEffect(() => {
        const getData = async() => {
            const queryRef = query(collection(dataBase, "items"), where("lleganMañana", "==", "si" ))
            const response = await getDocs(queryRef)
            const data = response.docs.map ( doc => {
                const items = {
                    ...doc.data(),
                    id: doc.id
                }
                return(items)
            })
            setItems(data);
        }
        getData()
    }, [items]);



    return(
        <div className="lleganMañana">
            {!items ? (<h3>Cargando...</h3>) : (<ItemList itemsList={items}/>)}        
        </div>
    )
}

export default LleganMañana;