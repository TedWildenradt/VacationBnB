import React from 'react';
import SearchBar from './search_bar';
import {connect} from 'react-redux';
import {fetchHomes} from '../../actions/home_actions'
import {updateFilters, resetFilters} from '../../actions/filters_action';

const mapStateToProps = (state) => {
  let homes = Object.values(state.entities.homes).map( home => home)
  return ({
    homes: homes,
    query: ''
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchHomes: () => dispatch(fetchHomes()),

  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(SearchBar);