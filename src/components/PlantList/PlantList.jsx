import PlantCard from '../PlantCard/PlantCard';

import './PlantList.css'

 const PlantList = ({ plants }) => {
    return ( 
        <div className='plant-list-container'>
            {plants[0].map(plant => <PlantCard plant={plant} />)}
        </div>
     );
}
 
export default PlantList;