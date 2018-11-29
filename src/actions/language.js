import { FluentBundle } from 'fluent/compat';
import { negotiateLanguages } from 'fluent-langneg/compat';

import history from '../history';

const AVAILABLE_LOCALES = ['en-US'];

async function fetchMessages(locale) {
  // eslint-disable-next-line no-undef
  const response = await fetch(`/locales/${locale}/activate.ftl`);
  const messages = await response.text();

  return { [locale]: messages };
}

export function changeLocales(userLocales) {
  return async function(dispatch) {
    dispatch({ type: 'CHANGE_LOCALES_REQUEST' });

    const currentLocales = negotiateLanguages(
      userLocales,
      AVAILABLE_LOCALES,
      { defaultLocale: 'en-US' }
    );

    const fetched = await Promise.all(
      currentLocales.map(fetchMessages)
    );

    const messages = fetched.reduce(
      (obj, cur) => Object.assign(obj, cur)
    );

    const generateMessages = function* () {
      for (const locale of currentLocales) {
        const bundle = new FluentBundle(locale);
        bundle.addMessages(messages[locale]);
        yield bundle;
      }
    };

    dispatch({
      type: 'CHANGE_LOCALES_RESPONSE',
      userLocales,
      currentLocales,
      availableLocales: AVAILABLE_LOCALES,
      bundles: generateMessages(),
    });
  };
}

export function changeLocalesWithURL(previousLocale, userLocales) {
  return async function(dispatch) {
    let newPath;
    const path = history.location.pathname;

    if (path.includes(previousLocale)) {
      newPath = path.replace(previousLocale, userLocales[0]);
    } else {
      newPath = `/${userLocales[0]}${path}`;
    }

    history.push(newPath);
    changeLocales(userLocales)(dispatch);
  };
}