import React from 'react';
import HomeShow from './home_show';
import {connect} from 'react-redux';
import {fetchHome} from '../../actions/home_actions'


const mapStateToProps = (state, ownProps) => {
  // debugger
  // let home = state.entities.homes[ownProps.match.params.id]
  // debugger
  return ({
    home: state.entities.homes[ownProps.match.params.id] || {}
  })
} 

const mapDispatchToProps = dispatch => {

  return ({
    fetchHome: (id) => dispatch(fetchHome(id))
  }) 
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeShow);