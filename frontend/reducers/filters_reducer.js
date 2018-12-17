import {UPDATE_FILTERS, CLEAR_FILTERS} from '../actions/filters_action';
import merge from 'lodash/merge'

const initialFilters = {
  bounds: {},
  price: [1,600],
  num_guests: [1,12]
}
//  const filtersReducer = initialFilters;
const filtersReducer = (state=initialFilters, action) => {

  Object.freeze(state)
  // debugger
  switch (action.type) {
    case UPDATE_FILTERS:
    // debugger
      let newFilter = { [action.filter]: action.value}
      return merge({}, state, newFilter);
    case CLEAR_FILTERS: 
      return initialFilters;
    default:
      return state;
  }

}

export default filtersReducer;