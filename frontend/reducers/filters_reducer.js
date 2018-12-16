import {UPDATE_BOUNDS} from '../actions/filters_action';
import merge from 'lodash/merge'

const initialFilters = {
  bounds: {}
}
 const filtersReducer = initialFilters;
// const filtersReducer = (state=initialFilters, action) => {
//   // Object.freeze(state)
//   // // debugger
//   // switch (action.type) {
//   //   case UPDATE_BOUNDS:
//   //     let newState = merge({}, state)
//   //     newState[bounds] = action.bounds;
//   //     return newState;
//   //   default:
//   //     return state;
//   // }
//   return {bounds: {}};
// }

export default filtersReducer;