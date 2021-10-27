import { useState } from 'react';

import Modal from 'react-modal'

import "./PlantCard.css";

const PlantCard = ({ plant, addToCart }) => {
const [plantModal, setPlantModal] = useState()

const openModal = (plant) => {
    setPlantModal(plant)
}

const closeModal = () => {
    setPlantModal(null)
}

  return (
      <div className="plant-card">
          {/* <a href={'#' + plant._id} onClick={()=> openModal(plant)}> */}
        <img src={plant.image} className="plant-image" alt="{plant.name}" />
        <div className="name-price">
          <h2>{plant.name}</h2>
          <p>{plant.price} €</p>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(plant)}>
          Add to cart
        </button>
      </div>
  );
};

export default PlantCard;
