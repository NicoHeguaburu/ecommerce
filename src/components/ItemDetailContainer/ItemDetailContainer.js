import './ItemDetailContainer.css';
import { dataBase } from '../../itemCollection';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const {productId} = useParams();
    const [items, setItems] = useState();



    useEffect(() => {
        const getData = async() => {
            const query = doc(dataBase, "items", productId)
            const response = await getDoc(query)
            const data = {
                ...response.data(),
                id: response.id
            }
        }
        getData()
    }, [items]);

    return (
        <div className='detail'>
            {!items ? (<h3 className='cargando'>Cargando...</h3>) : (
            <ItemDetail
            title={items.title}
            description={items.description}
            imgUrl={items.imgUrl}
            price={items.price}
            id={items.id}
        />
            )}            
        </div>
    );

}

export default ItemDetailContainer;
