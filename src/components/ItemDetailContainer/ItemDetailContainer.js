import './ItemDetailContainer.css';
import data from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const example = data[0];
    
    return (
        <div>
            <ItemDetail price={example.price} description={example.description} title={example.title} imgUrl={example.imgUrl} id={example.id} key={example.id}/>
        </div>
    )
};

export default ItemDetailContainer;