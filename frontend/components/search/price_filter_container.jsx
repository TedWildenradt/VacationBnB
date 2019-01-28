import React from 'react';
import PriceFilter from './price_filter';
import {connect} from 'react-redux';
import {updateFilters} from '../../actions/filters_action';

const mapStateToProps = (state) => {

  return ({
    minPrice: state.ui.filters.price[0],
    maxPrice: state.ui.filters.price[1],
    num_guests: state.ui.filters.num_guests
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(PriceFilter);