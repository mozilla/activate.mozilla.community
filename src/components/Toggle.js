// Toggle group  with title and description that contains multiple Toggle Items.
// Toggle Item has title, optional duration, and body.
import React, { Component, Children } from 'react';
import { Localized } from 'fluent-react/compat';
import { ChevronRight, ChevronDown, Clock, Circle } from 'react-feather';

import './Toggle.css';

class Toggle extends Component {
  // Build toggle list.
  getToggleList = (toggleItems) => {
    if (toggleItems.length >= 1) {
      return (
        <ul className="toggle__content">
          { toggleItems }
        </ul>
      );
    }
  };

  render () {
    const {
      titleKey,
      className,
      id,
    } = this.props;

    const classes = `${className || ''} toggle`;

    // Split children to description and toggle items.
    const description = [];
    const toggleItems = [];
    Children.forEach(this.props.children, child => {
      if (child.type.name === 'ToggleItem') {
        toggleItems.push(child);
      } else {
        description.push(child);
      }
    });

    return (
      <div>
        <div className={ classes } id={ id }>
          <div className="toggle__header">
            <Localized id={ titleKey }>
              <h2 className="title title--small">{ titleKey }</h2>
            </Localized>
            <div className="toggle__description">
              { description }
            </div>
          </div>
          { this.getToggleList(toggleItems) }
        </div>
      </div>
    );
  }
}

class ToggleItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  // Handles the collapse actions.
  handleToggle = () => {
    const snapshot = { ...this.state };
    this.setState({ open: !snapshot.open });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') return this.handleToggle;
  };

  // Build duration.
  getDuration = () => {
    if (this.props.durationKey) {
      return (
        <div className="toggle__item-duration">
          <Clock size={18} className="toggle__icon-duration icon" />
          <Localized id={this.props.durationKey}>
            <span></span>
          </Localized>
        </div>
      );
    }
  };

  getIcon = (snapshot) => {
    if (snapshot.open) {
      return (
        <ChevronDown size={14} className="toggle__icon toggle__icon--chevron-down icon" />
      );
    } else {
      return (<ChevronRight size={14} className="toggle__icon toggle__icon--chevron-right icon" />);
    }
  };

  render () {
    const {
      titleKey,
      id,
      className,
    } = this.props;

    const snapshot = { ...this.state };
    const isExpanded = snapshot.open;
    const stateClass = snapshot.open ? 'is-expanded' : 'is-collapsed';
    const isHidden = !snapshot.open;

    const classes = ['toggle__item'];
    if (stateClass) classes.push(stateClass);
    if (className) classes.push(className);
    const classString = classes.join(' ');

    return (
      <li className={classString}>
        <h3 className="toggle__item-title-wrapper">
          <button
            className="toggle__item-title button button--no-style"
            onClick={this.handleToggle}
            onKeyPress={this.handleKeyPress}
            aria-controls={id}
            aria-expanded={isExpanded}
          >
            <span className="toggle-item__icons">
              <Circle size={16} className="toggle__icon toggle__icon--circle icon" />
              {this.getIcon(snapshot)}
            </span>
            <Localized id={ titleKey }>
              <span></span>
            </Localized>
          </button>
          {this.getDuration()}

        </h3>
        <div id={id} className="toggle__item-content" hidden={isHidden}>
          { this.props.children }
        </div>
      </li>
    );
  }
}

export { Toggle, ToggleItem };
