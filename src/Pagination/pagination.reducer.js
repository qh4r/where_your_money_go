import { fromJS } from 'immutable';
import { PAGE_LIMIT_UPDATE } from './pagination.constants';

const defaultState = fromJS({
  availablePages: 3,
});

const paginationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PAGE_LIMIT_UPDATE:
      return state.set('availablePages', action.availablePages);
    default:
      return state;
  }
};

export {
  paginationReducer,
};
