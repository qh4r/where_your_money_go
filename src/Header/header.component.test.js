/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { HeaderComponent } from './header.component';

describe('Header component', () => {
  it('header text renders without errors', () => {
    const wrapper = mount(<HeaderComponent />);
    const header = wrapper.find('header');
    const h1 = header.childAt(0);
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe('Where your money goes');
    expect(h1.hasClass('big-blue-text')).toBe(true);

  });

  it('subheader text renders without errors', () => {
    const wrapper = mount(<HeaderComponent />);
    const header = wrapper.find('header');
    const h4 = header.childAt(1);
    expect(h4.exists()).toBe(true);
    expect(h4.text()).toBe('Payments made by Chichester District Council to individual suppliers with a value over £500 made within October.');
    expect(h4.hasClass('smaller-but-by-no-means-tiny-black-text')).toBe(true);
  });

  it('separator renders withour erros', () => {
    const wrapper = mount(<HeaderComponent />);
    const header = wrapper.find('header');
    const hr = header.childAt(2);
    expect(hr.exists()).toBe(true);
    expect(hr.hasClass('header-separator')).toBe(true);
  });
});
