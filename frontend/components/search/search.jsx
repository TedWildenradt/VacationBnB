import React from 'react';
import ReactDOM from 'react-dom';

import HomeMap from '../map/home_map';
import HomeIndex from '../home/home_index';
import FilterForm from './filter_form';

class Search extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    const {homes, fetchHomes, updateFilters, minPrice, maxPrice, num_guests, resetFilters} = this.props;
    
    return(
      <div>
        <div className="homes-map-container">
          <div className="search-filters">
            <FilterForm updateFilters={updateFilters} minPrice={minPrice} maxPrice={maxPrice} num_guests={num_guests}
            resetFilters={resetFilters}
            />
          </div>
          <div className="homes-map-index">
            <HomeIndex homes={homes} fetchHomes={fetchHomes}/>
          </div>
          <div className="homes-map-map">
            <HomeMap homes={homes} updateFilters={updateFilters}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;