import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import DocumentTitle from 'react-document-title';
import { Toggle, ToggleItem } from './../Toggle.js';
import ActivityDetail from './ActivityDetail';
import { SidebarItem } from './../Sidebar.js';

class Nightly extends Component {
  buildSidebarContent = () => {
    return (
      <div>
        <SidebarItem titleKey="nightly-activity-impact" >
          <ul>
            <Localized id="nightly-activity-impact-2">
              <li></li>
            </Localized>
            <Localized id="nightly-activity-impact-3">
              <li></li>
            </Localized>
            <Localized id="nightly-activity-impact-4">
              <li></li>
            </Localized>
            <Localized id="nightly-activity-impact-5">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem titleKey="nightly-activity-audience" type="audience">
          <Localized id="nightly-activity-audience-description">
            <p></p>
          </Localized>
        </SidebarItem>
      </ div>
    );
  };

  buildMainContentTop = () => {
    return (
      <div>
        <Localized id="nightly-activity-intro">
          <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></p>
        </Localized>

        <Localized id="nightly-activity-general">
          <p></p>
        </Localized>
      </ div>
    );
  };

  buildMainContentToggleItems = () => {
    return (
      <div>
        {/* Event Flow */}

        <Toggle
          titleKey="nightly-activity-event-flow"
          id="event-flow"
        >
          <Localized id="nightly-activity-solo">
            <p></p>
          </Localized>

          <ToggleItem
            titleKey="nightly-activity-before"
            id="activity-flow-1"
          >
            <ol>
              <Localized id="nightly-activity-before-1"
                eventGuideLink={<a href="/eventguide/"></a>}>
                <li></li>
              </Localized>
              <Localized id="nightly-activity-before-2"
                nightlyIntroLink={<a href="https://docs.google.com/presentation/d/1dnl5jShMYDO-f_SDGM3yRr3Ac3XRF4XCZqlVwGcYm34/edit?usp=sharing">Introduction to Nightly slides</a>}>
                <li></li>
              </Localized>
              <Localized id="nightly-activity-before-3">
                <li></li>
              </Localized>
              <Localized id="nightly-activity-before-4">
                <li></li>
              </Localized>
            </ol>
            <Localized id="nightly-activity-tip-2"
              downloadLink={<a href="https://www.mozilla.org/en-US/firefox/channel/desktop/">Nightly for every platform</a>}
              androidLink={<a href="https://www.mozilla.org/en-US/firefox/channel/android/">Android builds</a>}>
              <p></p>
            </Localized>
            <Localized id="nightly-activity-before-4">
              <p></p>
            </Localized>
          </ToggleItem>

          <ToggleItem
            titleKey="nightly-activity-before2"
            id="activity-flow-2"
          >
            <ol>
              <Localized id="nightly-activity-before2-1">
                <li></li>
              </Localized>
              <Localized id="nightly-activity-before2-2">
                <li></li>
              </Localized>
              <ul>
                <Localized id="nightly-activity-before2-3">
                  <li></li>
                </Localized>
                <Localized id="nightly-activity-before2-4">
                  <li></li>
                </Localized>
              </ul>
            </ol>
          </ToggleItem>

          <ToggleItem
            titleKey="nightly-activity-during"
            id="activity-flow-3"
          >
            <ol>
              <Localized id="nightly-activity-during-1">
                <li></li>
              </Localized>
              <Localized id="nightly-activity-during-2">
                <li></li>
              </Localized>
              <Localized id="nightly-activity-during-3">
                <li></li>
              </Localized>
              <Localized id="nightly-activity-during-4">
                <li></li>
              </Localized>
              <ul>
                <Localized id="nightly-activity-during-5"
                  bugsLink={<a href="https://developer.mozilla.org/docs/Mozilla/QA/Bug_writing_guidelines"></a>}>
                  <li></li>
                </Localized>
                <Localized id="nightly-activity-during-6"
                  regressionLink={<a href="https://mozilla.github.io/mozregression/"></a>}>
                  <li></li>
                </Localized>
                <Localized id="nightly-activity-during-7">
                  <li></li>
                </Localized>
              </ul>
              <Localized id="nightly-activity-during-8">
                <li></li>
              </Localized>
            </ol>
          </ToggleItem>
        </Toggle>

        {/* Conclusion */}
        <Toggle
          titleKey="nightly-activity-end"
          id="directly-at-the-end-of-the-activity"
        >
          <Localized id="nightly-activity-end-1">
            <p></p>
          </Localized>

          <p className="toggle__attention-link"><a href="https://mzl.la/howwasit"></a></p>

          <Localized id="nightly-activity-end-2">
            <p></p>
          </Localized>

          <ToggleItem
            titleKey="nightly-activity-output"
            id="output"
          >
            <Localized id="nightly-activity-output-1">
              <p></p>
            </Localized>

            <ul>
              <Localized id="nightly-activity-output-2">
                <li></li>
              </Localized>
              <Localized id="nightly-activity-output-3"
                discourseLink={<a href="https://discourse.mozilla-community.org/t/a-new-nightly-activity/16746"></a>}>
                <li></li>
              </Localized>
              <Localized id="nightly-activity-output-4">
                <li></li>
              </Localized>
              <Localized id="nightly-activity-output-5"
                discourseLink={<a href="https://discourse.mozilla-community.org/c/nightly"></a>}>
                <li></li>
              </Localized>
            </ul>
          </ToggleItem>
        </Toggle>

        <Toggle
          titleKey="nightly-activity-content"
          id="content"
        >
          <Localized id="nightly-activity-content-1"
            telegramLink={<a href="https://t.me/joinchat/AAAAAAeCegHxTCZHWhYm3A"></a>}
            twitterLink={<a href="http://twitter.com/FirefoxNightly"></a>}>
            <p></p>
          </Localized>
        </Toggle>

        <Toggle
          titleKey="nightly-activity-extra"
          id="extra"
        >
          <Localized id="nightly-activity-extra-1"
            wikiLink={<a href="https://wiki.mozilla.org/Nightly"></a>}
            foxfoodingLink={<a href="https://wiki.mozilla.org/Foxfooding"></a>}>
            <p></p>
          </Localized>
        </Toggle>
      </ div>
    );
  };

  render () {
    return (
      <Localized id="nightly-document-title" attrs={{ title: true }}>
        <DocumentTitle>
          <ActivityDetail
            titleImage="/images/nightly-header.png"
            titleKey="nightly-title"
            tagKey="testing"
            durationKey="nightly-duration"
            sidebarContent = {this.buildSidebarContent()}
            mainContentTop = {this.buildMainContentTop()}
            mainContentToggleItems = {this.buildMainContentToggleItems()}/>
        </DocumentTitle>
      </Localized>
    );
  }
}

export default Nightly;
