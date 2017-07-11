/* eslint-disable no-undef */
import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SUBMIT_SEARCH_FORM } from './search_bar.constants';
import sagas, { processFilteringUpdate } from './search_bar.sagas';

const [filteringUpdateSaga] = sagas;

describe('filteringUpdateSaga: ', () => {
  it('should listen for SUBMIT_SEARCH_FORM actions', () => {
    const saga = filteringUpdateSaga();
    expect(saga.next().value).toEqual(takeLatest(SUBMIT_SEARCH_FORM, processFilteringUpdate));
  });
});

describe('processFilteringUpdate: ', () => {
  it('should trigger location update with passed params and set page to 0', () => {
    const saga = processFilteringUpdate({ supplier: 'asd', rating: 5 });
    expect(saga.next().value).toEqual(put(push('/?page=0&query=asd&rating=5')));
  });

  it('should not set empty params and set page to 0', () => {
    const saga = processFilteringUpdate({ supplier: 'asd' });
    expect(saga.next().value).toEqual(put(push('/?page=0&query=asd')));
  });

  it('should not add falsy and empty values to query', () => {
    const saga = processFilteringUpdate({ rating: 0 });
    expect(saga.next().value).toEqual(put(push('/?page=0')));
  });
});
