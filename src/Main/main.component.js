import React from 'react';
import './main.component.sass';
import { Header } from '../Header';
import { SearchBar } from '../SearchBar';

const Main = () => (
  <div className="app-wrapper">
    <div className="app-body">
      <Header />
      <SearchBar />
    </div>
  </div>
);

export {
  Main,
};
