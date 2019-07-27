import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { Toggle, ToggleItem } from './../Toggle.js';
import ActivityDetail from './ActivityDetail';
import { SidebarItem } from './../Sidebar.js';

class CommonVoice extends Component {
  buildSidebarContent () {
    return (
      <div>
        <SidebarItem titleKey="commonvoice-activity-impact-title" >
          <ul>
            <Localized id="commonvoice-activity-impact-2">
              <li></li>
            </Localized>
            <Localized id="commonvoice-activity-impact-3">
              <li></li>
            </Localized>
            <Localized id="commonvoice-activity-impact-4">
              <li></li>
            </Localized>
            <Localized id="commonvoice-activity-impact-5">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem titleKey="commonvoice-activity-audience" type="audience">
          <ul>
            <Localized id="commonvoice-activity-audience-2">
              <li></li>
            </Localized>
            <Localized id="commonvoice-activity-audience-3">
              <li></li>
            </Localized>
            <Localized id="commonvoice-activity-audience-4">
              <li></li>
            </Localized>
            <Localized id="commonvoice-activity-audience-5">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>
      </div>
    );
  }

  buildMainContentTop () {
    return (
      <div>
        <Localized id="commonvoice-activity-intro">
          <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></p>
        </Localized>

        <Localized id="commonvoice-activity-general">
          <p></p>
        </Localized>

        <Localized id="commonvoice-activity-general-2">
          <p></p>
        </Localized>
      </div>
    );
  }

  buildMainContentToggleItems () {
    const discourseLink = (<a href={this.props.commonVoiceDiscourseLink}></a>);

    return (
      <div>
        <Toggle
          titleKey="commonvoice-activity-flows"
          id="event-flow"
        >
          <Localized id="commonvoice-activity-flows-description">
            <p></p>
          </Localized>

          <ToggleItem
            titleKey="commonvoice-activity-solo"
            id="activity-flow-1"
          >
            <Localized id="commonvoice-activity-solo-description">
              <p></p>
            </Localized>
            <Localized id="commonvoice-activity-solo-description-2">
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-solo-record">
              <h3></h3>
            </Localized>

            <ol>
              <Localized id="commonvoice-activity-solo-record-2">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-solo-record-3">
                <li></li>
              </Localized>
              <img src="/images/commonvoice-speak.png" width="200" alt=""></img>
              <Localized id="commonvoice-activity-solo-record-4">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-solo-record-5">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-solo-record-6">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-solo-record-7">
                <li></li>
              </Localized>
            </ol>

            <Localized id="commonvoice-activity-solo-review">
              <h3></h3>
            </Localized>
            <Localized id="commonvoice-activity-solo-review-2">
              <p></p>
            </Localized>

            <ol>
              <Localized id="commonvoice-activity-solo-review-3">
                <li></li>
              </Localized>
              <img src="/images/commonvoice-listen.png" width="200" alt=""></img>
              <Localized id="commonvoice-activity-solo-review-4">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-solo-review-5">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-solo-review-6">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-solo-review-7">
                <li></li>
              </Localized>
            </ol>

            <Localized id="commonvoice-activity-solo-end">
              <p></p>
            </Localized>
          </ToggleItem>

          <ToggleItem
            titleKey="commonvoice-activity-friends"
            id="activity-flow-1"
          >
            <Localized id="commonvoice-activity-friends-description-gather">
              <p></p>
            </Localized>

            <img src="/images/commonvoice-track.png" width="200" alt=""></img>
            <Localized id="commonvoice-activity-friends-description-track">
              <small></small>
            </Localized>

            <ol>
              <Localized id="commonvoice-activity-friends-description-3"
                voiceLink={<a href="https://voice.mozilla.org/"></a>}
                slidesLink={<a href="https://docs.google.com/presentation/d/17h3JIl_8R3S0kVYS9Kc7OVCkPwsUyZHwXThBQo6nKs0/edit?usp=sharing"></a>}>
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-friends-description-4">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-friends-description-5">
                <li></li>
              </Localized>
              <img src="/images/commonvoice-speak.png" width="200" alt=""></img>
              <Localized id="commonvoice-activity-friends-description-6">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-friends-description-7">
                <li></li>
              </Localized>
              <img src="/images/commonvoice-track.png" width="200" alt=""></img>
              <Localized id="commonvoice-activity-friends-description-8">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-friends-description-9">
                <li></li>
              </Localized>
            </ol>

            <Localized id="commonvoice-activity-friends-end">
              <p></p>
            </Localized>
          </ToggleItem>

          <ToggleItem
            titleKey="commonvoice-activity-time"
            id="activity-flow-1"
          >
            <Localized id="commonvoice-activity-time-description"
              posterLink={<a href="https://drive.google.com/file/d/0BzWVc2pf7zzKeXRFVjRYZy1Sa3Z5WWYzZmsyakF5cFd1aHpV/view?usp=sharing"></a>}>
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-time-description-2">
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-time-description-3">
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-time-description-4">
              <h3></h3>
            </Localized>

            <Localized id="commonvoice-activity-time-description-5"
              slidesLink={<a href="https://docs.google.com/presentation/d/17h3JIl_8R3S0kVYS9Kc7OVCkPwsUyZHwXThBQo6nKs0/edit?usp=sharing"></a>}>
              <p></p>
            </Localized>

            <ul>
              <Localized id="commonvoice-activity-time-description-6">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-time-description-7">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-time-description-8">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-time-description-9">
                <li></li>
              </Localized>
            </ul>

            <Localized id="commonvoice-activity-time-description-10">
              <h3></h3>
            </Localized>

            <img src="/images/commonvoice-speak.png" width="200" className="float-left" alt=""></img>

            <Localized id="commonvoice-activity-time-description-11">
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-time-description-12">
              <h3></h3>
            </Localized>

            <img src="/images/commonvoice-listen.png" width="200" className="float-left" alt=""></img>

            <Localized id="commonvoice-activity-time-description-13">
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-time-description-14">
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-time-description-15">
              <h3></h3>
            </Localized>

            <Localized id="commonvoice-activity-time-description-16">
              <p></p>
            </Localized>
          </ToggleItem>

          <ToggleItem
            titleKey="commonvoice-activity-crowd"
            id="activity-flow-1"
          >
            <Localized id="commonvoice-activity-crowd-description">
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-crowd-description-2"
              posterLink={<a href="https://drive.google.com/file/d/0BzWVc2pf7zzKeXRFVjRYZy1Sa3Z5WWYzZmsyakF5cFd1aHpV/view?usp=sharing"></a>}
              signageLink={<a href="https://docs.google.com/document/d/1T0eMygnmxDz-tTbNJbXWEy7nZNM4eNIzEg63IjKLxJY/edit#"></a>}
            >
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-crowd-description-5">
              <p></p>
            </Localized>

            <Localized id="commonvoice-activity-crowd-description-6">
              <p></p>
            </Localized>

            <ul>
              <Localized id="commonvoice-activity-crowd-description-7">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-crowd-description-8">
                <li></li>
              </Localized>
              <Localized id="commonvoice-activity-crowd-description-9">
                <li></li>
              </Localized>
            </ul>

            <Localized id="commonvoice-activity-crowd-description-10">
              <p></p>
            </Localized>
          </ToggleItem>
        </Toggle>

        <Toggle
          titleKey="commonvoice-activity-conversation"
          id="content"
        >
          <Localized id="commonvoice-activity-conversation-1">
            <p></p>
          </Localized>

          <Localized id="commonvoice-activity-conversation-2"
            discourseLink={discourseLink}
            slackLink={<a href="https://common-voice-slack-invite.herokuapp.com/"></a>}>
            <p></p>
          </Localized>

          <Localized id="commonvoice-activity-conversation-3"
            discourseLink={discourseLink}
            githubLink={<a href="https://github.com/mozilla/voice-web"></a>}>
            <p></p>
          </Localized>
        </Toggle>
      </div>
    );
  }

  render () {
    return (
      <Localized id="commonvoice-document-title" attrs={{ title: true }}>
        <DocumentTitle>
          <ActivityDetail
            titleImage="/images/commonvoice-header.png"
            titleKey="commonvoice-title"
            tagKey="contribution"
            durationKey="commonvoice-duration"
            sidebarContent = {this.buildSidebarContent()}
            mainContentTop = {this.buildMainContentTop()}
            mainContentToggleItems = {this.buildMainContentToggleItems()}/>
        </DocumentTitle>
      </Localized>
    );
  }
}

const mapStateToProps = (state) => ({
  commonVoiceDiscourseLink: state.language.commonVoiceDiscourseLink,
});

export default connect(mapStateToProps)(CommonVoice);
