/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './payments_grid.component.sass';
import { PoundRating } from '../PoundRating/index';

const PaymentRow = ({
                      payment_amount,
                      payment_cost_rating,
                      payment_ref,
                      payment_supplier,
                      onClick,
                    }) => (
                      <tr onClick={onClick}>
                        <td>{payment_supplier}</td>
                        <td>
                          <PoundRating rating={+payment_cost_rating} />
                        </td>
                        <td>{payment_ref}</td>
                        <td>£{payment_amount}</td>
                      </tr>
);

PaymentRow.propTypes = {
  payment_amount: PropTypes.string.isRequired,
  payment_cost_rating: PropTypes.string.isRequired,
  payment_ref: PropTypes.string.isRequired,
  payment_supplier: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const PaymentsGridComponent = ({ payments, showPopup }) => (
  <table className="payments-grid-table">
    <thead>
      <tr>
        <th className="supplier-column-cell">Supplier</th>
        <th className="rating-column-cell">Pound Rating</th>
        <th className="reference-column-cell">Reference</th>
        <th className="value-column-cell">Value</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((payment, i) => (
        <PaymentRow
          key={payment.payment_ref}
          onClick={() => showPopup(i)}
          {...payment}
        />))}
    </tbody>
  </table>
);

PaymentsGridComponent.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.shape({
    payment_amount: PropTypes.string.isRequired,
    payment_cost_rating: PropTypes.string.isRequired,
    payment_ref: PropTypes.string.isRequired,
    payment_supplier: PropTypes.string.isRequired,
  })).isRequired,
  showPopup: PropTypes.func.isRequired,
};

export {
  PaymentsGridComponent,
  PaymentRow,
};
