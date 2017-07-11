import { createSelector } from 'reselect';

const queryPicker = () => state =>
  state.get('route').toJS().locationBeforeTransitions.query;

const locationStateSelector = () => {
  let prevState;
  let prevStateJS;

  return (state) => {
    const routingState = state.get('route');

    if (!routingState.equals(prevState)) {
      prevState = routingState;
      prevStateJS = routingState.toJS();
    }

    return prevStateJS;
  };
};

// this makes it possible to test sagas
// since jest tests check for reference too.
const querySelectorInstance = createSelector(
  queryPicker(),
  query => query,
);

const querySelector = () => querySelectorInstance;

export {
  queryPicker,
  querySelector,
  locationStateSelector,
};

