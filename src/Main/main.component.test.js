/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Main } from './main.component';
import { SearchBar } from '../SearchBar';
import { Header } from '../Header';
import { PaymentsGrid } from '../PaymentsGrid';
import { Pagination } from '../Pagination';

describe('Main component', () => {
  it('should renders without errors', () => {
    const wrapper = mount(<Main />);
    const main = wrapper.find('.app-wrapper');
    expect(main.exists()).toBe(true);
    const div = main.find('.app-body');
    expect(div.exists()).toBe(true);
  });

  it('should render app body', () => {
    const main = mount(<Main />);
    const appBody = main.find('.app-body');
    const header = appBody.childAt(0);
    expect(header.exists()).toBe(true);
    expect(header.type()).toBe(Header);
  });

  it('should render search bar', () => {
    const main = mount(<Main />);
    const appBody = main.find('.app-body');
    const searchBar = appBody.childAt(1);
    expect(searchBar.exists()).toBe(true);
    expect(searchBar.type()).toBe(SearchBar);
  });

  it('should render payments grid', () => {
    const main = mount(<Main />);
    const appBody = main.find('.app-body');
    const paymentsGrid = appBody.childAt(2);
    expect(paymentsGrid.exists()).toBe(true);
    expect(paymentsGrid.type()).toBe(PaymentsGrid);
  });

  it('should render pagination', () => {
    const main = mount(<Main />);
    const appBody = main.find('.app-body');
    const pagination = appBody.childAt(3);
    expect(pagination.exists()).toBe(true);
    expect(pagination.type()).toBe(Pagination);
  });
});
