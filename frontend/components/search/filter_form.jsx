import React from 'react';
import PriceFilter from './price_filter';

class FilterForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      price: props.price,
      num_guests: props.num_guests
    }
  }

  render() {

    return(
      <div className="filter-form">
        <div className="price-filter">
          <PriceFilter />
        </div>
        <div className="guests-filter-button">
          <button id="guests">Guests</button>
        </div>
      </div>
    )
  }
}

export default FilterForm;