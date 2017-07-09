/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Main } from './main.component';

describe('Main component', () => {
  it('renders without errors', () => {
    const wrapper = mount(<Main />);
    const main = wrapper.find('.app-wrapper');
    expect(main.exists()).toBe(true);
    const div = main.find('.app-body');
    expect(div.exists()).toBe(true);
    expect(div.find('#app-header').exists()).toBe(true);
  });
});
