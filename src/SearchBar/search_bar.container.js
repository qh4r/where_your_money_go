import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchBarComponent } from './search_bar.component';
import * as actions from './search_bar.actions';
import { searchBarInitializationSelector } from './search_bar.selectors';

const SearchBarContainer = props => (
  <SearchBarComponent
    {...props}
    onSubmit={({ supplier, rating }) => props.submitSearchForm({
      supplier,
      rating,
    })}
  />
);

SearchBarContainer.propTypes = {
  submitSearchForm: PropTypes.func.isRequired,
};

const SearchBar = connect(searchBarInitializationSelector, actions)(SearchBarContainer);


export {
  SearchBar,
};
