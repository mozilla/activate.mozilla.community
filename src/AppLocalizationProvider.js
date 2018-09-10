import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LocalizationProvider } from 'fluent-react/compat';

import { changeLocales } from './actions/language.js';

class AppLocalizationProvider extends Component {
  async componentDidMount() {
    await this.props.changeLocales(navigator.languages);
  }

  render() {
    const { bundles, children } = this.props;

    if (!bundles) {
      return <div>…</div>;
    }

    return (
      <LocalizationProvider bundles={bundles}>
        {children}
      </LocalizationProvider>
    );
  }
}

const mapStateToProps = state => ({ bundles: state.bundles });
const mapDispatchToProps = { changeLocales };

export default connect(mapStateToProps, mapDispatchToProps)(
  AppLocalizationProvider
);