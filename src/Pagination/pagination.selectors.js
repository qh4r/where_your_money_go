import { createSelector } from 'reselect';
import { queryPicker } from '../AppRouter/app_router.selectors';

const paginationStatePicker = () => state => state.get('pagination').toJS();

const paginationSelector = () => createSelector(
  paginationStatePicker(),
  queryPicker(),
  ({ left, right, leftEnd, rightEnd, links }, { page }) =>
    ({
      left,
      right,
      leftEnd,
      rightEnd,
      pageNumbers: Object.keys(links).map(key => +key),
      activePage: +(page || 0),
    }),
);

export {
  paginationSelector,
};

