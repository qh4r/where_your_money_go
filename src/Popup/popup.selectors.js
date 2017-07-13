import { createSelector } from 'reselect';
import { paymentsStatePicker } from '../PaymentsGrid';

const indexParamPicker = () => (state, props) => props.params.index;

const popupSelector = createSelector(
  paymentsStatePicker(),
  indexParamPicker(),
  (payments, index) => ({ payment: payments[index] }),
);

export {
  popupSelector,
};
