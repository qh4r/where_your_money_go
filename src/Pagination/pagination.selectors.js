import { createSelector } from 'reselect';
import { queryPicker } from '../AppRouter/app_router.selectors';

const paginationStatePicker = () => state => state.get('pagination').toJS();

const paginationSelector = () => createSelector(
  paginationStatePicker(),
  queryPicker(),
  ({ availablePages }, { p }) =>
    ({ availablePages, activePage: +(p || 0) }),
);

export {
  paginationSelector,
};

