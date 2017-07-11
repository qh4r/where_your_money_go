import { combineReducers } from 'redux-immutable';
import { routeReducer } from './AppRouter';
import { paginationReducer } from './Pagination';

export const rootReducer = combineReducers({
  route: routeReducer,
  pagination: paginationReducer,
});
