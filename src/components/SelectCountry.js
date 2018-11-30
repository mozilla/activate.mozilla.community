import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

// Select Country components
// For each use a unique id needs to be provided and localized text needs to be
// added in the translation source file.
class SelectCountry extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      value: 'placeholder'
    };
  }

  handleChange = event => {
    this.setState({value: event.target.value});
    console.log(this);
    if(event.target.value !== 'placeholder') {
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
          <Localized id={id + "-label"}>
            Country
          </Localized>
        </label>
        <select
          id={id}
          name="country"
          value={this.state.value}
          onChange={this.handleChange}
          required
          aria-required="true"
          className="is-placeholder"
        >
          <option value="placeholder" disabled>
            Select Country
          </option>
          <option value="United States">United States</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Spain">Spain</option>
          <option value="Japan">Japan</option>
        </select>
      </div>
    );
  }
}

export default SelectCountry;
