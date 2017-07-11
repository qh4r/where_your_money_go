import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PaginationComponent } from './pagination.component';
import * as actions from './pagination.actions';
import { paginationSelector } from './pagination.selectors';

const PaginationContainer = props => (
  <PaginationComponent
    {...props}
    selectPage={page => props.selectPage(page)}
  />
);

PaginationContainer.propTypes = {
  selectPage: PropTypes.func.isRequired,
};

const Pagination = connect(paginationSelector, actions)(PaginationContainer);

export {
  Pagination,
};
