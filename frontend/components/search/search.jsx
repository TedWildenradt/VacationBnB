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
      <div className="homes-map-container">
        <div className="homes-map-index">
          <HomeIndex homes={homes} fetchHomes={fetchHomes}/>
        </div>
        <div className="homes-map-map">
          <HomeMap homes={homes}/>
        </div>
      </div>
    )
  }
}

export default Search;