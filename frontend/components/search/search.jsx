import React from 'react';
import ReactDOM from 'react-dom';

import HomeMap from '../map/home_map';
import HomeIndex from '../home/home_index';

class Search extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    const {homes, fetchHomes} = this.props;
    return(
      <div class="homes-map-container">
        <div class="homes-map-index">
          <HomeIndex homes={homes} fetchHomes={fetchHomes}/>
        </div>
        <div class="homes-map-map">
          <HomeMap />
        </div>
      </div>
    )
  }
}

export default Search;