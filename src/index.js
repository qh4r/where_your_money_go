/* eslint-disable prefer-template */
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { supportsHistory } from 'history/DOMUtils';
import { Provider } from 'react-redux';
import { locationStateSelector } from './AppRouter';
import { App } from './app';
import { store } from './store';
import registerServiceWorker from './registerServiceWorker';

// 2nd is for IE9
const usedHistory = supportsHistory()
  ? browserHistory
  : createMemoryHistory('/' + document.location.href.replace(/^.*\//, ''));

const history = syncHistoryWithStore(usedHistory, store, {
  selectLocationState: locationStateSelector(),
});

const Index = () => (
  <Provider store={store}>
    <App history={history} />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
