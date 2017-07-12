/* eslint-disable no-undef */
import { takeLatest, select, call, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import sagas, { fetchPage, processLocationChanged, unwrapPromise } from './app_router.sagas';
import { querySelector } from './app_router.selectors';
import { dataFetchSuccess, dataFetchFailure } from './app_router.actions';


const [locationChangedSaga] = sagas;

describe('AppRouter sagas: ', () => {
  describe('location change saga: ', () => {
    it('should take right actions', () => {
      const saga = locationChangedSaga();
      expect(saga.next().value).toEqual(takeLatest(LOCATION_CHANGE, processLocationChanged));
    });
  });

  describe('processLocationChange: ', () => {
    it('should cause effects in right order', () => {
      const saga = processLocationChanged();
      expect(saga.next().value).toEqual(select(querySelector()));
      expect(saga.next({ page: 3 }).value)
        .toEqual(call(fetchPage, 'page=3'));
      const callResult = {
        json() {
          return { pagination: {}, payments: [1, 2, 3] };
        },
      };
      expect(saga.next(callResult).value)
        .toEqual(call(unwrapPromise, callResult.json()));
      expect(saga.next({ pagination: {}, payments: [1, 2, 3] }).value)
        .toEqual(put(dataFetchSuccess({ pagination: {}, payments: [1, 2, 3] })));
    });

    it('should throw on api call fail', () => {
      const saga = processLocationChanged();
      expect(saga.next().value).toEqual(select(querySelector()));
      expect(saga.next({ page: 3 }).value)
        .toEqual(call(fetchPage, 'page=3'));
      expect(saga.throw(new Error('shell not pass')).value)
        .toEqual(put(dataFetchFailure()));
    });
  });
});
