import { DATA_FETCH_FAILURE, DATA_FETCH_SUCCESS } from './app_router.constants';

export function dataFetchSuccess({ pagination, payments }) {
  return {
    type: DATA_FETCH_SUCCESS,
    pagination,
    payments,
  };
}

export function dataFetchFailure() {
  return {
    type: DATA_FETCH_FAILURE,
  };
}
