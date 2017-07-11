import { takeLatest, select, call } from 'redux-saga/effects';
import { stringify } from 'query-string';
import { LOCATION_CHANGE } from 'react-router-redux';
import { querySelector } from './app_router.selectors';

export function fetchPage(query) {
  return fetch(`http://test-api.kuria.tshdev.io/?${query}`,
    {
      method: 'GET',
    });
}

export const unwrapPromise = x => Promise.resolve(x);

export function* processLocationChanged(locationData) {
  try {
    console.log('got: ', locationData);
    const query = yield select(querySelector());
    const queryString = stringify(query);
    const callResult = yield call(fetchPage, queryString);
    const pageData = yield call(unwrapPromise, callResult.json());
    console.log('data', pageData);
  } catch (e) {
    console.error('ERROR: let\'s just hole this won\'t happen', e);
  }
}

function* locationChangedSaga() {
  yield takeLatest(LOCATION_CHANGE, processLocationChanged);
}

export default [
  locationChangedSaga,
];
