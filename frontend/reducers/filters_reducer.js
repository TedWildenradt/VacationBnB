import {UPDATE_FILTERS} from '../actions/filters_action';
import merge from 'lodash/merge'

const initialFilters = {
  bounds: {},
  price: [1,1000],
  num_guests: [1,12]
}
//  const filtersReducer = initialFilters;
const filtersReducer = (state=initialFilters, action) => {

  Object.freeze(state)
  
  switch (action.type) {
    case UPDATE_FILTERS:
      let newFilter = { [action.filter]: action.value}
      return merge({}, state, newFilter);
    default:
      return state;
  }

}

export default filtersReducer;