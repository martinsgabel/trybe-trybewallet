import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// https://github.com/tryber/sd-020-b-project-trybewallet
// https://github.com/tryber/sd-020-b-project-trybewallet/pull/132/files#diff-ad902fd2006c2853046bf0310ac5df8b1587a2160c0646a408d21c9362fac998
//
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
