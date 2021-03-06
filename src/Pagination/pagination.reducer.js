import { fromJS } from 'immutable';
import { DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE } from '../AppRouter/app_router.constants';

const defaultState = fromJS({
  left: false,
  leftEnd: false,
  links: [],
  right: false,
  rightEnd: false,
});

const paginationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return state.merge(action.pagination);
    case DATA_FETCH_FAILURE:
      return defaultState;
    default:
      return state;
  }
};

export {
  paginationReducer,
};
