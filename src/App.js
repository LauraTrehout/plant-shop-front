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
  // const [cartItems, setCartItems] = useState([])
  const [cartItems, setCartItems] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
  const [alreadyInCart, setAlreadyInCart] = useState(false)

  const addToCart = (plant) => {
    const cart = cartItems.slice()
    cart.forEach(item => {
      if (item._id === plant._id) {
        item.count++;
      }
      setAlreadyInCart(true)
    })
      if(!alreadyInCart) {
        cart.push({...plant, count: 1})
      }
      setCartItems(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
  }

  const filterPlants = (e) => {
    if(e.target.value === '') {
      setPlants(data.plants)
    } else {
      setCategory(e.target.value);
      console.log(category);
      setPlants(data.plants.filter(plant => plant.category === e.target.value))
    }
  };

  const removeFromCart = (plant) => {
    const cart = cartItems.slice()
    setCartItems(cart.filter(item => item._id !== plant._id))
    localStorage.setItem('cart', JSON.stringify(cart.filter(item => item._id !== plant._id)))
  }

  const sortPlants = (e) => {
    setSort(e.target.value)
    setPlants(plants.sort((a, b) => (
      sort === 'Lowest' ? ((a.price < b.price) ? 1 : -1) :
      sort === 'Highest' ? ((a.price > b.price) ? 1 : -1) :
      ((a._id > b._id) ? 1 : -1))))
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
          <PlantList plants={plants} className="plant-list" addToCart={addToCart} />
        </div>
        <Cart className="cart" cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
