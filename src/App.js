import axios from "axios";

import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import PlantList from "./components/PlantList/PlantList";

// import data from "./data.json";

import "./App.css";
import { useEffect, useState } from "react";
import { FaIgloo } from "react-icons/fa";

function App() {

  const server = process.env.REACT_APP_SERVER

  const [plants, setPlants] = useState([]);
  // const [filtered, setFiltered] = useState([])
  const [category, setCategory] = useState();
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

 useEffect(() => {
   const getData = () => {
     axios.get(`${server}/plants`)
     .then(res => {setPlants(res.data) 
      // setFiltered(res.data)
    })
   }
   getData()
 }, [])

  const addToCart = (plant) => {
    const cart = cartItems.slice()
    let alreadyInCart = false
    cart.forEach(item => {
      if (item._id === plant._id) {
        item.count++;
        alreadyInCart = true
      }
    })
      if(!alreadyInCart) {
        cart.push({...plant, count: 1})
      }
      setCartItems(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
  }

  const removeFromCart = (plant) => {
    const cart = cartItems.slice()
    setCartItems(cart.filter(item => item._id !== plant._id))
    localStorage.setItem('cart', JSON.stringify(cart.filter(item => item._id !== plant._id)))
  }

  const filterPlants = (e) => {
    setCategory(e.target.value)
    console.log(category);
    if (category === '') {
    setPlants(plants)
    }
      axios.get(`${server}/plants/${category}`)
      .then(res => setPlants(res.data))
  };

  const sortPlants = (e) => {
    setSort(e.target.value)
    setPlants(plants.sort((a, b) => (
      sort === 'Lowest' ? ((a.price < b.price) ? 1 : -1) :
      sort === 'Highest' ? ((a.price > b.price) ? 1 : -1) :
      sort === '' ? ((a._id < b._id) ? 1 : -1) : null )))
  };

  return (
    // <Provider store={store}>
    <div className="App">
      <Header />
      <div className="main-container">
          <Filter
            count={plants.length}
            category={category}
            sort={sort}
            filterPlants={filterPlants}
            sortPlants={sortPlants}
            />
            <div className='list-and-cart'>
          <PlantList plants={plants} className="plant-list" addToCart={addToCart} />
        <Cart className="cart" cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  // </Provider>
  );
}

export default App;
