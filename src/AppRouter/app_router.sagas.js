import { takeLatest, select, call, put } from 'redux-saga/effects';
import { stringify } from 'query-string';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { queryAndPreviousSearchSelector } from './app_router.selectors';
import { dataFetchSuccess, dataFetchFailure } from './app_router.actions';

export function fetchPage(query) {
  return axios.get(`http://test-api.kuria.tshdev.io/?${query}`);
}

export function* processLocationChanged() {
  try {
    const { query, search } = yield select(queryAndPreviousSearchSelector());
    const queryString = stringify(query);
    if (!search || (search.toLowerCase() !== `?${queryString.toLowerCase()}`)) {
      const callResult = yield call(fetchPage, queryString);
      yield put(dataFetchSuccess(callResult.data));
    }
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
