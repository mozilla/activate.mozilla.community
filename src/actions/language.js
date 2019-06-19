import { FluentBundle } from 'fluent/compat';
import { negotiateLanguages } from 'fluent-langneg/compat';

import history from '../history';

const AVAILABLE_LOCALES = [
  'en-US',
  'bn-BD',
  'cs',
  'el',
  'es',
  'fr',
  'fy-NL',
  'hi-IN',
  'hu',
  'ia',
  'id',
  'it',
  'kab',
  'nl',
  'pt-BR',
  'pt-PT',
  'ro',
  'ru',
  'sq',
  'sv-SE',
  'th',
  'tr',
  'zh-CN',
  'zh-TW',
];

function getText(response) {
  return response.text();
}

async function fetchMessages(locale) {
  const allMessages = await Promise.all([
    fetch(`/locales/${locale}/activate.ftl`).then(getText),
    fetch(`/locales/${locale}/campaigns.ftl`).then(getText),
  ]);

  return { [locale]: allMessages.join('\n') };
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

    const commonVoiceDiscourseLink = await fetch(`https://raw.githubusercontent.com/mozilla/voice-web/master/locales/discourse.json`)
      .then((response) => response.json())
      .then((discourseMapping) => {
        if (discourseMapping.includes(currentLocales[0])) {
          const localizedDiscourseLink = `https://discourse.mozilla.org/c/voice/${currentLocales[0]}`;
          return localizedDiscourseLink;
        }

        return 'https://discourse.mozilla.org/c/voice';
      });

    dispatch({
      type: 'CHANGE_LOCALES_RESPONSE',
      userLocales,
      currentLocales,
      availableLocales: AVAILABLE_LOCALES,
      bundles: generateMessages(),
      commonVoiceDiscourseLink,
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