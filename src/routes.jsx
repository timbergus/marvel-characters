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

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={ListView} />
      <Route exact path="/detail/:id" component={DetailView} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);
