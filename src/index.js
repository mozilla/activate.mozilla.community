import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import store from './store';
import AppLocalizationProvider from './l10n';
import App from './App';
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
