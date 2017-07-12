import { createSelector } from 'reselect';

const paymentsStatePicker = () => state => state.get('payments').toJS();

const paymentsSelector = () => createSelector(
  paymentsStatePicker(),
  payments => ({ payments }),
);

export {
  paymentsSelector,
};
