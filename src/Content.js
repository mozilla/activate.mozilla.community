import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeLocales } from './actions/language';

/* TODO: This component is currently only used to dispatch the language change
   depending on the locale in the URL. If somebody has a better way, we're
   happy to get rid of it :)
*/

class Content extends Component {
  componentDidMount () {
    const urlLanguage = this.props.match.params && this.props.match.params.lang;
    this.props.changeLocales([
      urlLanguage,
    ]);
  }

  componentDidUpdate () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  render () {
    return this.props.children;
  }
}

const mapStateToProps = (state) => ({
  currentLocales: state.language.currentLocales,
});
const mapDispatchToProps = {
  changeLocales,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Content),
);
