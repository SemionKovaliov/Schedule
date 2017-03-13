import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import globalActions from './reducers'
import App from './components/App';

let store = createStore(globalActions);
console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
