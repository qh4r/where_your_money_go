/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { PopupComponent } from './popup.component';
import { PoundRating } from '../PoundRating/index';

const examplePayment = {
  payment_amount: '3694.60',
  payment_cost_rating: '3',
  payment_ref: '499778',
  payment_supplier: 'ACCESS MOBILITY',
};

describe('Popup component', () => {
  it(' renders content when payment non null errors', () => {
    const wrapper = mount(
      <PopupComponent
        hidePopup={() => {
        }}
        payment={null}
      />);
    const content = wrapper.find('.message-box');
    expect(content.exists()).toBe(false);
    wrapper.setProps({ payment: examplePayment });
    const content2 = wrapper.find('.message-box');
    expect(content2.exists()).toBe(true);
  });

  it('should display given props', () => {
    const wrapper = mount(
      <PopupComponent
        hidePopup={() => {
        }}
        payment={examplePayment}
      />);
    const box = wrapper.find('.message-box');
    expect(box.childAt(1).text()).toBe(examplePayment.payment_supplier);
    expect(box.childAt(2).type()).toBe(PoundRating);
    expect(box.childAt(2).prop('rating'))
      .toBe(+examplePayment.payment_cost_rating);
    const columns = box.find('.column');
    expect(columns.first().childAt(1).text()).toBe(examplePayment.payment_ref);
    expect(columns.last().childAt(1).text()).toBe(`£${examplePayment.payment_amount}`);
  });

  it('should raise callback on click', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <PopupComponent
        hidePopup={callback}
        payment={examplePayment}
      />);
    const overlay = wrapper.find('.popup-overlay');
    overlay.simulate('click');
    expect(callback).toBeCalled();
  });
});
