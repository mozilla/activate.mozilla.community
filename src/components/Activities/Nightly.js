import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import DocumentTitle from 'react-document-title';
import {Toggle, ToggleItem} from './../Toggle.js'
import ActivityDetail from './ActivityDetail';
import { SidebarItem } from './../Sidebar.js'

class Nightly extends Component {
  buildSidebarContent = () => {
    return (
      <div>
        <SidebarItem title="Impact" titleKey="nightly-activity-impact" >
          <ul>
            <Localized id="nightly-activity-impact-2">
              <li>500 Nightly installs</li>
            </Localized>
            <Localized id="nightly-activity-impact-3">
              <li>50 Bugzilla IDs actively filing bugs (or participating in Bugzilla)</li>
            </Localized>
            <Localized id="nightly-activity-impact-4">
              <li>50 Mozillians run events</li>
            </Localized>
            <Localized id="vnightly-activity-impact-5">
              <li>100 new followers to Nightly Twitter account</li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem title="Audience for this activity" titleKey="audience-for-this-activity" type="audience">
          <Localized id="nightly-activity-audience-description">
            <p>Your audience for this activity are people that are comfortable using the different features of Firefox and would like to dive a little deeper.  Maybe they want to learn some useful core skills that will help them as Mozillians or perhaps are comfortable using Developer Edition and want to learn more about Nightly. As just using Nightly gives us important information such as crashes, this is not only for developers or technical persons.</p>
          </Localized>
        </SidebarItem>
      </ div>
    );
  };

  buildMainContentTop = () => {
    return (
      <div>
        <Localized id="nightly-activity-intro">
          <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
            This activity has great potential to make an impact by increasing overall involvement in Nightly, simply by introducing community to tasks that they can engage in related to Nightly. Finding and filing issues early in the cycle means by the time Firefox gets to release, the code is in good shape.
          </p>
        </Localized>

        <Localized id="nightly-activity-general">
          <p>Every day, Mozilla developers write code that is merged into a common code repository (mozilla-central) and every day that code is compiled so as to create a pre-release version of Firefox based on this code for testing purposes - this is what we call a Nightly build. Once this code matures, it is merged into stabilization repositories (Beta) where that code will be polished until we reach a level of quality that allows us to ship a new final release version of Firefox to hundreds of millions of people. This development process used to ship a new version of Firefox every 5 to 8 weeks is called the Train Model.</p>
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
          title="Event Flow"
          id="event-flow"
        >
          <Localized id="nightly-activity-solo">
            <p>While this activity can be run solo, we encourage you to run an event in your community.</p>
          </Localized>

          <ToggleItem
            titleKey="nightly-activity-before"
            title="2-4 Weeks Before the Event"
            id="activity-flow-1"
          >
            <ol>
              <Localized id="nightly-activity-before-1"
                         eventGuideLink={<a href="https://activate.mozilla.community/eventguide/">Event Guide</a>}>
                <li>Read the <a href="https://activate.mozilla.community/eventguide/">Event Guide</a> which helps you to organize the activity.</li>
              </Localized>
              <Localized id="nightly-activity-before-2"
                         nightlyIntroLink={<a href="https://docs.google.com/presentation/d/1dnl5jShMYDO-f_SDGM3yRr3Ac3XRF4XCZqlVwGcYm34/edit?usp=sharing">Introduction to Nightly slides</a>}>
                <li>Copy and adapt the <a href="https://docs.google.com/presentation/d/1dnl5jShMYDO-f_SDGM3yRr3Ac3XRF4XCZqlVwGcYm34/edit?usp=sharing">Introduction to Nightly slides</a>.</li>
              </Localized>
              <Localized id="nightly-activity-before-3">
                <li>Give a thought whether it will be self-facilitated or with someone who has Nightly experience. You can find help on the Mozilla Nightly Testers Telegram group or the irc.mozilla.org Nightly channel.</li>
              </Localized>
              <Localized id="nightly-activity-before-4">
                <li>Create an event page on a platform popular in your locale, such as Facebook or Meetup.com, and keep posting interesting information about Nightly & related topics to keep continue the conversation on Twitter.</li>
              </Localized>
            </ol>
            <Localized id="nightly-activity-tip"
                         downloadLink={<a href="https://activate.mozilla.community/eventguide/">Nightly for every platform</a>}
                         androidLink={<a href="https://www.mozilla.org/en-US/firefox/channel/android/">Android builds</a>}>
              <p>In case you expect bandwidth issues you can download copies of <a href="https://activate.mozilla.community/eventguide/">Nightly for every platform</a> as well as <a href="https://www.mozilla.org/en-US/firefox/channel/android/">Android builds</a> to an USB stick in case you don’t have enough bandwidth for downloads at the event.</p>
            </Localized>
            <Localized id="nightly-activity-before-4">
              <p>Duration: For duration, we recommend 1-3 hours with at least 5 attendees.</p>
            </Localized>
          </ToggleItem>

          <ToggleItem
            titleKey="nightly-activity-before2"
            title="1 Week Before the Event"
            id="activity-flow-2"
          >
            <ol>
              <Localized id="nightly-activity-before2-1">
                <li>Confirmed selected attendees through email</li>
              </Localized>
              <Localized id="nightly-activity-before2-2">
                <li>Distribute the following list of tasks to do before event:</li>
              </Localized>
              <ul>
                <Localized id="nightly-activity-before2-3">
                  <li>Tell the audience to bring laptops and all mobile devices to the event</li>
                </Localized>
                <Localized id="nightly-activity-before2-4">
                  <li>Check bugzilla credentials for organizers (if needed, ask for edit bugs/can confirm permissions)</li>
                </Localized>
              </ul>
            </ol>
          </ToggleItem>

          <ToggleItem
            titleKey="nightly-activity-during"
            title="During the event"
            id="activity-flow-3"
          >
            <ol>
              <Localized id="nightly-activity-during-1">
                <li>Briefly introduce Nightly channel and why it is important to use in your locale using your slide deck</li>
              </Localized>
              <Localized id="nightly-activity-during-2">
                <li>Get people to install Nightly on their devices</li>
              </Localized>
              <Localized id="nightly-activity-during-3">
                <li>Explain telemetry</li>
              </Localized>
              <Localized id="nightly-activity-during-4">
                <li>According to your audience background</li>
              </Localized>
              <ul>
                <Localized id="nightly-activity-during-5"
                  bugsLink={<a href="https://developer.mozilla.org/docs/Mozilla/QA/Bug_writing_guidelines">file Nightly bugs</a>}>
                  <li>Explain how to <a href="https://developer.mozilla.org/docs/Mozilla/QA/Bug_writing_guidelines">file Nightly bugs</a></li>
                </Localized>
                <Localized id="nightly-activity-during-6"
                  regressionLink={<a href="https://mozilla.github.io/mozregression/">mozregression</a>}>
                  <li>Explain how to install <a href="https://mozilla.github.io/mozregression/">mozregression</a></li>
                </Localized>
                <Localized id="nightly-activity-during-7">
                  <li>Explain how to triage or test bugs</li>
                </Localized>
              </ul>
              <Localized id="nightly-activity-during-8">
                <li>Encourage participants to keep using Nightly</li>
              </Localized>
            </ol>
          </ToggleItem>
        </Toggle>

        {/* Conclusion */}
        <Toggle
          titleKey="nightly-activity-end"
          title="Directly at the end of the activity"
          id="directly-at-the-end-of-the-activity"
        >
          <Localized id="nightly-activity-end-1">
            <p>Immediately after the event don’t forget to share the link to the impact form with your attendees:</p>
          </Localized>

          <p className="toggle__attention-link"><a href="http://mzl.la/howwasit">mzl.la/howwasit</a></p>

          <Localized id="nightly-activity-end-2">
            <p>Remember this is how you’ll know who attended your event, and if you successfully inspired them to action! We recommend adding it to your final slide AND emailing it out after the event.</p>
          </Localized>

          <ToggleItem
            titleKey="nightly-activity-output"
            title="Output"
            id="output"
          >
            <Localized id="nightly-activity-output-1">
              <p>Additional to the recommended event flow here are some things we’d like you, the event organizer, to do.</p>
            </Localized>

            <ul>
              <Localized id="nightly-activity-output-2">
                <li>Fill out the post-event metrics on the event page you set-up on the Reps portal</li>
              </Localized>
              <Localized id="nightly-activity-output-3"
                discourseLink={<a href="https://discourse.mozilla-community.org/t/a-new-nightly-activity/16746">Here is the Discourse post to write to</a>}>
                <li>Tell us about your event. We love to hear about upcoming plans, and of course love to hear about what was achieved at the event with a picture or two! This will also be instructional and inspirational to others who might do the event. <a href="https://discourse.mozilla-community.org/t/a-new-nightly-activity/16746">Here is the Discourse post to write to</a>.</li>
              </Localized>
              <Localized id="nightly-activity-output-4">
                <li>Send an email to all participants with a summary and ask them to fill out the survey.</li>
              </Localized>
              <Localized id="nightly-activity-output-5"
                discourseLink={<a href="https://discourse.mozilla-community.org/c/nightly">Discourse category</a>}>
                <li>Encourage attendees who want to continue to work on Nightly to sign up to the <a href="https://discourse.mozilla-community.org/c/nightly">Discourse category</a>.</li>
              </Localized>
            </ul>
          </ToggleItem>
        </Toggle>

        <Toggle
          titleKey="nightly-activity-content"
          title="Content"
          id="content"
        >
          <Localized id="nightly-activity-content-1"
            telegramLink={<a href="https://t.me/joinchat/AAAAAAeCegHxTCZHWhYm3A">Telegram Nightly channel</a>}
            twitterLink={<a href="http://twitter.com/FirefoxNightly">@FirefoxNightly</a>}>
            <p>Want to find out more about the Firefox Nightly community? Ping us on the #nightly channel on irc.mozilla.org or join the <a href="https://t.me/joinchat/AAAAAAeCegHxTCZHWhYm3A">Telegram Nightly channel</a>. You can also find us on Twitter <a href="http://twitter.com/FirefoxNightly">@FirefoxNightly</a>.</p>
          </Localized>
        </Toggle>

        <Toggle
          titleKey="nightly-activity-extra"
          title="Extra"
          id="extra"
        >
          <Localized id="nightly-activity-extra-1"
            wikiLink={<a href="https://wiki.mozilla.org/Nightly">Nightly Wiki page</a>}
            foxfoodingLink={<a href="https://wiki.mozilla.org/Foxfooding">Foxfooding</a>}>
            <p>Additional information about Nightly can be found on the <a href="https://wiki.mozilla.org/Nightly">Nightly Wiki page</a>. You can also help Firefox by <a href="https://wiki.mozilla.org/Foxfooding">Foxfooding</a>!</p>
          </Localized>
        </Toggle>
      </ div>
    );
  };

  render() {
    return (
      <Localized id="nightly-document-title" attrs={{title: true}}>
        <DocumentTitle>
          <ActivityDetail
            titleImage="/images/nightly-header.png"
            titleKey="nightly-title"
            localizationTagKey="nightly-tag"
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
