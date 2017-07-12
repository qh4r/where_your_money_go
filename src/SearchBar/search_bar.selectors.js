import { createSelector } from 'reselect';
import { queryPicker } from '../AppRouter';

const searchBarInitializationSelector = () => createSelector(
  queryPicker(),
  ({ query, rating }) => ({ query: query || '', rating: (+rating || 0) }),
);

export {
  searchBarInitializationSelector,
};
