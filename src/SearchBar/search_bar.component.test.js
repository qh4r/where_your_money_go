/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { SearchBarComponent } from './search_bar.component';

describe('SearchBar component', () => {
  it('search input without errors', () => {
    const form = mount(<SearchBarComponent />);
    const searchBar = form.find('.search-bar');
    const input = searchBar.childAt(0);
    expect(input.exists()).toBe(true);
    expect(input.prop('placeholder')).toBe('Search suppliers');
  });

  it('select renders without errors', () => {
    const form = mount(<SearchBarComponent />);
    const searchBar = form.find('.search-bar');
    const selectWrapper = searchBar.childAt(1);
    expect(selectWrapper.exists()).toBe(true);
    expect(selectWrapper.hasClass('select-wrapper')).toBe(true);
    const select = selectWrapper.childAt(0);
    expect(select.children().length).toBe(6);
  });

  it('reset button renders without errors', () => {
    const form = mount(<SearchBarComponent />);
    const searchBar = form.find('.search-bar');
    const reset = searchBar.childAt(2);
    expect(reset.exists()).toBe(true);
  });

  it('submit button renders without errors', () => {
    const form = mount(<SearchBarComponent />);
    const searchBar = form.find('.search-bar');
    const submit = searchBar.childAt(3);
    expect(submit.exists()).toBe(true);
  });
});
