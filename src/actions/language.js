import { MessageContext } from 'fluent/compat';
import { negotiateLanguages } from 'fluent-langneg/compat';

const AVAILABLE_LOCALES = ['en-US', 'es'];

async function fetchMessages(locale) {
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

    const bundle = fetched.reduce(
      (obj, cur) => Object.assign(obj, cur)
    );

    const generateMessages = function* () {
      for (const locale of currentLocales) {
        const cx = new MessageContext(locale);
        cx.addMessages(bundle[locale]);
        yield cx;
      }
    }

    dispatch({
      type: 'CHANGE_LOCALES_RESPONSE',
      userLocales,
      currentLocales,
      availableLocales: AVAILABLE_LOCALES,
      messages: generateMessages()
    });
  };
}