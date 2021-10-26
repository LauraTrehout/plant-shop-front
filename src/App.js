import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import PlantList from "./components/PlantList/PlantList";

import data from "./data.json";

import "./App.css";

function App() {
  const [plants, setPlants] = useState(data.plants);
  const [category, setCategory] = useState();
  const [sort, setSort] = useState("");

  const filterPlants = (e) => {
    if(e.target.value === '') {
      setPlants(data.plants)
    } else {
      setCategory(e.target.value);
      console.log(category);
      setPlants(data.plants.filter(plant => plant.category === e.target.value))
    }
  };

  const sortPlants = (e) => {
    setSort(e.target.value);
    setPlants(plants.slice().sort((a, b) => (
      sort === 'Lowest' ? ((a.price < b.price) ? 1 : -1) :
      sort === 'Highest' ? ((a.price > b.price) ? 1 : -1) :
      ((a._id < b._id) ? 1 : -1)
    )))
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div>
          <Filter
            count={plants.length}
            category={category}
            sort={sort}
            filterPlants={filterPlants}
            sortPlants={sortPlants}
          />
          <PlantList plants={plants} className="plant-list" />
        </div>
        <Cart className="cart" />
      </div>
    </div>
  );
}

export default App;
