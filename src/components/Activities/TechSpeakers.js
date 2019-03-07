import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import DocumentTitle from 'react-document-title';
import {Toggle} from './../Toggle.js'
import ActivityDetail from './ActivityDetail';
import { SidebarItem } from './../Sidebar.js'

class TechSpeakers extends Component {
  buildSidebarContent = () => {
    return (
      <div>
        <SidebarItem titleKey="techspeakers-activity-goals" >
          <Localized id="techspeakers-activity-goals-1">
            <p></p>
          </Localized>

          <ul>
            <Localized id="techspeakers-activity-goals-2">
              <li></li>
            </Localized>
            <Localized id="techspeakers-activity-goals-3">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem titleKey="techspeakers-activity-audience" >
          <Localized id="techspeakers-activity-audience-1">
            <p></p>
          </Localized>

          <ul>
            <Localized id="techspeakers-activity-audience-2">
              <li></li>
            </Localized>
            <Localized id="techspeakers-activity-audience-3">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>
      </ div>
    );
  };

  buildMainContentTop = () => {
    return (
      <div>
        <Localized id="techspeakers-activity-intro">
          <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></p>
        </Localized>

        <Localized id="techspeakers-activity-general">
            <p></p>
          </Localized>

          <p><img src="/images/techspeakers.jpg" alt="TechSpeakers Group" /></p>

          <Localized id="techspeakers-activity-ready">
            <p></p>
          </Localized>

      </ div>
    );
  };

  buildMainContentToggleItems = () => {
    return (
      <div>
        {/* Activity Format */}
        <Toggle
          titleKey="techspeakers-activity-setup"
          id="activity-format"
        >
          <Localized id="techspeakers-activity-setup-intro">
            <p></p>
          </Localized>

          <ol>
            <Localized id="techspeakers-activity-setup-1"
              tsLink={<a href="https://wiki.mozilla.org/TechSpeakers#Mozilla_Tech_Speakers"></a>}>
              <li></li>
            </Localized>
            <Localized id="techspeakers-activity-setup-2">
              <li></li>
            </Localized>
            <ul>
              <Localized id="techspeakers-activity-setup-3">
                <li></li>
              </Localized>
              <Localized id="techspeakers-activity-setup-4">
                <li></li>
              </Localized>
              <Localized id="techspeakers-activity-setup-5">
                <li></li>
              </Localized>
            </ul>
            <Localized id="techspeakers-activity-setup-6">
              <li></li>
            </Localized>
            <Localized id="techspeakers-activity-setup-7">
              <li></li>
            </Localized>
            <Localized id="techspeakers-activity-setup-8">
              <li></li>
            </Localized>
            <Localized id="techspeakers-activity-setup-9"
              eventGuideLink={<a href="/eventguide/"></a>}>
              <li></li>
            </Localized>
          </ol>
        </Toggle>

        {/* Conclusion */}
        <Toggle
          titleKey="techspeakers-activity-after"
          id="directly-at-the-end-of-the-activity"
        >
          <Localized id="techspeakers-activity-after-1">
            <p></p>
          </Localized>

          <p className="toggle__attention-link"><a href="https://mzl.la/howwasit"></a></p>

          <Localized id="techspeakers-activity-after-2">
            <p></p>
          </Localized>
        </Toggle>

        <Toggle
          titleKey="techspeakers-activity-extra"
          id="extra"
        >
          <Localized id="techspeakers-activity-extra-1"
            faqLink={<a href="https://activate.mozilla.community/faq/"></a>}>
            <p></p>
          </Localized>
        </Toggle>
      </div>
    );
  };

  render() {
    return (
      <Localized id="techspeakers-document-title" attrs={{title: true}}>
        <DocumentTitle>
          <ActivityDetail
            titleImage="/images/techspeakers-header.png"
            titleKey="techspeakers-title"
            tagKey="programming"
            durationKey="techspeakers-duration"
            sidebarContent = {this.buildSidebarContent()}
            mainContentTop = {this.buildMainContentTop()}
            mainContentToggleItems = {this.buildMainContentToggleItems()}/>
        </DocumentTitle>
      </Localized>
    );
  }
}

export default TechSpeakers;
