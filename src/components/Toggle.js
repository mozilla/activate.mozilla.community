// Toggle group  with title and description that contains multiple Toggle Items.
// Toggle Item has title, optional duration, and body.
import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { ChevronRight } from 'react-feather';

import './Toggle.css';

class Toggle extends Component {
  render() {
    const {
      title,
      titleKey,
      className,
      id
    } = this.props;

    const classes = `${className || ''} toggle__group`;

    return (
      <div>
        <div className={ classes } id={ id }>
          <div className="toggle__group-header">
            <Localized id={ titleKey }>
              <h2 className="title title--x-small">
                { title }
              </h2>
            </Localized>
          </div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

class ToggleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
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
    if (this.props.duration && this.props.durationKey) {
      return (
        <Localized id={this.props.durationKey}>
          <div>
            { this.props.duration }
          </div>
        </Localized>
      )
    }
  };

  render() {
    const {
      title,
      titleKey,
      id,
      className
    } = this.props;

    const snapshot = { ...this.state };
    const isExpanded = snapshot.open;
    const stateClass = snapshot.open ? 'is-expanded' : 'is-collapsed';
    const isHidden = !snapshot.open;

    let classes = ['toggle__item'];
    if (stateClass) classes.push(stateClass);
    if (className) classes.push(className);
    let classString = classes.join(' ');

    return (
      <li className={classString}>
        <h3>
          <button
            className="toggle__item-title button button--no-style"
            onClick={this.handleToggle}
            onKeyPress={this.handleKeyPress}
            aria-controls={id}
            aria-expanded={isExpanded}
          >
            <ChevronRight size={16} className="toggle__icon icon" />

            <Localized id={ titleKey }>
              <span>{ title }</span>
            </Localized>
          </button>
          {this.getDuration()}

        </h3>
        <div id={id} className="faq__item-content" hidden={isHidden}>
          { this.props.children }
        </div>
      </li>
    );
  }
}

export {Toggle, ToggleItem}
