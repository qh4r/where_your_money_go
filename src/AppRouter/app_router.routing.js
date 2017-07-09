import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import { Main } from '../Main';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={Main} />
  </Router>
);

AppRouter.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export {
  AppRouter,
};
