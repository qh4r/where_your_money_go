import { takeLatest, select, call, put } from 'redux-saga/effects';
import { stringify } from 'query-string';
import { LOCATION_CHANGE } from 'react-router-redux';
import { querySelector } from './app_router.selectors';
import { dataFetchSuccess, dataFetchFailure } from './app_router.actions';

export function fetchPage(query) {
  return fetch(`http://test-api.kuria.tshdev.io/?${query}`,
    {
      method: 'GET',
    });
}

export const unwrapPromise = x => Promise.resolve(x);

export function* processLocationChanged() {
  try {
    const query = yield select(querySelector());
    const queryString = stringify(query);
    const callResult = yield call(fetchPage, queryString);
    const pageData = yield call(unwrapPromise, callResult.json());
    yield put(dataFetchSuccess(pageData));
  } catch (e) {
    yield put(dataFetchFailure());
  }
}

function* locationChangedSaga() {
  yield takeLatest(LOCATION_CHANGE, processLocationChanged);
}

export default [
  locationChangedSaga,
];
