import React from 'react';
import GuestFilter from './guest_filter';
import {connect} from 'react-redux';
import {updateFilters} from '../../actions/filters_action';

const mapStateToProps = (state) => {

  return ({
    minGuest: state.ui.filters.num_guests[0],
    maxGuest: state.ui.filters.num_guests[1],

    num_guests: state.ui.filters.num_guests
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(GuestFilter);