// @flow

import './style.css';

import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import client from './apollo/client';

import Routes from './routes';

render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  window.document.getElementById('root'),
);
