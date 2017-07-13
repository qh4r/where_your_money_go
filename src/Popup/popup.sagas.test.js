/* eslint-disable no-undef */
import { takeLatest, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { hidePopup, showPopup } from './popup.actions';
import { HIDE_POPUP, SHOW_POPUP } from './popup.constants';
import sagas, { processPopupHide, processPopupOpen } from './popup.sagas';
import { searchSelector } from '../AppRouter';

const [popupOpenSaga, popupCloseSaga] = sagas;
describe('Popup sagas', () => {
  describe('popupOpenSaga: ', () => {
    it('should listen for SHOW_POPUP actions', () => {
      const saga = popupOpenSaga();
      const result = saga.next(showPopup(3));
      expect(result.value).toEqual(takeLatest(SHOW_POPUP, processPopupOpen));
    });
  });

  describe('processPopupOpen: ', () => {
    it('should trigger location update with passed index', () => {
      const saga = processPopupOpen({ index: 3 });
      expect(saga.next().value).toEqual(select(searchSelector()));
      expect(saga.next('').value).toEqual(put(push('/3')));
    });

    it('should keep old search on location update', () => {
      const saga = processPopupOpen({ index: 3 });
      expect(saga.next().value).toEqual(select(searchSelector()));
      expect(saga.next('?page=3').value).toEqual(put(push('/3?page=3')));
    });
  });

  describe('popupCloseSaga: ', () => {
    it('should listen for HIDE_POPUP actions', () => {
      const saga = popupCloseSaga();
      const result = saga.next(hidePopup());
      expect(result.value).toEqual(takeLatest(HIDE_POPUP, processPopupHide));
    });
  });

  describe('processPopupHide: ', () => {
    it('should trigger location update with passed index', () => {
      const saga = processPopupHide();
      expect(saga.next().value).toEqual(select(searchSelector()));
      expect(saga.next('').value).toEqual(put(push('/')));
    });

    it('should keep old search on location update', () => {
      const saga = processPopupHide();
      expect(saga.next().value).toEqual(select(searchSelector()));
      expect(saga.next('?page=3').value).toEqual(put(push('/?page=3')));
    });
  });
});
