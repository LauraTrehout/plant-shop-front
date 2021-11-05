import { useState } from 'react';

import ModalDetails from './../Modal/ModalDetails';

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
          <a href={'#' + plant._id} className="plant-image" onClick={()=> openModal(plant)}>
        <img src={plant.image} className="plant-image" alt="{plant.name}" /></a>
        <div className="name-price">
          <h2>{plant.name}</h2>
          <p>{plant.price} €</p>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(plant)}>
          Add to cart
        </button>
        {plantModal && (
          <ModalDetails closeModal={closeModal} plant={plant} addToCart={addToCart} />
        )}
      </div>
  );
};

export default PlantCard;
