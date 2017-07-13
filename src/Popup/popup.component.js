/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { PoundRating } from '../PoundRating/index';
import './popup.component.sass';

const PopupComponent = ({ hidePopup, payment }) => (
  <div onClick={hidePopup} className="popup-overlay">

    {payment && <div className="message-box">
      <FontAwesome
        tag="i"
        className="close-icon"
        name="times"
      />
      <p className="supplier">{payment.payment_supplier}</p>
      <PoundRating rating={+payment.payment_cost_rating} />
      <div className="columned-display">
        <div className="column">
          <p>Reference</p>
          <p>{payment.payment_ref}</p>
        </div>
        <div className="column">
          <p>Value</p>
          <p>£{payment.payment_amount}</p>
        </div>
      </div>
    </div>}
  </div>
);

PopupComponent.propTypes = {
  payment: PropTypes.shape({
    payment_amount: PropTypes.string.isRequired,
    payment_cost_rating: PropTypes.string.isRequired,
    payment_ref: PropTypes.string.isRequired,
    payment_supplier: PropTypes.string.isRequired,
  }),
  hidePopup: PropTypes.func.isRequired,
};

PopupComponent.defaultProps = {
  payment: null,
};

export {
  PopupComponent,
};
