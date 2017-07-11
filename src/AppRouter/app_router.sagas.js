import { takeLatest, select, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { PAGE_SELECTION } from '../Pagination';

export function* processLocationChanged(locationData) {
  console.log('got: ', locationData);
  const state = yield select();
  console.log('state: ', state.toJS());
}

export function* processPageSelection({ activePage }) {
  yield put(push(`/?p=${activePage}`));
}

function* locationChangedSaga() {
  yield takeLatest(LOCATION_CHANGE, processLocationChanged);
}

function* pageSelectionSaga() {
  yield takeLatest(PAGE_SELECTION, processPageSelection);
}

export default [
  locationChangedSaga,
  pageSelectionSaga,
];
