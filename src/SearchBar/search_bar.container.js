import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchBarComponent } from './search_bar.component';
import * as actions from './search_bar.actions';

const SearchBarContainer = ({ submitSearchForm }) => (
  <SearchBarComponent
    onSubmit={({ supplier, rating }) => submitSearchForm({
      supplier,
      rating,
    })}
  />
);

SearchBarContainer.propTypes = {
  submitSearchForm: PropTypes.func.isRequired,
};

const SearchBar = connect(null, actions)(SearchBarContainer);


export {
  SearchBar,
};
