import PlantCard from '../PlantCard/PlantCard';

import './PlantList.css'

 const PlantList = ({ plants, addToCart }) => {
    return ( 
        <div className='plant-list-container'>
            {plants.map(plant => <PlantCard key={plant._id} plant={plant} addToCart={addToCart} />)}
        </div>
     );
}
 
export default PlantList;