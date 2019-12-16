import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import DocumentTitle from 'react-document-title';
import { Toggle, ToggleItem } from './../Toggle.js';
import ActivityDetail from './ActivityDetail';
import { SidebarItem } from './../Sidebar.js';

class WebVRCamp extends Component {
  buildSidebarContent = () => {
    return (
      <div>
        <SidebarItem titleKey="vr-activity-audience" type="audience">
          <Localized id="vr-activity-audience-1">
            <p></p>
          </Localized>
        </SidebarItem>
      </ div>
    );
  };

  buildMainContentTop = () => {
    return (
      <div>
        <Localized id="vr-activity-intro">
          <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></p>
        </Localized>

        <Localized id="vr-activity-general"
          aframeLink={<a href="https://aframe.io/"></a>}>
          <p></p>
        </Localized>

        <Localized id="vr-activity-general-2">
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
          titleKey="vr-activity-format"
          id="activity-format"
        >
          <Localized id="vr-activity-format-1">
            <p></p>
          </Localized>

          <ToggleItem
            titleKey="vr-activity-format-2"
            id="activity-format-2"
          >
            <ol>
              <Localized id="vr-activity-format-3"
                eventGuideLink={<a href="/eventguide/"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-format-4"
                telegramLink={<a href="https://telegram.me/MozillaVR"></a>}
                slackLink={<a href="https://aframevr-slack.herokuapp.com/"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-format-5">
                <li></li>
              </Localized>
              <Localized id="vr-activity-format-6"
                presentationLink={<a href="https://github.com/aframevr/aframe-presentation-kit"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-format-7"
                awesomeLink={<a href="https://github.com/aframevr/awesome-aframe"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-format-8">
                <li></li>
              </Localized>
            </ol>
          </ToggleItem>

          <ToggleItem
            titleKey="vr-activity-format-9"
            id="activity-format-9"
          >
            <ol>
              <Localized id="vr-activity-format-10">
                <li></li>
              </Localized>
              <Localized id="vr-activity-format-11">
                <li></li>
              </Localized>
              <ol>
                <Localized id="vr-activity-format-12">
                  <li></li>
                </Localized>
                <Localized id="vr-activity-format-13"
                  contributeLink={<a href="https://github.com/aframevr/aframe/blob/master/CONTRIBUTING.md"></a>}
                  aframeLink={<a href="https://aframe.io/"></a> }>
                  <li></li>
                </Localized>
                <Localized id="vr-activity-format-14"
                  slackLink={<a href="https://aframevr-slack.herokuapp.com/"></a>}>
                  <li></li>
                </Localized>
                <Localized id="vr-activity-format-15"
                  worldScene={<a href="https://codepen.io/mozvr/pen/BjygdO"></a>}
                  docLink={<a href="https://aframe.io/docs/0.3.0/introduction/getting-started.html"></a>}>
                  <li></li>
                </Localized>
              </ol>
            </ol>
          </ToggleItem>
        </Toggle>

        {/* Event Flow */}

        <Toggle
          titleKey="vr-activity-flow"
          id="event-flow"
        >
          <Localized id="vr-activity-flow-1">
            <p></p>
          </Localized>

          <ToggleItem
            titleKey="vr-activity-flow-2-reworked"
            durationKey="vr-activity-flow-2-duration"
            id="activity-flow-2"
          >
            <ul>
              <Localized id="vr-activity-flow-3"
                ballLink={<a href="https://businessmajors.about.com/od/icebreakers/a/Icebreaker8.htm"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-flow-4"
                missionLink={<a href="https://www.mozilla.org/mission/"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-flow-5"
                blogLink={<a href="https://gurumukhi.wordpress.com/2016/09/21/a-frame-for-vr-development-on-web/"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-flow-6">
                <li></li>
              </Localized>
            </ul>
          </ToggleItem>

          <ToggleItem
            titleKey="vr-activity-flow-7-reworked"
            durationKey="vr-activity-flow-7-duration"
            id="activity-flow-7"
          >
            <ul>
              <Localized id="vr-activity-flow-8"
                demoLink={<a href="https://aframe.io/examples"></a>}
                weekLink={<a href="https://aframe.io/blog/"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-flow-9"
                apainterLink={<a href="https://blog.mozvr.com/a-painter/"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-flow-10"
                patternLink={<a href="https://aframe.io/docs/0.3.0/introduction/#entity-component-system"></a>}>
                <li></li>
              </Localized>
            </ul>
          </ToggleItem>

          <ToggleItem
            titleKey="vr-activity-flow-11-reworked"
            durationKey="vr-activity-flow-11-duration"
            id="activity-flow-11"
          >
            <ul>
              <Localized id="vr-activity-flow-12">
                <li></li>
              </Localized>
              <Localized id="vr-activity-flow-13"
                codepenLink={<a href="https://codepen.io/mozvr/pen/BjygdO"></a>}
                boilerplateLink={<a href="https://github.com/aframevr/aframe-boilerplate"></a>}>
                <li></li>
              </Localized>
              <ul>
                <Localized id="vr-activity-flow-14"
                  mongooseLink={<a href="https://www.cesanta.com/products/binary"></a>}>
                  <li></li>
                </Localized>
              </ul>
            </ul>
          </ToggleItem>
          <ToggleItem
            titleKey="vr-activity-flow-15-reworked"
            durationKey="vr-activity-flow-15-duration"
            id="activity-flow-15"
          >
            <ul>
              <Localized id="vr-activity-flow-16">
                <li></li>
              </Localized>
            </ul>
          </ToggleItem>
          <ToggleItem
            titleKey="vr-activity-flow-17-reworked"
            durationKey="vr-activity-flow-17-duration"
            id="activity-flow-17"
          >
            <ul>
              <Localized id="vr-activity-flow-18">
                <li></li>
              </Localized>
            </ul>
          </ToggleItem>
          <ToggleItem
            titleKey="vr-activity-flow-19-reworked"
            durationKey="vr-activity-flow-19-duration"
            id="activity-flow-19"
          >
            <ul>
              <Localized id="vr-activity-flow-20">
                <li></li>
              </Localized>
              <Localized id="vr-activity-flow-21"
                communityLink={<a href="https://aframe.io/community/"></a>}>
                <li></li>
              </Localized>
              <Localized id="vr-activity-flow-22">
                <li></li>
              </Localized>
              <Localized id="vr-activity-flow-23">
                <li></li>
              </Localized>
            </ul>
          </ToggleItem>

        </Toggle>

        {/* Conclusion */}
        <Toggle
          titleKey="vr-activity-end"
          id="directly-at-the-end-of-the-activity"
        >
          <Localized id="vr-activity-end-1">
            <p></p>
          </Localized>

          <p className="toggle__attention-link"><a href="https://mzl.la/howwasit"></a></p>

          <Localized id="vr-activity-end-2">
            <p></p>
          </Localized>

          <ToggleItem
            titleKey="vr-activity-output"
            id="output"
          >
            <Localized id="vr-activity-output-1">
              <p></p>
            </Localized>

            <ul>
              <Localized id="vr-activity-output-2">
                <li></li>
              </Localized>
              <Localized id="vr-activity-output-3">
                <li></li>
              </Localized>
              <ul>
                <Localized id="vr-activity-output-4">
                  <li></li>
                </Localized>
                <Localized id="vr-activity-output-5">
                  <li></li>
                </Localized>
                <Localized id="vr-activity-output-6">
                  <li></li>
                </Localized>
                <Localized id="vr-activity-output-7">
                  <li></li>
                </Localized>
              </ul>
              <Localized id="vr-activity-output-8">
                <li></li>
              </Localized>
              <Localized id="vr-activity-output-9"
                discourseLink={<a href="https://discourse.mozilla-community.org/t/activate-mozilla-webvr-camp/11190"></a>}>
                <li></li>
              </Localized>
            </ul>
          </ToggleItem>

        </Toggle>

        <Toggle
          titleKey="vr-activity-contact"
          id="contact"
        >
          <Localized id="vr-activity-contact-1"
            slackLink={<a href="https://aframevr-slack.herokuapp.com/"></a>}
            twitterLink={<a href="https://twitter.com/aframevr"></a>}
            communityLink={<a href="https://aframe.io/community/"></a>}>
            <p></p>
          </Localized>
        </Toggle>
      </ div>
    );
  };

  render () {
    return (
      <Localized id="webvr-document-title" attrs={{ title: true }}>
        <DocumentTitle>
          <ActivityDetail
            titleImage="/images/webvr-header.png"
            titleKey="webvr-title"
            tagKey="programming"
            durationKey="webvr-duration"
            sidebarContent = {this.buildSidebarContent()}
            mainContentTop = {this.buildMainContentTop()}
            mainContentToggleItems = {this.buildMainContentToggleItems()}/>
        </DocumentTitle>
      </Localized>
    );
  }
}

export default WebVRCamp;
