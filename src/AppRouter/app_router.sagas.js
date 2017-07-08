import { takeLatest, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

export function* processLocationChanged(locationData) {
  console.log('got: ', locationData);
  const state = yield select();
  console.log('state: ', state.toJS());
}

function* locationChangedSaga() {
  yield takeLatest(LOCATION_CHANGE, processLocationChanged);
}

export default [
  locationChangedSaga,
];
