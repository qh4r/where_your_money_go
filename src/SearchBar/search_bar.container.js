import React from 'react';
import { connect } from 'redux';
import { SearchBarComponent } from './search_bar.component';

const SearchBarContainer = () => (
  <SearchBarComponent />
);

const SearchBar = connect()(SearchBarContainer);

export {
  SearchBar,
};
