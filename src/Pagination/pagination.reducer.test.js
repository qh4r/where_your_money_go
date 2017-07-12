/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { paginationReducer } from './pagination.reducer';
import { dataFetchSuccess, dataFetchFailure } from '../AppRouter';

const defaultState = fromJS({
  left: false,
  leftEnd: false,
  links: [],
  right: false,
  rightEnd: false,
});

describe('Pagination reducer: ', () => {
  it('should return same state on unrecognised action', () => {
    const resultState = paginationReducer(defaultState,
      { type: 'I_COMMAND_THEE' });
    expect(resultState === defaultState).toBe(true);
    expect(resultState.toJS()).toEqual(defaultState.toJS());
  });

  it('should update props to passed on dataFetchSuccess', () => {
    const input = {
      left: true,
      leftEnd: true,
      links: ['1', '2', '3'],
      right: true,
      rightEnd: true,
    };
    const resultState = paginationReducer(defaultState,
      dataFetchSuccess({ pagination: input, payments: [] }));
    expect(resultState === defaultState).toBe(false);
    expect(resultState.toJS()).toEqual(input);
  });

  it('should update props and keep rest if partial state passed', () => {
    const input = {
      left: true,
      leftEnd: true,
      links: ['1', '2', '3'],
      right: true,
      rightEnd: true,
    };
    const resultState = paginationReducer(fromJS(input),
      dataFetchSuccess({ pagination: { left: false, right: false }, payments: [] }));
    expect(resultState === defaultState).toBe(false);
    expect(resultState.toJS()).toEqual({ ...input, left: false, right: false });
  });

  it('should return default state on dataFetchCailure', () => {
    const input = {
      left: true,
      leftEnd: true,
      links: ['1', '2', '3'],
      right: true,
      rightEnd: true,
    };
    const resultState = paginationReducer(fromJS(input), dataFetchFailure());
    expect(resultState === defaultState).toBe(false);
    expect(resultState.toJS()).toEqual(defaultState.toJS());
  });
});
