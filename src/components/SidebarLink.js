import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { connect } from 'react-redux';
import { Link as LinkIcon, ExternalLink } from 'react-feather';
import { Link } from "react-router-dom";

class SidebarLink extends Component {

  buildLink = (props) => {
    const {
      type,
      linkText,
      linkKey,
      targetUrl,
      currentLocale = this.props.currentLocales[0]
    } = props;

    if(type === 'internal') {
      return (
        <Link to={`/${currentLocale}/${targetUrl}`} className="sidebar__link">
          <LinkIcon size={14} className="sidebar__icon sidebar__link-icon" />
          <Localized id={linkKey}>
            <span>
              {linkText}
            </span>
          </Localized>
        </Link >
      )
    }
    else {
      return (
        <a href={ targetUrl } className="sidebar__link">
          <ExternalLink size={14} className="sidebar__icon sidebar__link-icon" />
          <Localized id={linkKey}>
            <span>
              {linkText}
            </span>
          </Localized>
        </a >
      )
    }
  };

  render() {
    return (
      <div>
        { this.buildLink(this.props) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLocales: state.language.currentLocales,
});

export default connect(mapStateToProps)(SidebarLink);