import React from 'react';
import PriceFilterContainer from './price_filter_container';

class FilterForm extends React.Component{

  constructor(props){
    super(props)
    // this.state = {
    //   price: props.price,
    //   num_guests: props.num_guests
    // }
    this.clearFilters = this.clearFilters.bind(this)
  }
  clearFilters(){
    this.props.resetFilters()
  }

  render() {
    console.log(this.props)
    return(
      <div className="filter-form">
        <div className="price-filter">
          <PriceFilterContainer />
        </div>
        <div className="guests-filter-button">
          <button id="guests">Guests</button>
        </div>
        <button onClick={this.clearFilters}>Clear Filters</button>
      </div>
    )
  }
}

export default FilterForm;