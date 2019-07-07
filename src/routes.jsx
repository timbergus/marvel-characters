// @flow

import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ListView from './views/list.view';
import DetailView from './views/detail.view';
import ErrorView from './views/error.view';

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={ListView} />
      <Route exact path="/detail/:id" component={DetailView} />
      <Route exact path="/error" component={ErrorView} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);
