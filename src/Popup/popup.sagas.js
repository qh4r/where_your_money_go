import { put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SHOW_POPUP, HIDE_POPUP } from './popup.constants';
import { searchSelector } from '../AppRouter';

export function* processPopupOpen({ index }) {
  const selection = (+index || 0);
  const search = yield select(searchSelector());
  yield put(push(`/${selection}${search}`));
}

export function* processPopupHide() {
  const search = yield select(searchSelector());
  yield put(push(`/${search}`));
}

function* popupOpenSaga() {
  yield takeLatest(SHOW_POPUP, processPopupOpen);
}

function* popupCloseSaga() {
  yield takeLatest(HIDE_POPUP, processPopupHide);
}


export default [
  popupOpenSaga,
  popupCloseSaga,
];
