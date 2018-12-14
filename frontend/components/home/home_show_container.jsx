import React from 'react';
import HomeShow from './home_show';
import {connect} from 'react-redux';
import {fetchHome} from '../../actions/home_actions'


const mapStateToProps = (state, ownProps) => {
  let home = this.state.homes[ownProps.match.params.id]
  return ({
    home: home
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchHome: (id) => dispatch(fetchHome(id))
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(HomeShow);