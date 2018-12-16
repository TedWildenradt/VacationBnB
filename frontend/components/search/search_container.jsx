import React from 'react';
import Search from './search';
import {connect} from 'react-redux';
import {fetchHomes} from '../../actions/home_actions'


const mapStateToProps = (state) => {
  let homes = Object.values(state.entities.homes).map( home => home)
  return ({
    homes: homes
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchHomes: () => dispatch(fetchHomes())
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(Search);