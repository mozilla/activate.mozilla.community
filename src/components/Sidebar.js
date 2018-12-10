// Toggle group  with title and description that contains multiple Toggle Items.
// Toggle Item has title, optional duration, and body.
import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { File, Link, Users, Target, Info, Watch, Tag } from 'react-feather';

import './Sidebar.css';

class Sidebar extends Component {

  render() {
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
          <div className="sidebar__duration">
            <Tag size={20} className="sidebar__icon" />
            <Localized id={tagKey}>
              <span className="sidebar__title">Tag</span>
            </Localized>
          </div>
          <div className="sidebar__duration">
            <Watch size={20} className="sidebar__icon" />
            <Localized id={durationKey}>
              <h3 className="sidebar__title">Activity Duration</h3>
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
  // // Build toggle list.
  getIcon = (type) => {
    switch (type) {
      case 'resources': {
        return (
          <File className="sidebar__icon" />
        );
      }
      case 'link': {
        return (
          <Link className="sidebar__icon" />
        );
      }
      case 'target': {
        return (
          <Target className="sidebar__icon" />
        );
      }
      case 'members': {
        return (
          <Users className="sidebar__icon" />
        );
      }
      default: {
        return (
          <Info className="sidebar__icon" />
        );
      }
    }

  };

  render() {
    const {
      title,
      titleKey,
      className,
      type,
    } = this.props;

    const classes = `${className || ''} sidebar__item`;

    return (
      <div>
        <div className={ classes }>
          <div className="sidebar__item-header">
            { this.getIcon(type) }
            <Localized id={ titleKey }>
              <h2 className="sidebar__title">
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

class SidebarElement extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: false
  //   };
  // }
  //
  // // Handles the collapse actions.
  // handleToggle = () => {
  //   const snapshot = { ...this.state };
  //   this.setState({ open: !snapshot.open });
  // };
  //
  // handleKeyPress = e => {
  //   if (e.key === 'Enter') return this.handleToggle;
  // };
  //
  // // Build duration.
  // getDuration = () => {
  //   if (this.props.duration && this.props.durationKey) {
  //     return (
  //       <div className="toggle__item-duration">
  //         <Clock size={18} className="toggle__icon-duration icon" />
  //         <Localized id={this.props.durationKey}>
  //           <span>
  //             { this.props.duration }
  //           </span>
  //         </Localized>
  //       </div>
  //     )
  //   }
  // };
  //
  // getIcon = (snapshot) => {
  //   if(snapshot.open) {
  //     return (
  //       <ChevronDown size={14} className="toggle__icon toggle__icon--chevron-down icon" />
  //     )
  //   }
  //   else {
  //     return(<ChevronRight size={14} className="toggle__icon toggle__icon--chevron-right icon" />)
  //   }
  // };

  render() {
    // const {
    //   title,
    //   titleKey,
    //   id,
    //   className
    // } = this.props;
    //
    // const snapshot = { ...this.state };
    // const isExpanded = snapshot.open;
    // const stateClass = snapshot.open ? 'is-expanded' : 'is-collapsed';
    // const isHidden = !snapshot.open;
    //
    //
    let classes = ['toggle__item'];
    // if (stateClass) classes.push(stateClass);
    // if (className) classes.push(className);
    let classString = classes.join(' ');

    return (
      <li className={classString}>
        Test
        {/*<h3 className="toggle__item-title-wrapper">*/}
          {/*<button*/}
            {/*className="toggle__item-title button button--no-style"*/}
            {/*onClick={this.handleToggle}*/}
            {/*onKeyPress={this.handleKeyPress}*/}
            {/*aria-controls={id}*/}
            {/*aria-expanded={isExpanded}*/}
          {/*>*/}
            {/*<span className="toggle-item__icons">*/}
              {/*<Circle size={16} className="toggle__icon toggle__icon--circle icon" />*/}
              {/*{this.getIcon(snapshot)}*/}
            {/*</span>*/}
            {/*<Localized id={ titleKey }>*/}
              {/*<span>{ title }</span>*/}
            {/*</Localized>*/}
          {/*</button>*/}
          {/*{this.getDuration()}*/}

        {/*</h3>*/}
        {/*<div id={id} className="toggle__item-content" hidden={isHidden}>*/}
          {/*{ this.props.children }*/}
        {/*</div>*/}
      </li>
    );
  }
}

export {Sidebar, SidebarItem, SidebarElement}
