/* eslint-disable no-case-declarations */
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
  previousLocation: null,
});

export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      const previousLocation = state.get('locationBeforeTransitions');
      return state.merge({
        locationBeforeTransitions: action.payload,
        previousLocation,
      });
    default:
      return state;
  }
}
