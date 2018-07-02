import React, { Component, Children, cloneElement } from 'react';
import 'babel-polyfill';
import 'fluent-intl-polyfill/compat';
import { MessageContext } from 'fluent/compat';
import { LocalizationProvider } from 'fluent-react/compat';
import { negotiateLanguages } from 'fluent-langneg/compat';

const AVAILABLE_LOCALES = ['en-US', 'es'];

async function fetchMessages(locale) {
  const response = await fetch(`/locales/${locale}.ftl`);
  const messages = await response.text();

  return { [locale]: messages };
}

async function createMessagesGenerator(currentLocales) {
  const fetched = await Promise.all(
    currentLocales.map(fetchMessages)
  );
  const bundle = fetched.reduce(
    (obj, cur) => Object.assign(obj, cur)
  );

  return function* generateMessages() {
    for (const locale of currentLocales) {
      const cx = new MessageContext(locale);
      cx.addMessages(bundle[locale]);
      yield cx;
    }
  }
}

export class AppLocalizationProvider extends Component {
  constructor(props) {
    super(props);

    const { userLocales } = props;

    const currentLocales = negotiateLanguages(
      userLocales,
      AVAILABLE_LOCALES,
      { defaultLocale: 'en-US' }
    );

    this.state = {
      currentLocales,
    };
  }

  handleLocaleChange(locale) {
    this.generateMessages([locale]);
    this.setState({
      currentLocales: [locale]
    });
  }

  async componentWillMount() {
    await this.generateMessages(this.state.currentLocales);
  }

  async generateMessages(locales) {
    const generateMessages  = await createMessagesGenerator(locales);
    this.setState({ messages: generateMessages() });
  }

  render() {
    const child = Children.only(this.props.children);
    const { messages, currentLocales } = this.state;


    const l10nProps = {
      currentLocales,
      availableLocales: AVAILABLE_LOCALES,
      handleLocaleChange: (e) => this.handleLocaleChange(e.target.value),
    };

    if (!messages) {
      return <div>…</div>;
    }

    return (
      <LocalizationProvider messages={messages}>
        { cloneElement(child, l10nProps) }
      </LocalizationProvider>
    );
  }
}