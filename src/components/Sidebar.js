// Toggle group  with title and description that contains multiple Toggle Items.
// Toggle Item has title, optional duration, and body.
import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { File, Link as LinkIcon, Users, Target, Info, Watch, Tag } from 'react-feather';
import { Link } from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends Component {
  render () {
    const {
      imgSrc,
      durationKey,
      tagKey,
    } = this.props;

    return (
      <div className="sidebar">
        <div className="sidebar__image">
          <img src={imgSrc} alt="" />
        </div>
        <div className="sidebar__header">
          <div className="sidebar__icon-wrapper">
            <Tag size={20} className="sidebar__icon" />
            <Localized id={tagKey}>
              <span className="sidebar__title"></span>
            </Localized>
          </div>
          <div className="sidebar__icon-wrapper">
            <Watch size={20} className="sidebar__icon" />
            <Localized id={durationKey}>
              <h3 className="sidebar__title"></h3>
            </Localized>
          </div>
        </div>
        <div className="sidebar__content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

class SidebarItem extends Component {
  // Build icons.
  getIcon = (type) => {
    switch (type) {
      case 'resources': {
        return (
          <File size={20} className="sidebar__icon" />
        );
      }
      case 'link': {
        return (
          <LinkIcon size={20} className="sidebar__icon" />
        );
      }
      case 'target': {
        return (
          <Target size={20} className="sidebar__icon" />
        );
      }
      case 'audience': {
        return (
          <Users size={20} className="sidebar__icon" />
        );
      }
      default: {
        return (
          <Info size={20} className="sidebar__icon" />
        );
      }
    }
  };

  render () {
    const {
      titleKey,
      className,
      type,
    } = this.props;

    const classes = `${className || ''} sidebar__item`;

    return (
      <div>
        <div className={ classes }>
          <div className="sidebar__item-header">
            <div className="sidebar__icon-wrapper">
              { this.getIcon(type) }
              <Localized id={ titleKey }>
                <h2 className="sidebar__title">{ titleKey }</h2>
              </Localized>
            </div>
          </div>
          <div className="sidebar__item-content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

class SidebarLink extends Component {
  buildLink = (props) => {
    const {
      type,
      linkText,
      linkKey,
      targetUrl,
    } = props;

    if (type === 'internal') {
      return (
        <Link to={ targetUrl } className="sidebar__link">
          <LinkIcon size={16} className="sidebar__link-icon" />
          <Localized id={linkKey}>
            <span>
              {linkText}
            </span>
          </Localized>
        </Link >
      );
    } else {
      return (
        <a href={ targetUrl } className="sidebar__link">
          <LinkIcon size={16} className="sidebar__link-icon" />
          <Localized id={linkKey}>
            <span>
              {linkText}
            </span>
          </Localized>
        </a >
      );
    }
  };

  render () {
    return (
      <span>
        { this.buildLink(this.props) }
      </span>
    );
  }
}

export { Sidebar, SidebarItem, SidebarLink };
