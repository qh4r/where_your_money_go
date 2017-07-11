/* eslint-disable no-undef */
import { takeLatest, select, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import sagas, { fetchPage, processLocationChanged, unwrapPromise } from './app_router.sagas';
import { querySelector } from './app_router.selectors';


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
          return { secret: 'shhhh' };
        },
      };
      expect(saga.next(callResult).value)
        .toEqual(call(unwrapPromise, callResult.json()));
      expect(saga.next({ secret: 'shhhh' }).value.secret).toEqual('shhhh');
    });
  });
});
