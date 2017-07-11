/* eslint-disable no-underscore-dangle,no-console */
import createSagaMiddleware from 'redux-saga';
import * as immutable from 'immutable';
import { all } from 'redux-saga/effects';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import appRouterSagas from './AppRouter/app_router.sagas';
import paginationSagas from './Pagination/pagination.sagas';
import searchBarSagas from './SearchBar/search_bar.sagas';

const sagas = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  immutable.Map(),
  composeEnhancers(applyMiddleware(
    sagas,
    routerMiddleware(browserHistory),
  )),
);

function* startAllSagas() {
  yield all([...[
    ...appRouterSagas,
    ...paginationSagas,
    ...searchBarSagas,
  ].map(saga => saga()),
  ]);
}

sagas.run(startAllSagas);

export {
  store,
};
