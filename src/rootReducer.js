import { combineReducers } from 'redux-immutable';
import { routeReducer } from './AppRouter';

export const rootReducer = combineReducers({
  route: routeReducer,
});
