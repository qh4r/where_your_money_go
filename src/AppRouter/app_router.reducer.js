import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.set('locationBeforeTransitions', action.payload);
    default:
      return state;
  }
}
