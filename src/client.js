
import 'babel-polyfill';

import React from 'react';

import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router , browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configure-store';
import Route from './route';

const history = createHistory();
const store = configureStore();

syncHistoryWithStore(history, store);

const component = (
  <Provider store={store} key="provider">
    <Router history={browserHistory}>
      {Route}
    </Router>
  </Provider>
);

render(component, document.getElementById('root'));
