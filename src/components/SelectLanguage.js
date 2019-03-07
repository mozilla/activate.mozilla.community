import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

// Select Country components
// For each use a unique id needs to be provided
class SelectLanguage extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({value: event.target.value});
    if(event.target.value !== '') {
      document.getElementById(this.props.id).classList.remove('is-placeholder');
    }
    else {
      document.getElementById(this.props.id).classList.add('is-placeholder');
    }
  };

  render() {
    const id = this.props.id;

    let classes = [];
    if(this.props.className) classes.push(this.props.className);
    const classString = classes.join(' ');

    return (
      <div className={classString}>
        <label className="element-invisible" htmlFor={id}>
          <Localized id="newsletter-language-label"></Localized>
        </label>
        <select
          id={id}
          name="country"
          defaultValue={this.state.value}
          onBlur={this.handleChange}
          required
          aria-required="true"
          className="is-placeholder"
        >
          <Localized id="newsletter-language-label-option">
            <option value="" disabled></option>
          </Localized>
          <option value="de">Deutsch</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="pl">Polski</option>
          <option value="pt">Português</option>
        </select>
      </div>
    );
  }
}

export default SelectLanguage;
