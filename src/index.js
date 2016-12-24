/*************************
 *  RESISTANCE ONLINE!  *
*                        *
 *  RESISTANCE ONLINE!  *
*                        *
 *  RESISTANCE ONLINE!  *
*************************/



import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/App.jsx';
import reducer from './reducers/reducer.js';

var store = createStore(reducer);

var refresh = () => {
  render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}

refresh();
store.subscribe(render);
store.subscribe(() => console.log(store.getState()));