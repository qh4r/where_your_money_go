/* eslint-disable no-undef,no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { Main } from './main.component';
import { SearchBar } from '../SearchBar';
import { Header } from '../Header';
import { PaymentsGrid } from '../PaymentsGrid';
import { Pagination } from '../Pagination';
import { rootReducer } from '../rootReducer';
import { locationStateSelector } from '../AppRouter';

const memoryHistory = createMemoryHistory();

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(memoryHistory)));


const history = syncHistoryWithStore(memoryHistory, store, {
  selectLocationState: locationStateSelector(),
});

describe('Main component', () => {
  it('should renders without errors', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const main = wrapper.find('.app-wrapper');
    expect(main.exists()).toBe(true);
    const div = main.find('.app-body');
    expect(div.exists()).toBe(true);
  });

  it('should render app body', () => {
    const main = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const appBody = main.find('.app-body');
    const header = appBody.childAt(0);
    expect(header.exists()).toBe(true);
    expect(header.type()).toBe(Header);
  });

  it('should render search bar', () => {
    const main = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const appBody = main.find('.app-body');
    const searchBar = appBody.childAt(1);
    expect(searchBar.exists()).toBe(true);
    expect(searchBar.type()).toBe(SearchBar);
  });

  it('should render payments grid', () => {
    const main = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const appBody = main.find('.app-body');
    const paymentsGrid = appBody.childAt(2);
    expect(paymentsGrid.exists()).toBe(true);
    expect(paymentsGrid.type()).toBe(PaymentsGrid);
  });

  it('should render pagination', () => {
    const main = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const appBody = main.find('.app-body');
    const pagination = appBody.childAt(3);
    expect(pagination.exists()).toBe(true);
    expect(pagination.type()).toBe(Pagination);
  });
});
