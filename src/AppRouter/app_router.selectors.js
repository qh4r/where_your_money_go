import { createSelector } from 'reselect';

const queryPicker = () => state =>
  state.get('route').toJS().locationBeforeTransitions.query;

const searchPicker = () => state =>
  state.get('route').toJS().locationBeforeTransitions.search;

const previousRoutePicker = () => state =>
  state.get('route').toJS().previousLocation;

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

const searchSelectorInstance = createSelector(
  searchPicker(),
  search => search,
);

const searchSelector = () => searchSelectorInstance;

const queryAndPreviousSearchSelectorInstance = createSelector(
  previousRoutePicker(),
  queryPicker(),
  (oldRoute, query) => ({ search: oldRoute ? oldRoute.search : '', query }),
);

const queryAndPreviousSearchSelector = () => queryAndPreviousSearchSelectorInstance;

export {
  queryPicker,
  querySelector,
  searchSelector,
  locationStateSelector,
  queryAndPreviousSearchSelector,
};

