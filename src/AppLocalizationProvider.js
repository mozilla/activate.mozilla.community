import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LocalizationProvider } from 'fluent-react/compat';

import { changeLocales } from './actions/language.js';

class AppLocalizationProvider extends Component {
  async componentWillMount() {
    await this.props.changeLocales(navigator.languages);
  }

  render() {
    const { messages, children } = this.props;

    if (!messages) {
      return <div>…</div>;
    }

    return (
      <LocalizationProvider messages={messages}>
        {children}
      </LocalizationProvider>
    );
  }
}

const mapStateToProps = state => ({ messages: state.messages });
const mapDispatchToProps = { changeLocales };

export default connect(mapStateToProps, mapDispatchToProps)(
  AppLocalizationProvider
);