import './plugins/wdyr';
import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import store from './store';
import App from './components/App';
import './styles.css';

const HotApp = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <HotApp />
  </Provider>,
  document.getElementById('root')
);
