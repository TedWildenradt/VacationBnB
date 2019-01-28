import React from 'react';
import PriceFilterContainer from './price_filter_container';
import GuestFilterContainer from './guest_filter_container';

class FilterForm extends React.Component{
  constructor(props){
    super(props)
    this.clearFilters = this.clearFilters.bind(this)
  }

  clearFilters(){
    this.props.resetFilters()
  }

  render() {

    return(
      <div className="filter-form">
        <div className="price-filter">
          <PriceFilterContainer />
        </div>
        <div className="price-filter">
          <GuestFilterContainer />
        </div>
        <div className="clear-all-filters-btn">
          <button id="clear-filters" onClick={this.clearFilters}>Clear All Filters</button>
        </div>
      </div>
    )
  }
}

export default FilterForm;