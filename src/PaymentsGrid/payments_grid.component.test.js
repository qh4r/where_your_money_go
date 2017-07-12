/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { PaymentsGridComponent, PaymentRow } from './payments_grid.component';
import { PoundRating } from '../PoundRating/index';

const examplePayments = [{
  payment_amount: '3694.60',
  payment_cost_rating: '3',
  payment_ref: '499778',
  payment_supplier: 'ACCESS MOBILITY',
}, {
  payment_amount: '2800.00',
  payment_cost_rating: '3',
  payment_ref: '499594',
  payment_supplier: 'ACTION IN RURAL SUSSEX',
}, {
  payment_amount: '7331.88',
  payment_cost_rating: '4',
  payment_ref: '499409',
  payment_supplier: 'A E PARKER LTD',
},
];

describe('PaymentsGrid component', () => {
  it(' renders without errors', () => {
    const wrapper = mount(<PaymentsGridComponent payments={examplePayments} />);
    const table = wrapper.find('table');
    expect(table.exists()).toBe(true);
  });

  it('always renders header', () => {
    const wrapper = mount(<PaymentsGridComponent payments={[]} />);
    const table = wrapper.find('table');
    const thead = table.childAt(0);
    expect(thead.type()).toBe('thead');
    const tr = thead.childAt(0);
    expect(tr.type()).toBe('tr');
    expect(tr.children().length).toBe(4);
  });

  it('should render proper amount of payments', () => {
    const wrapper = mount(<PaymentsGridComponent payments={examplePayments} />);
    expect(wrapper.find('tbody tr').length).toBe(3);
    wrapper.setProps({ payments: [] });
    expect(wrapper.find('tbody tr').length).toBe(0);
  });
});

describe('PaymentRow component', () => {
  it('should display given props', () => {
    const payment = examplePayments[0];
    const wrapper = mount(
      <PaymentRow
        {...payment}
      />);
    const tr = wrapper.find('tr');
    expect(tr.childAt(0).text()).toBe(payment.payment_supplier);
    expect(tr.childAt(1).childAt(0).type()).toBe(PoundRating);
    expect(tr.childAt(1).childAt(0).prop('rating'))
      .toBe(+payment.payment_cost_rating);
    expect(tr.childAt(2).text()).toBe(payment.payment_ref);
    expect(tr.childAt(3).text()).toBe(`£${payment.payment_amount}`);
  });
});