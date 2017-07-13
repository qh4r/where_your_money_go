import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import { Main } from '../Main';
import { Popup } from '../Popup';

// just to prevent app from crushing on weird user typed routes
const NotFound = () => (
  <div> </div>
);

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={Main}>
      <Route path=":index" component={Popup} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

AppRouter.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export {
  AppRouter,
};
