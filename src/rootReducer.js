import { combineReducers } from 'redux-immutable';
import { routeReducer } from './AppRouter';
import { paginationReducer } from './Pagination';
import { paymentsReducer } from './PaymentsGrid';

export const rootReducer = combineReducers({
  route: routeReducer,
  pagination: paginationReducer,
  payments: paymentsReducer,
});
