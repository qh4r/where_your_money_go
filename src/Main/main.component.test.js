/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './main.component';

describe('Main component', () => {
  it('renders without errors', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('main').text()).toBe('Start');
  });
});
