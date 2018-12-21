import React from 'react';
import SearchBar from './search_bar';
import {connect} from 'react-redux';
import {fetchHomes} from '../../actions/home_actions'
import {updateFilters, resetFilters} from '../../actions/filters_action';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) => {
  let homes = Object.values(state.entities.homes).map( home => home)
  return ({
    homes: homes,
    query: state.ui.filters.query || ''
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchHomes: () => dispatch(fetchHomes()),
    updateFilters: (filter,value) => dispatch(updateFilters(filter, value))
  }) 
}

export default withRouter(connect(mapStateToProps, mapdispatchToProps)(SearchBar));