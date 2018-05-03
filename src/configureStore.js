import { applyMiddleware, createStore, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { start, resultsState } from './reducer';

export default function configureStore(history, initialState) {
  const middleware = routerMiddleware(history);

  const reducer = combineReducers({
    router: routerReducer,
    resultsState,
    start,
  });

  let enhancer;

  enhancer = composeWithDevTools(applyMiddleware(...middleware));

  const store = createStore(reducer, { ...initialState }, enhancer);

  return store;
}
