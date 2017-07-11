import { createSelector } from 'reselect';
import { queryPicker } from '../AppRouter/app_router.selectors';

const paginationStatePicker = () => state => state.get('pagination').toJS();

const paginationSelector = () => createSelector(
  paginationStatePicker(),
  queryPicker(),
  ({ availablePages }, { page }) =>
    ({ availablePages, activePage: +(page || 0) }),
);

export {
  paginationSelector,
};

