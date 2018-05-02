import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { findResultsState } from './app';
import Main from './app/Main';
import Home from './app/Home';
import template from './template';
import { matchPath, StaticRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import routes from './routes';

const server = express();

server.use('/assets', express.static('assets'));

server.get('*', async (req, res) => {
  const initialState = { start: 'start from here'};
  // const resultsState = await findResultsState(Home);
  const store = configureStore(null, initialState);
  const context = {};
  const appString = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Main/>
      </StaticRouter>
    </Provider>
  );

  res.send(
    template({
      body: appString,
      title: 'Hello World from the server',
      initialState: JSON.stringify(initialState),
    })
  );
});

server.listen(8080);

/* eslint-disable no-console */
console.log('listening on 8080');
/* eslint-enable no-console */
