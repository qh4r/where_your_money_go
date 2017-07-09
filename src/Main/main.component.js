import React from 'react';
import './main.component.sass';
import { Header } from '../Header';
import { SearchBar } from '../SearchBar';
import { PaymentsGrid } from '../PaymentsGrid/index';

const Main = () => (
  <div className="app-wrapper">
    <div className="app-body">
      <Header />
      <SearchBar />
      <PaymentsGrid />
    </div>
  </div>
);

export {
  Main,
};
