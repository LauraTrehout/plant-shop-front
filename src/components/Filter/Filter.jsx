import './Filter.css'

const Filter = ({ count, sort, filterPlants, sortPlants }) => {
  return (
      <div className='filter-container'>
  <div className="filter-result">{count} plants</div>
  <div className='sort'>
       <select value={sort} onChange={sortPlants}>
         <option value=''>Latest</option>
        <option value='Lowest'>Lowest</option>
        <option value='Highest'>Highest</option>
      </select>
  </div>
  <div className='filter-category'>
      <select value={category} onChange={filterPlants}>
         <option value=''>All plants</option>
         <option value='Indoor'>Indoor</option>
         <option value='Outdoor'>Outdoor</option>
         <option value='Aromatic'>Aromatic</option>
      </select>
  </div>
  </div>
  );
};

export default Filter;
