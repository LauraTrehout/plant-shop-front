import './PlantCard.css'

const PlantCard = ({ plant }) => {
    return ( 
        <div className='plant-card'>
           <img src={plant.image} className='plant-image' alt='{plant.name}' />
           <div className='name-price'>
           <h2>{plant.name}</h2>
           <p>{plant.price} €</p>
           </div>
           <button className='add-to-cart'>
               Add to cart
           </button>
        
        </div>
     );
}
 
export default PlantCard;