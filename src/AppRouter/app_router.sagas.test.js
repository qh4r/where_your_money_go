/* eslint-disable no-undef */
import { takeLatest, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import sagas, { processLocationChanged } from './app_router.sagas';

const [locationChangedSaga] = sagas;

describe('AppRouter sagas: ', () => {
  describe('location change saga: ', () => {
    it('should take right actions', () => {
      const saga = locationChangedSaga();
      expect(saga.next().value).toEqual(takeLatest(LOCATION_CHANGE, processLocationChanged));
    });
  });

  describe('processLocationChange: ', () => {
    it('should ask for current location', () => {
      const saga = processLocationChanged();
      expect(saga.next().value).toEqual(select());
    });
  });
});
