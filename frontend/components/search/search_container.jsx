import React from 'react';
import Search from './search';
import {connect} from 'react-redux';
import {fetchHomes} from '../../actions/home_actions'
import {updateFilters, resetFilters} from '../../actions/filters_action';

const mapStateToProps = (state) => {
  let homes = Object.values(state.entities.homes).map( home => home)
  return ({
    homes: homes,
    price: state.ui.filters.price,
    num_guests: state.ui.filters.num_guests
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchHomes: () => dispatch(fetchHomes()),
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value)),
    resetFilters: () => dispatch(resetFilters())
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(Search);