import {UPDATE_BOUNDS} from '../actions/filters_action';
import merge from 'lodash/merge'

const initialFilters = {
  bounds: {}
}
//  const filtersReducer = initialFilters;
const filtersReducer = (state=initialFilters, action) => {

  Object.freeze(state)
  
  switch (action.type) {
    case UPDATE_BOUNDS:
      return {bounds: action.bounds}
    default:
      return state;
  }

}

export default filtersReducer;