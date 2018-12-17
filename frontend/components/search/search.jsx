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

    const {homes, fetchHomes, updateFilters, price, num_guests} = this.props;
    
    return(
      <div className="homes-map-container">
        <div className="search-filters">
          {/* <FilterForm updateFilters={updateFilters} price={price} num_guests={num_guests}/> */}
        </div>
        <div className="homes-map-index">
          <HomeIndex homes={homes} fetchHomes={fetchHomes}/>
        </div>
        <div className="homes-map-map">
          <HomeMap homes={homes} updateFilters={updateFilters}/>
        </div>
      </div>
    )
  }
}

export default Search;