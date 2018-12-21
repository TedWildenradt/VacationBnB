import {UPDATE_FILTERS, CLEAR_FILTERS} from '../actions/filters_action';
import merge from 'lodash/merge'

const initialFilters = {
  bounds: {},
  price: [1,600],
  num_guests: [1,12],
  query: ''
}

const filtersReducer = (state=initialFilters, action) => {

  Object.freeze(state)
  switch (action.type) {
    case UPDATE_FILTERS:
      let newState = merge({}, state)
      let newFilter = { [action.filter]: action.value}
            // debugger
      if (action.filter === 'query'){
        newState['bounds'] = {}
      }
      return merge({}, newState, newFilter);
    case CLEAR_FILTERS: 
      return initialFilters;
    default:
      return state;
  }

}

export default filtersReducer;