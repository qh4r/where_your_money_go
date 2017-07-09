/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { PaymentsGridComponent } from './payments_grid.component';

describe('PaymentsGrid component', () => {
  it(' renders without errors', () => {
    const wrapper = mount(<PaymentsGridComponent />);
    const table = wrapper.find('table');
    expect(table.exists()).toBe(true);
  });

  it('always renders header', () => {
    const wrapper = mount(<PaymentsGridComponent />);
    const table = wrapper.find('table');
    const thead = table.childAt(0);
    expect(thead.type()).toBe('thead');
    const tr = thead.childAt(0);
    expect(tr.type()).toBe('tr');
    expect(tr.children().length).toBe(4);
  });
});
