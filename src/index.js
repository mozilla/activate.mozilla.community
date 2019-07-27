import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';

import 'fluent-intl-polyfill/compat';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import store from './store';
import App from './App';
import AppLocalizationProvider from './AppLocalizationProvider';

if (navigator.doNotTrack !== '1') {
  const tagManagerArgs = {
    gtmId: 'GTM-WHL2PP8',
  };
  TagManager.initialize(tagManagerArgs);
}

ReactDOM.render(
  <Provider store={store}>
    <AppLocalizationProvider userLocales={navigator.languages}>
      <App />
    </AppLocalizationProvider>
  </Provider>,
  document.getElementById('root'),
);
