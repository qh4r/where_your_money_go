import { fromJS } from 'immutable';
import { DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE } from '../AppRouter/app_router.constants';

const defaultState = fromJS([]);

const paymentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return fromJS(action.payments);
    case DATA_FETCH_FAILURE:
      return defaultState;
    default:
      return state;
  }
};

export {
  paymentsReducer,
};
