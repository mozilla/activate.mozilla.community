import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Localized } from 'fluent-react/compat';

import ActivityDetail from './ActivityDetail';

class Nightly extends Component {
  render() {
    return (
      <ActivityDetail
        titleImage="/images/nightly-post-header.png"
        titleKey="nightly-title"
        durationKey="nightly-duration">

        <section>
          <Col lg={9} md={9} sm={9} xs={12}>
            <Localized id="nightly-activity-intro">
              <p class="alert alert-info impactbox"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
                This activity has great potential to make an impact by increasing overall involvement in Nightly, simply by introducing community to tasks that they can engage in related to Nightly. Finding and filing issues early in the cycle means by the time Firefox gets to release, the code is in good shape.
              </p>
            </Localized>

            <Localized id="nightly-activity-general">
              <p>Every day, Mozilla developers write code that is merged into a common code repository (mozilla-central) and every day that code is compiled so as to create a pre-release version of Firefox based on this code for testing purposes - this is what we call a Nightly build. Once this code matures, it is merged into stabilization repositories (Beta) where that code will be polished until we reach a level of quality that allows us to ship a new final release version of Firefox to hundreds of millions of people. This development process used to ship a new version of Firefox every 5 to 8 weeks is called the Train Model.</p>
            </Localized>

            <Localized id="nightly-activity-event-flow">
              <h2 id="event-flow">Event Flow</h2>
            </Localized>

            <Localized id="nightly-activity-solo">
              <p>While this activity can be run solo, we encourage you to run an event in your community.</p>
            </Localized>

            <Localized id="nightly-activity-before">
              <strong>2-4 Weeks Before the Event</strong>
            </Localized>

            <ol>
              <Localized id="nightly-activity-before-1"
                eventGuideLink={<a href="https://activate.mozilla.community/eventguide/">Event Guide</a>}>
                <li>Read the <a href="https://activate.mozilla.community/eventguide/">Event Guide</a> which helps you to organize the activity</li>
              </Localized>
              <Localized id="nightly-activity-before-2"
                nightlyIntroLink={<a href="https://docs.google.com/presentation/d/1dnl5jShMYDO-f_SDGM3yRr3Ac3XRF4XCZqlVwGcYm34/edit?usp=sharing">Introduction to Nightly slides</a>}>
                <li>Copy and adapt the <a href="https://docs.google.com/presentation/d/1dnl5jShMYDO-f_SDGM3yRr3Ac3XRF4XCZqlVwGcYm34/edit?usp=sharing">Introduction to Nightly slides</a></li>
              </Localized>
              <Localized id="nightly-activity-before-3">
                <li>Give a thought whether it will be self-facilitated or with someone who has Nightly experience. You can find help on the Mozilla Nightly Testers Telegram group or the irc.mozilla.org Nightly channel.</li>
              </Localized>
              <Localized id="nightly-activity-before-4">
                <li>Create an event page on a platform popular in your locale, such as Facebook or Meetup.com, and keep posting interesting information about Nightly &amp; related topics to keep continue the conversation on Twitter.</li>
              </Localized>
            </ol>

            <Localized id="nightly-activity-tip"
              downloadLink={<a href="https://www.mozilla.org/firefox/nightly/all/">Nightly for every platform</a>}
              androidLink={<a href="https://www.mozilla.org/firefox/channel/android/">Android builds</a>}>
              <p>
                In case you expect bandwidth issues you can download copies of <a href="https://www.mozilla.org/firefox/nightly/all/">Nightly for every platform</a> as well as <a href="https://www.mozilla.org/firefox/channel/android/">Android builds</a> to an USB stick in case you don’t have enough bandwidth for downloads at the event.
              </p>
            </Localized>

            <Localized id="nightly-activity-duration">
              <p>Duration: For duration, we recommend 1-3 hours with at least 5 attendees.</p>
            </Localized>

            <Localized id="nightly-activity-before2">
              <strong>1 Week Before the Event</strong>
            </Localized>

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

            <Localized id="nightly-activity-during">
              <strong>During the event</strong>
            </Localized>

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

            <Localized id="nightly-activity-end">
              <h2 id="directly-at-the-end-of-the-activity">Directly at the end of the activity</h2>
            </Localized>
            <Localized id="nightly-activity-end-1">
              <p>Immediately after the event don’t forget to share the link to the impact form with your attendees:</p>
            </Localized>

            <p class="attention-link"><a href="https://mzl.la/howwasit">mzl.la/howwasit</a></p>

            <Localized id="nightly-activity-end-2">
              <p>Remember this is how you’ll know who attended your event, and if you successfully inspired them to action! We recommend adding it to your final slide AND emailing it out after the event.</p>
            </Localized>

            <Localized id="nightly-activity-output">
              <h2 id="output">Output</h2>
            </Localized>

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

            <Localized id="nightly-activity-content">
              <h2 id="content">Content</h2>
            </Localized>

            <Localized id="nightly-activity-content-1"
              telegramLink={<a href="https://t.me/joinchat/AAAAAAeCegHxTCZHWhYm3A">Telegram Nightly channel</a>}
              twitterLink={<a href="https://twitter.com/FirefoxNightly">@FirefoxNightly</a>}>
              <p>Want to find out more about the Firefox Nightly community? Ping us on the #nightly channel on irc.mozilla.org or join the <a href="https://t.me/joinchat/AAAAAAeCegHxTCZHWhYm3A">Telegram Nightly channel</a>. You can also find us on Twitter <a href="https://twitter.com/FirefoxNightly">@FirefoxNightly</a>.</p>
            </Localized>

            <Localized id="nightly-activity-extra">
              <h2 id="extra">Extra</h2>
            </Localized>

            <Localized id="nightly-activity-extra-1"
              wikiLink={<a href="https://wiki.mozilla.org/Nightly">Nightly Wiki page</a>}
              foxfoodingLink={<a href="https://wiki.mozilla.org/Foxfooding">Foxfooding</a>}>
              <p>Additional information about Nightly can be found on the <a href="https://wiki.mozilla.org/Nightly">Nightly Wiki page</a>. You can also help Firefox by <a href="https://wiki.mozilla.org/Foxfooding">Foxfooding</a>!</p>
            </Localized>

            <Localized id="nightly-activity-extra-2">
              <p>If your session was a success, there are two other Activities that require pre-release builds, how about running one of those as well?</p>
            </Localized>

            <ul>
              <Localized id="webextensions-title">
                <li><a href="https://activate.mozilla.community/webextensions/">Build Your Own WebExtension Add-on for Firefox</a></li>
              </Localized>
              <Localized id="webvr-title">
                <li><a href="https://activate.mozilla.community/webvr-camp/">WebVR Camp</a></li>
              </Localized>
            </ul>
          </Col>

          <Col lg={3} md={3} sm={3} className="sidebar hidden-xs">
            <Localized id="nightly-activity-impact">
              <h2 id="impact-and-metrics">Impact and Metrics</h2>
            </Localized>

            <Localized id="nightly-activity-impact-1">
              <p>This activity has great potential to make an impact by increasing overall involvement in Nightly, simply by introducing community to tasks that they can engage in related to Nightly. Finding and filing issues early in the cycle means by the time Firefox gets to release, the code is in good shape.</p>
            </Localized>

            <Localized id="nightly-activity-goals">
              <h3 id="campaign-goals">Campaign Goals</h3>
            </Localized>

            <Localized id="nightly-activity-impact-title">
              <strong>Impact:</strong>
            </Localized>

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
              <Localized id="nightly-activity-impact-5">
                <li>100 new followers to Nightly Twitter account</li>
              </Localized>
            </ul>

            <Localized id="nightly-activity-audience">
              <h2 id="audience">Audience</h2>
            </Localized>
            <Localized id="nightly-activity-audience-description">
              <p>Your audience for this activity are people that are comfortable using the different features of Firefox and would like to dive a little deeper.  Maybe they want to learn some useful core skills that will help them as Mozillians or perhaps are comfortable using Developer Edition and want to learn more about Nightly. As just using Nightly gives us important information such as crashes, this is not only for developers or technical persons.</p>
            </Localized>
          </Col>
        </section>

      </ActivityDetail>
    );
  }
}

export default Nightly;
