import './Filter.css'

const Filter = ({ count, sort, category, filterPlants, sortPlants }) => {
  return (
      <div className='filter-container'>
  <div className="filter-result">{count} plants</div>
  <div className='sort'>
       <select onChange={sortPlants}>
         <option value=''>Latest</option>
        <option value='Lowest'>Lowest</option>
        <option value='Highest'>Highest</option>
      </select>
  </div>
  <div className='filter-category'>
      <select onChange={filterPlants}>
         <option value=''>All plants</option>
         <option value='indoor'>Indoor</option>
         <option value='outdoor'>Outdoor</option>
         <option value='aromatic'>Aromatic</option>
      </select>
  </div>
  </div>
  );
};

export default Filter;
