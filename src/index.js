import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'fluent-intl-polyfill/compat';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import store from './store';
import App from './App';
import AppLocalizationProvider from './AppLocalizationProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppLocalizationProvider userLocales={navigator.languages}>
      <App />
    </AppLocalizationProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
