/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { paginationReducer } from './pagination.reducer';
import { updateAvailablePages } from './pagination.actions';


const defaultState = fromJS({
  availablePages: 3,
});


describe('Pagination reducer: ', () => {
  it('should return same state on unrecognised action', () => {
    const resultState = paginationReducer(defaultState, { type: 'I_COMMAND_THEE' });
    expect(resultState === defaultState).toBe(true);
    expect(resultState.toJS()).toEqual(defaultState.toJS());
  });

  it('should update avaliable pages on updateAvailablePages', () => {
    const resultState = paginationReducer(defaultState, updateAvailablePages(5));
    expect(resultState === defaultState).toBe(false);
    expect(resultState.get('availablePages')).toEqual(5);
  });
});
