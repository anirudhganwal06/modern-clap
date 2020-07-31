import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import config from './config';
import { cache } from './app/cache';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './responsive.css';

const client = new ApolloClient({
  uri: config.BACKEND_URL + '/graphql',
  cache: cache,
  credentials: 'include'
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
