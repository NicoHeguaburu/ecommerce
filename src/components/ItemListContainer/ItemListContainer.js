import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = () => {

    const onAdd = (cantidad) =>{
        console.log(`elegiste ${cantidad} productos`)
    }

    

    return (
        <div>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>
    )
};

export default ItemListContainer;