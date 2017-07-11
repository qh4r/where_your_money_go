import { put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { stringify } from 'query-string';
import { PAGE_SELECTION } from './pagination.constants';
import { querySelector } from '../AppRouter';

export function* processPageSelection({ activePage }) {
  const query = yield select(querySelector());
  console.log(query);
  const queryString = stringify({
    ...query,
    page: activePage,
  });
  yield put(push(`/?${queryString}`));
}

function* pageSelectionSaga() {
  yield takeLatest(PAGE_SELECTION, processPageSelection);
}

export default [
  pageSelectionSaga,
];
