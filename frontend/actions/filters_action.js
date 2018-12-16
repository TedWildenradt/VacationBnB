import {fetchHomes} from '../actions/home_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (bounds) =({
  type: UPDATE_BOUNDS,
  bounds
})

