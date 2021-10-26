import PlantCard from '../PlantCard/PlantCard';

import './PlantList.css'

 const PlantList = ({ plants }) => {
    return ( 
        <div className='plant-list-container'>
            {plants.map(plant => <PlantCard key={plant._id} plant={plant} />)}
        </div>
     );
}
 
export default PlantList;