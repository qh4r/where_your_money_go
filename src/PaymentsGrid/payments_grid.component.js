import React from 'react';
import './payments_grid.component.sass';
import { PoundRating } from '../PoundRating/index';

const PaymentsGridComponent = () => (
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
      <tr>
        <td>Test</td>
        <td>
          <PoundRating rating={1} />
        </td>
        <td>Test</td>
        <td>Test</td>
      </tr>
      <tr>
        <td>Test</td>
        <td>
          <PoundRating rating={3} />
        </td>
        <td>Test</td>
        <td>Test</td>
      </tr>
      <tr>
        <td>Test</td>
        <td>
          <PoundRating rating={5} />
        </td>
        <td>Test</td>
        <td>Test</td>
      </tr>
    </tbody>
  </table>
);

export {
  PaymentsGridComponent,
};
