import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { stringify } from 'query-string';
import { SUBMIT_SEARCH_FORM } from './search_bar.constants';

export function* processFilteringUpdate({ supplier, rating }) {
  const queryString = stringify({
    query: supplier || undefined,
    rating: rating || undefined,
    page: 0,
  });
  yield put(push(`/?${queryString}`));
}

function* filteringUpdateSaga() {
  yield takeLatest(SUBMIT_SEARCH_FORM, processFilteringUpdate);
}

export default [
  filteringUpdateSaga,
];
