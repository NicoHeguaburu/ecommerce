import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListItemsContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ListItemsContainer/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
