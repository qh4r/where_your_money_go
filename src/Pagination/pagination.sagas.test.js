/* eslint-disable no-undef */
import { takeLatest, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { selectPage } from './pagination.actions';
import { PAGE_SELECTION } from './pagination.constants';
import sagas, { processPageSelection } from './pagination.sagas';
import { querySelector } from '../AppRouter';

const [pageSelectionSaga] = sagas;

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
    expect(saga.next().value).toEqual(select(querySelector()));
    expect(saga.next({}).value).toEqual(put(push(`/?page=${3}`)));
  });

  it('should trigger location update and carry previous params', () => {
    const saga = processPageSelection({ activePage: 3 });
    expect(saga.next().value).toEqual(select(querySelector()));
    expect(saga.next({ rate: 3, page: 2 }).value).toEqual(put(push(`/?page=${3}&rate=3`)));
  });
});
