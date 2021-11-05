import { connect } from 'react-redux'
import PlantCard from '../PlantCard/PlantCard';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

import './PlantList.css'

 const PlantList = ({ plants, filter, addToCart }) => {


    return ( 
        <div className='plant-list-container'>
            {plants.map(plant => <PlantCard key={plant._id} plant={plant} addToCart={addToCart} />)}
            <ScrollToTop />
        </div>
     );
}
 
export default PlantList;

// export const plantStore = connect(
//     state => ({
//         plants: state.plants
//     })
// )(Plantlist)