
import PlantCard from '../PlantCard/PlantCard';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

import './PlantList.css'

 const PlantList = ({ plants, addToCart }) => {


    return ( 
        <div className='plant-list-container'>
            {plants.map(plant => <PlantCard key={plant._id} plant={plant} addToCart={addToCart} />)}
            <ScrollToTop />
        </div>
     );
}
 
export default PlantList;