import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './Main';
import configureStore from '../configureStore';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

const history = createBrowserHistory();

const store = configureStore(history, window.__APP_INITIAL_STATE__);

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
