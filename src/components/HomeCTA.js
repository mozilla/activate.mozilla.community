import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import './HomeCTA.css';

class HomeCTA extends Component {
  render () {
    const classes = ['home-cta', 'title'];
    if (this.props.isInIllustratedSlice) {
      classes.push('title--extra-large');
      classes.push('is-in-illustrated-slice');
    } else {
      classes.push('title--extra-extra-large');
    }
    if (this.props.className) classes.push(this.props.className);
    const classString = classes.join(' ');

    return (
      <div className={classString}>
        <a target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/intent/tweet?text=%23MozActivate">
          <Localized id="home-cta">
            <span className="home-cta__text"></span>
          </Localized>
        </a>
      </div>
    );
  }
}

export default HomeCTA;
