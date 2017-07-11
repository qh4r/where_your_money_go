/* eslint-disable no-undef */
import { takeLatest, select, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import sagas, { processLocationChanged, processPageSelection } from './app_router.sagas';
import { selectPage } from '../Pagination/pagination.actions';
import { PAGE_SELECTION } from '../Pagination';

const [locationChangedSaga, pageSelectionSaga] = sagas;

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

  describe('pageSelectionSaga: ', () => {
    it('should listen for PAGE_SELECTION actions', () => {
      const saga = pageSelectionSaga();
      const result = saga.next(selectPage(3));
      expect(result.value).toEqual(takeLatest(PAGE_SELECTION, processPageSelection));
    });
  });

  describe('processPageSelection: ', () => {
    it('should trigger location update with passed page param', () => {
      const saga = processPageSelection({ activePage: 3 });
      expect(saga.next().value).toEqual(put(push(`/?p=${3}`)));
    });
  });
});
