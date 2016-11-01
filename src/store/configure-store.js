// import thunk from 'redux-thunk';

import { applyMiddleware, createStore, compose } from 'redux';

import reducer from '../reducer';

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, compose(
    // applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const next_reducer = require('../reducer').default;

      store.replaceReducer(next_reducer);
    });
  }

  return store;
}
