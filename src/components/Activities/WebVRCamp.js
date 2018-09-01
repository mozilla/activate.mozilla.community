import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Localized } from 'fluent-react/compat';

import ActivityDetail from './ActivityDetail';

class WebVRCamp extends Component {
  render() {
    return (
      <ActivityDetail
        titleImage="/images/webvr-post-header.png"
        titleKey="webvr-title"
        durationKey="webvr-duration">

        <Col lg={9} md={9} sm={9} xs={12}>

          <p class="alert alert-info impactbox"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
  Having more developers and content creators playing with WebVR is important for the future of virtual reality to help build towards a free and open virtual reality platform not owned by any individual entity.</p>

          <p><a href="https://aframe.io/">A-Frame</a> is a web framework for building virtual reality experiences, making it easy for anyone to get involved with virtual reality. Its goal is to onboard developers into 3D and advance WebVR, an open platform for virtual reality that leverages the Web. <strong>Having more developers and content creators playing with WebVR is important for the future of virtual reality to help build towards a free and open virtual reality platform not owned by any individual entity</strong>.</p>

          <p>A-Frame is used extensively by the Mozilla VR team to prototype and experiment with WebVR. <strong>Having more contributors know A-Frame will give them a chance to get involved in one of the most exciting revolutions in the field of technology</strong>.</p>

          <h2 id="activity-format">Activity Format</h2>

          <p>Help us build community around the A-Frame library by conducting a mobilizing / learning event for 20-30 contributors.</p>

          <p><strong>2-4 Weeks Before the Event</strong></p>

          <ol>
            <li>Read the <a href="/eventguide/">event guide</a> on how to set up an event page and how to organize an event.</li>
            <li>Give a thought whether it will be self-facilitated or with someone who has A-Frame experience. You can find help on the <a href="https://telegram.me/MozillaVR">Mozilla VR Telegram group</a> or the <a href="https://aframevr-slack.herokuapp.com/">A-Frame Slack channel</a></li>
            <li>Create an event page on a platform popular in your locale, such as Facebook or Meetup.com, and keep posting interesting information about WebVR &amp; related topics to keep continue the conversation</li>
            <li>Download and customize the <a href="https://github.com/aframevr/aframe-presentation-kit">A-Frame Presentation Kit</a></li>
            <li>Create a few scenes for demo &amp; prototyping purposes. You can find examples on <a href="https://github.com/aframevr/awesome-aframe">awesome-aframe</a></li>
            <li>Acquire headsets to use and demo. Google Cardboard can be acquired in some locations for less than $5 a set. We recommend 5 headsets for an event of 20-30 people. You can request budget of up to $50 maximum for these headsets but you will have to buy them yourself.</li>
          </ol>

          <p><strong>1 Week Before the Event</strong></p>

          <ol>
            <li>Confirmed selected attendees through email.</li>
            <li>Distribute the following list of tasks to do before event:
              <ol>
                <li>Create a GitHub account if they don’t have one</li>
                <li>Get familiar with <a href="https://aframe.io/">A-Frame</a> and <a href="https://github.com/aframevr/aframe/blob/master/CONTRIBUTING.md">read about areas to contribute</a></li>
                <li>Join the <a href="https://aframevr-slack.herokuapp.com/">A-Frame Slack Channel</a></li>
                <li>[Optional] Play with A-Frame, starting with a <a href="https://codepen.io/mozvr/pen/BjygdO">Hello World scene</a>. Skim through the <a href="https://aframe.io/docs/0.3.0/introduction/getting-started.html">documentation</a>.</li>
              </ol>
            </li>
          </ol>

          <h2 id="event-flow">Event Flow</h2>

          <p>This is how you can break up a 4 hour event format. You can try to shorten some sections if you want to do it quicker.</p>

          <p><strong>Getting Started (30 minutes)</strong></p>

          <ul>
            <li>Introduction of speakers and attendees with an ice breaker session (e.g., <a href="http://businessmajors.about.com/od/icebreakers/a/Icebreaker8.htm">catch the ball</a>)</li>
            <li>About <a href="https://www.mozilla.org/mission/">Mozilla’s mission</a> as a non-profit and community-focused organization.</li>
            <li>About <a href="https://gurumukhi.wordpress.com/2016/09/21/a-frame-for-vr-development-on-web/">VR, WebVR &amp; A-Frame</a></li>
            <li>Quickly note social tags: #MozActivate, #WebVRCamp, @mozillavr</li>
          </ul>

          <p><strong>A-Frame <a href="https://aframe.io/docs/0.3.0/introduction/">Concepts</a> (30 minutes)</strong></p>

          <ul>
            <li><a href="http://aframe.io/examples">Demo</a> of basic A-Frame scenes &amp; apps. More examples at <a href="https://aframe.io/blog/">A Week of A-Frame</a></li>
            <li>Show off <a href="https://blog.mozvr.com/a-painter/">A-Painter</a></li>
            <li>Introduce HTML tags. If audience is more technical, also introduce the <a href="https://aframe.io/docs/0.3.0/introduction/#entity-component-system">entity-component-system pattern</a></li>
          </ul>

          <p><strong>Time to Hack (1 hour)</strong></p>

          <ul>
            <li>Propose your idea of VR experiences to build</li>
            <li>Can get started with <a href="http://codepen.io/mozvr/pen/BjygdO">Codepen</a> or the <a href="https://github.com/aframevr/aframe-boilerplate">Boilerplate</a>
              <ul>
                <li>For the boilerplate, we recommend using a local server such as <a href="https://www.cesanta.com/products/binary">Mongoose</a> or through Node.js.</li>
              </ul>
            </li>
          </ul>

          <p><strong>More About A-Frame (30 minutes)</strong></p>

          <ul>
            <li>A-Frame in depth (e.g., demo of advanced scenes, how are they built, using community components)</li>
          </ul>

          <p><strong>Continue Hacking (1 hour)</strong></p>

          <ul>
            <li>Improve your VR experience or build something else using more advanced concepts</li>
          </ul>

          <p><strong>Review &amp; Plan (30 minutes)</strong></p>

          <ul>
            <li>Review the whole event</li>
            <li>Talk about <a href="http://aframe.io/community/">A-Frame community</a>. Don’t forget to mention if you have a separate communication medium to connect with the local WebVR community (e.g., WebVR-India telegram group)</li>
            <li>Discuss takeaways</li>
            <li>Discuss individual action plans and follow-up plans</li>
          </ul>

          <h2 id="directly-at-the-end-of-the-activity">Directly at the end of the activity</h2>
          <p>Immediately after the event don’t forget to share the link to the impact form with your attendees:</p>

          <p class="attention-link"><a href="http://mzl.la/howwasit">mzl.la/howwasit</a></p>

          <p>Remember this is how you’ll know who attended your event, and if you successfully inspired them to action! We recommend adding it to your final slide AND emailing it out after the event.</p>

          <h2 id="output">Output</h2>

          <p>Additional to the recommended event flow here are some things we’d like you, the event organizer, to do.</p>

          <ul>
            <li>Fill out the post-event metrics on the event page you set up on the Reps portal</li>
            <li>Thank-You email to attendees with:
              <ul>
                <li>A feedback form</li>
                <li>Suggestion to Tweet their experience. Mention @mozillavr, #MozActivate, and #WebVRCamp</li>
                <li>Suggestion to write a blog post and share</li>
                <li>Important links</li>
              </ul>
            </li>
            <li>Send an event report or blog post and photo-stream link either over Twitter or Slack.</li>
            <li>Share a summary <a href="https://discourse.mozilla-community.org/t/activate-mozilla-webvr-camp/11190">this Discourse thread</a></li>
          </ul>

          <h2 id="contact">Contact</h2>

          <p>Want to find out more about the A-Frame community? Ping us on the <a href="https://aframevr-slack.herokuapp.com/">A-Frame Slack channel</a> or Tweet at us <a href="https://twitter.com/aframevr">@aframevr</a>. Visit the <a href="https://aframe.io/community/">A-Frame community page</a> for more details.</p>

        </Col>

        <Col lg={3} md={3} sm={3} className="sidebar hidden-xs">
          <h2 id="impact-and-metrics">Impact and Metrics</h2>

          <h3 id="goals-for-this-area">Goals for this area</h3>

          <p><strong>Impact:</strong></p>

          <ul>
            <li>200 people signed up to the <a href="https://aframe.io/community/#a-frame">A-Frame Slack channel</a></li>
            <li>100 projects built in or for A-Frame</li>
            <li>20 blog posts about events, activities, experiences, projects, or tutorials.</li>
            <li>500 social shares with #MozActivate, #WebVRCamp, @aframevr, @mozillavr</li>
          </ul>

          <p><strong>Strength:</strong></p>

          <ul>
            <li>20 Mobilizers activated</li>
            <li>30 events</li>
            <li>400 people are introduced to and starting to build with A-Frame</li>
          </ul>

          <h2 id="audience-for-this-activity">Audience for this activity</h2>

          <p>Your audience for this event should be anyone interested in virtual reality including web developers, designers and students. The audience should have a basic grasp of HTML.</p>
        </Col>

      </ActivityDetail>
    );
  }
}

export default WebVRCamp;
