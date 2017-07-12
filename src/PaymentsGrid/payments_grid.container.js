import React from 'react';
import { connect } from 'react-redux';
import { PaymentsGridComponent } from './payments_grid.component';
import { paymentsSelector } from './payments_grid.selectors';

const PaymentsGridContainer = props => (
  <PaymentsGridComponent
    {...props}
  />
);

const PaymentsGrid = connect(paymentsSelector)(PaymentsGridContainer);

export {
  PaymentsGrid,
};
