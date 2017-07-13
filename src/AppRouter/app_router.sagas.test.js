/* eslint-disable no-undef */
import { takeLatest, select, call, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import sagas, { fetchPage, processLocationChanged } from './app_router.sagas';
import { queryAndPreviousSearchSelector } from './app_router.selectors';
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
      expect(saga.next().value).toEqual(select(queryAndPreviousSearchSelector()));
      expect(saga.next({ query: { page: 3 }, search: '' }).value)
        .toEqual(call(fetchPage, 'page=3'));
      const callResult = {
        data: {
          pagination: {},
          payments: [1, 2, 3],
        },
      };
      expect(saga.next(callResult).value)
        .toEqual(put(dataFetchSuccess({ pagination: {}, payments: [1, 2, 3] })));
    });

    it('should throw on api call fail', () => {
      const saga = processLocationChanged();
      expect(saga.next().value).toEqual(select(queryAndPreviousSearchSelector()));
      expect(saga.next({ query: { page: 3 }, search: '' }).value)
        .toEqual(call(fetchPage, 'page=3'));
      expect(saga.throw(new Error('shell not pass')).value)
        .toEqual(put(dataFetchFailure()));
    });

    it('should end if current query matches requested', () => {
      const saga = processLocationChanged();
      expect(saga.next().value).toEqual(select(queryAndPreviousSearchSelector()));
      expect(saga.next({ query: { page: 3 }, search: '?page=3' }).done)
        .toEqual(true);
    });
  });
});
