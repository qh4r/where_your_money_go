/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { SearchBarComponent } from './search_bar.component';

describe('SearchBar component', () => {
  it('search input without errors', () => {
    const form = mount(
      <SearchBarComponent
        query=""
        rating={0}
        onSubmit={() => {
        }}
      />);
    const searchBar = form.find('.search-bar');
    const input = searchBar.childAt(0);
    expect(input.exists()).toBe(true);
    expect(input.prop('placeholder')).toBe('Search suppliers');
  });

  it('select renders without errors', () => {
    const form = mount(
      <SearchBarComponent
        query=""
        rating={0}
        onSubmit={() => {
        }}
      />);
    const searchBar = form.find('.search-bar');
    const selectWrapper = searchBar.childAt(1);
    expect(selectWrapper.exists()).toBe(true);
    expect(selectWrapper.hasClass('select-wrapper')).toBe(true);
    const select = selectWrapper.childAt(0);
    expect(select.children().length).toBe(6);
  });

  it('reset button renders without errors', () => {
    const form = mount(
      <SearchBarComponent
        query=""
        rating={0}
        onSubmit={() => {
        }}
      />);
    const searchBar = form.find('.search-bar');
    const reset = searchBar.childAt(2);
    expect(reset.exists()).toBe(true);
  });

  it('submit button renders without errors', () => {
    const form = mount(
      <SearchBarComponent
        query=""
        rating={0}
        onSubmit={() => {
        }}
      />);
    const searchBar = form.find('.search-bar');
    const submit = searchBar.childAt(3);
    expect(submit.exists()).toBe(true);
  });

  it('should post se values on submit press', () => {
    const onSubmit = jest.fn();
    const form = mount(
      <SearchBarComponent
        query=""
        rating={0}
        onSubmit={onSubmit}
      />);
    const input = form.find('input[type="text"]');
    const select = form.find('select');
    input.get(0).value = 'test';
    select.get(0).value = 3;
    form.simulate('submit');
    expect(onSubmit).toBeCalledWith({
      supplier: 'test',
      rating: 3,
    });
  });

  it('should clear values on reset press', () => {
    const onSubmit = jest.fn();
    const form = mount(
      <SearchBarComponent
        onSubmit={onSubmit}
        query="123"
        rating={2}
      />);
    const input = form.find('input[type="text"]');
    const select = form.find('select');
    input.get(0).value = 'test';
    select.get(0).value = 3;
    form.simulate('reset');
    form.simulate('submit');
    expect(onSubmit).toBeCalledWith({
      supplier: '',
      rating: 0,
    });
  });

  it('should render with initial values passed', () => {
    const onSubmit = jest.fn();
    const form = mount(
      <SearchBarComponent
        onSubmit={onSubmit}
        query="test"
        rating={5}
      />);
    const input = form.find('input[type="text"]');
    const select = form.find('select');
    expect(input.get(0).value).toBe('test');
    expect(select.get(0).value).toBe((5).toString());
  });
});
