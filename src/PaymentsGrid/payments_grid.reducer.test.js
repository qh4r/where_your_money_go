/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { paymentsReducer } from './payments_grid.reducer';
import { dataFetchSuccess, dataFetchFailure } from '../AppRouter';

const defaultState = fromJS([]);

describe('Payments reducer: ', () => {
  it('should return same state on unrecognised action', () => {
    const resultState = paymentsReducer(defaultState,
      { type: 'I_COMMAND_THEE' });
    expect(resultState === defaultState).toBe(true);
    expect(resultState.toJS()).toEqual(defaultState.toJS());
  });

  it('should update props to passed on dataFetchSuccess', () => {
    const input = [1, 2, 3, 4];
    const newInput = [3, 6, 8, 65];
    const resultState = paymentsReducer(input,
      dataFetchSuccess({ payments: newInput, pagination: {} }));
    expect(resultState === defaultState).toBe(false);
    expect(resultState.toJS()).toEqual(newInput);
  });

  it('should return default state on dataFetchFailure', () => {
    const input = [1, 2, 3, 5];
    const resultState = paymentsReducer(fromJS(input), dataFetchFailure());
    expect(resultState.toJS()).toEqual(defaultState.toJS());
  });
});
