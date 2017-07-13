import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import './main.component.sass';
import { Header } from '../Header';
import { SearchBar } from '../SearchBar';
import { PaymentsGrid } from '../PaymentsGrid/index';
import { Pagination } from '../Pagination';

const Main = ({ children }) => (
  <div className="app-wrapper">
    <div className="app-body">
      <Header />
      <SearchBar />
      <PaymentsGrid />
      <Pagination />
      <CSSTransitionGroup
        component="div"
        className="optional-content"
        transitionName="gate"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {children}
      </CSSTransitionGroup>
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
};

Main.defaultProps = {
  children: null,
};

export {
  Main,
};
