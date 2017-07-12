/* eslint-disable no-undef */
import { DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE } from './app_router.constants';
import { dataFetchFailure, dataFetchSuccess } from './app_router.actions';

describe('App router actions:', () => {
  it('dataFetchSuccess should return action of type DATA_FETCH_SUCCESS', () => {
    const result = dataFetchSuccess({ pagination: { secret: 'shh' }, payments: [1, 2, 3] });
    expect(result.type).toBe(DATA_FETCH_SUCCESS);
  });

  it('dataFetchSuccess should return passed data', () => {
    const data = { pagination: { secret: 'shh' }, payments: [1, 2, 3] };
    const result = dataFetchSuccess(data);
    expect(result.pagination).toBe(data.pagination);
    expect(result.payments).toBe(data.payments);
  });

  it('dataFetchFailure should return action of type DATA_FETCH_FAILURE', () => {
    const result = dataFetchFailure(3);
    expect(result.type).toBe(DATA_FETCH_FAILURE);
  });
});
