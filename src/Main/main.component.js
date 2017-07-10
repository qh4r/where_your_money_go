import React from 'react';
import './main.component.sass';
import { Header } from '../Header';
import { SearchBar } from '../SearchBar';
import { PaymentsGrid } from '../PaymentsGrid/index';
import { Pagination } from '../Pagination';

const Main = () => (
  <div className="app-wrapper">
    <div className="app-body">
      <Header />
      <SearchBar />
      <PaymentsGrid />
      <Pagination availablePages={3} activePage={1} />
    </div>
  </div>
);

export {
  Main,
};
