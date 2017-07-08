import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { locationStateSelector } from './AppRouter';
import { App } from './App';
import { store } from './store';
import registerServiceWorker from './registerServiceWorker';

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: locationStateSelector(),
});

const Index = () => (
  <Provider store={store}>
    <App history={history} />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
