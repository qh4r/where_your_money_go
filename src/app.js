import React from 'react';
import PropTypes from 'prop-types';
import { AppRouter } from './AppRouter';
import './app.sass';

const App = ({ history }) => (
  <AppRouter history={history} />
);

App.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export {
  App,
};
