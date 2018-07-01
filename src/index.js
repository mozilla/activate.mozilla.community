import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import { AppLocalizationProvider } from './l10n';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppLocalizationProvider userLocales={navigator.languages}>
    <App />
  </AppLocalizationProvider>,
  document.getElementById('root')
);
registerServiceWorker();
