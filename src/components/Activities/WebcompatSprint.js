import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import DocumentTitle from 'react-document-title';
import {Toggle} from './../Toggle.js'
import ActivityDetail from './ActivityDetail';
import { SidebarItem } from './../Sidebar.js'

class WebcompatSprint extends Component {
  buildSidebarContent = () => {
    return (
      <div>
        <SidebarItem titleKey="webcompat-activity-impact-title" >
          <ul>
            <Localized id="webcompat-activity-impact-2">
              <li></li>
            </Localized>
            <Localized id="webcompat-activity-impact-3">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>
        <SidebarItem titleKey="webcompat-activity-strength">
          <ul>
            <Localized id="webcompat-activity-strength-1">
              <li></li>
            </Localized>
            <Localized id="webcompat-activity-strength-2"
              compatList={<a href="https://www.mozilla.org/about/forums/#compatibility"></a>}>
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem titleKey="webcompat-activity-audience" type="audience">
          <Localized id="webcompat-activity-audience-1">
            <p></p>
          </Localized>
        </SidebarItem>
      </div>
    );
  };

  buildMainContentTop = () => {
    return (
      <div>
        <Localized id="webcompat-activity-intro">
          <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></p>
        </Localized>

        <Localized id="webcompat-activity-general">
          <p></p>
        </Localized>

        <Localized id="webcompat-activity-background"
          hacksPost={<a href="https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/"></a>}>
          <p></p>
        </Localized>
      </div>
    );
  };

  buildMainContentToggleItems = () => {
    return (
      <div>
        {/* Activity Format */}
        <Toggle
          titleKey="webcompat-activity-format"
          id="activity-format"
        >
          <Localized id="webcompat-activity-solo">
            <p></p>
          </Localized>

          <Localized id="webcompat-activity-organize"
            eventGuideLink={<a href="/eventguide/"></a>}>
            <p></p>
          </Localized>

          <Localized id="webcompat-activity-duration">
            <p></p>
          </Localized>
        </Toggle>

        {/* Event Flow */}

        <Toggle
          titleKey="webcompat-activity-flow"
          id="event-flow"
        >
          <ul>
            <Localized id="webcompat-activity-setup">
              <li></li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-setup-1"
                firefoxLink={<a href="https://www.mozilla.org/firefox/channel/"></a>}>
                <li></li>
              </Localized>
              <Localized id="webcompat-activity-setup-2"
                firefoxLink={<a href="https://www.mozilla.org/en-US/firefox/mobile/"></a>}>
                <li></li>
              </Localized>
              <Localized id="webcompat-activity-setup-3"
                iosLink={<a href="https://www.mozilla.org/en-US/firefox/mobile/"></a>}>
                <li></li>
              </Localized>
            </ul>
            <Localized id="webcompat-activity-setup-4"
              reporterLink={<a href="https://addons.mozilla.org/addon/webcompatcom-reporter?src=external-activatewebcompat1"></a>}>
              <li></li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-setup-5">
                <li></li>
              </Localized>
              <Localized id="webcompat-activity-setup-6"
                webcompatLink={<a href="https://webcompat.com"></a>}>
                <li></li>
              </Localized>
            </ul>
            <Localized id="webcompat-activity-flow-1">
              <li></li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-flow-2"
                alexaLink={<a href="https://www.alexa.com/topsites/countries"></a>}>
                <li></li>
              </Localized>
              <Localized id="webcompat-activity-flow-3">
                <li></li>
              </Localized>
            </ul>
            <Localized id="webcompat-activity-flow-4">
              <li></li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-flow-5">
                <li></li>
              </Localized>
              <Localized id="webcompat-activity-flow-6"
                reportingLink={<a href="https://wiki.mozilla.org/Compatibility/Guide#Reporting_a_Web_compatibility_issue"></a>}>
                <li></li>
              </Localized>
              <Localized id="webcompat-activity-flow-7"
                guideLink={<a href="https://wiki.mozilla.org/Compatibility/Guide"></a>}>
                <li></li>
              </Localized>
            </ul>
          </ul>

        </Toggle>

        {/* Conclusion */}
        <Toggle
          titleKey="webcompat-activity-end"
          id="directly-at-the-end-of-the-activity"
        >
          <Localized id="webcompat-activity-end-1">
            <p></p>
          </Localized>

          <p className="toggle__attention-link"><a href="https://mzl.la/howwasit"></a></p>

          <Localized id="webcompat-activity-end-2">
            <p></p>
          </Localized>
        </Toggle>

        <Toggle
          titleKey="webcompat-activity-output"
          id="output"
        >
          <Localized id="webcompat-activity-output-1">
            <p></p>
          </Localized>

          <ul>
            <Localized id="webcompat-activity-output-2">
              <li></li>
            </Localized>
            <Localized id="webcompat-activity-output-3">
              <li></li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-output-4"
                discourseLink={<a href="https://discourse.mozilla-community.org/t/activate-mozilla-web-compatibility-sprint/10074/1"></a>}>
                <li></li>
              </Localized>
            </ul>
            <Localized id="webcompat-activity-output-5"
              mailingLink={<a href="https://www.mozilla.org/about/forums/#compatibility"></a>}>
              <li></li>
            </Localized>
          </ul>
        </Toggle>

        <Toggle
          titleKey="webcompat-activity-extra"
          id="extra"
        >
          <Localized id="webcompat-activity-extra-1">
            <p></p>
          </Localized>

          <ul>
            <Localized id="webcompat-activity-extra-2"
              moreInfoLink={<a href="https://github.com/mozilla/participation-org/issues/237#issuecomment-163632354"></a>}>
              <li></li>
            </Localized>
            <Localized id="webcompat-activity-extra-3"
              moreInfoLink={<a href="https://github.com/mozilla/participation-org/issues/237#issuecomment-163632626"></a>}>
              <li></li>
            </Localized>
          </ul>

          <Localized id="webcompat-activity-extra-4"
            contributorsLink={<a href="https://webcompat.com/contributors"></a>}>
            <p></p>
          </Localized>

        </Toggle>
      </ div>
    );
  };

  render() {
    return (
      <Localized id="webcompat-document-title" attrs={{title: true}}>
        <DocumentTitle>
          <ActivityDetail
            titleImage="/images/webcompat-post-header.png"
            titleKey="webcompat-title"
            tagKey="testing"
            durationKey="webcompat-duration"
            sidebarContent = {this.buildSidebarContent()}
            mainContentTop = {this.buildMainContentTop()}
            mainContentToggleItems = {this.buildMainContentToggleItems()}/>
        </DocumentTitle>
      </Localized>
    );
  }
}

export default WebcompatSprint;
