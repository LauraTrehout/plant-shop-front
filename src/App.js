import { useState } from 'react';

import Header from './components/Header/Header';
import PlantList from './components/PlantList/PlantList';

import data from './data.json'

import './App.css';
import Cart from './components/Cart/Cart';

function App() {
const [plants, setPlants] = useState([data.plants])

  return (
    <div className="App">
      <Header />
      <div className='main-container'>
      <PlantList plants={plants} className='plant-list'/>
      <Cart className='cart' />
      </div>
    </div>
  );
}

export default App;
