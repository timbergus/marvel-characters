// @flow

import './style.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import store from './redux/store';
import client from './apollo/client';

import Routes from './routes';

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ApolloProvider>,
  window.document.getElementById('root'),
);
