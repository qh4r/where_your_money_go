/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { PoundRatingComponent, Rating } from './pound_rating.component';

describe('PoundRating component', () => {
  it('should always render 5 children', () => {
    const wrapper = mount(<PoundRatingComponent rating={3} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.children().length).toBe(5);
    wrapper.setProps({ rating: 0 });
    expect(wrapper.children().length).toBe(5);
    wrapper.setProps({ rating: 5 });
    expect(wrapper.children().length).toBe(5);
  });

  it('should always render 5 children', () => {
    const wrapper = mount(<PoundRatingComponent rating={3} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.active').length).toBe(3);
    wrapper.setProps({ rating: 0 });
    expect(wrapper.find('.active').length).toBe(0);
    wrapper.setProps({ rating: 5 });
    expect(wrapper.find('.active').length).toBe(5);
  });
});

describe('Rating component', () => {
  it('should has active class if given right arguments', () => {
    const rating = mount(<Rating isActive={false} />);
    expect(rating.hasClass('active')).toBe(false);
    rating.setProps({ isActive: true });
    expect(rating.hasClass('active')).toBe(true);
  });
});
