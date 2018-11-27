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
        tagKey="webvr-tag"
        durationKey="webvr-duration">


        <Col lg={9} md={9} sm={9} xs={12} smPush={3}>

          <Localized id="vr-activity-intro">
            <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
              Having more developers and content creators playing with WebVR is important for the future of virtual reality to help build towards a free and open virtual reality platform not owned by any individual entity.
            </p>
          </Localized>

          <Localized id="vr-activity-general"
            aframeLink={<a href="https://aframe.io/">A-Frame</a>}>
            <p><a href="https://aframe.io/">A-Frame</a> is a web framework for building virtual reality experiences, making it easy for anyone to get involved with virtual reality. Its goal is to onboard developers into 3D and advance WebVR, an open platform for virtual reality that leverages the Web. Having more developers and content creators playing with WebVR is important for the future of virtual reality to help build towards a free and open virtual reality platform not owned by any individual entity.</p>
          </Localized>

          <Localized id="vr-activity-general-2">
            <p>A-Frame is used extensively by the Mozilla VR team to prototype and experiment with WebVR. Having more contributors know A-Frame will give them a chance to get involved in one of the most exciting revolutions in the field of technology.</p>
          </Localized>

          <Localized id="vr-activity-format">
            <h2 id="activity-format">Activity Format</h2>
          </Localized>

          <Localized id="vr-activity-format-1">
            <p>Help us build community around the A-Frame library by conducting a mobilizing / learning event for 20-30 contributors.</p>
          </Localized>

          <Localized id="vr-activity-format-2">
            <strong>2-4 Weeks Before the Event</strong>
          </Localized>

          <ol>
            <Localized id="vr-activity-format-3"
              eventGuideLink={<a href="/eventguide/">event guide</a>}>
              <li>Read the <a href="/eventguide/">event guide</a> on how to set up an event page and how to organize an event.</li>
            </Localized>
            <Localized id="vr-activity-format-4"
              telegramLink={<a href="https://telegram.me/MozillaVR">Mozilla VR Telegram group</a>}
              slackLink={<a href="https://aframevr-slack.herokuapp.com/">A-Frame Slack channel</a>}>
              <li>Give a thought whether it will be self-facilitated or with someone who has A-Frame experience. You can find help on the <a href="https://telegram.me/MozillaVR">Mozilla VR Telegram group</a> or the <a href="https://aframevr-slack.herokuapp.com/">A-Frame Slack channel</a></li>
            </Localized>
            <Localized id="vr-activity-format-5">
              <li>Create an event page on a platform popular in your locale, such as Facebook or Meetup.com, and keep posting interesting information about WebVR &amp; related topics to keep continue the conversation</li>
            </Localized>
            <Localized id="vr-activity-format-6"
              presentationLink={<a href="https://github.com/aframevr/aframe-presentation-kit">A-Frame Presentation Kit</a>}>
              <li>Download and customize the <a href="https://github.com/aframevr/aframe-presentation-kit">A-Frame Presentation Kit</a></li>
            </Localized>
            <Localized id="vr-activity-format-7"
              awesomeLink={<a href="https://github.com/aframevr/awesome-aframe">awesome-aframe</a>}>
              <li>Create a few scenes for demo &amp; prototyping purposes. You can find examples on <a href="https://github.com/aframevr/awesome-aframe">awesome-aframe</a></li>
            </Localized>
            <Localized id="vr-activity-format-8">
              <li>Acquire headsets to use and demo. Google Cardboard can be acquired in some locations for less than $5 a set. We recommend 5 headsets for an event of 20-30 people. You can request budget of up to $50 maximum for these headsets but you will have to buy them yourself.</li>
            </Localized>
          </ol>

          <Localized id="vr-activity-format-9">
            <strong>1 Week Before the Event</strong>
          </Localized>

          <ol>
            <Localized id="vr-activity-format-10">
              <li>Confirmed selected attendees through email.</li>
            </Localized>
            <Localized id="vr-activity-format-11">
              <li>Distribute the following list of tasks to do before event:</li>
            </Localized>
            <ol>
              <Localized id="vr-activity-format-12">
                <li>Create a GitHub account if they don’t have one</li>
              </Localized>
              <Localized id="vr-activity-format-13"
                contributeLink={<a href="https://github.com/aframevr/aframe/blob/master/CONTRIBUTING.md">read about areas to contribute</a>}
                aframeLink={<a href="https://aframe.io/">A-Frame</a> }>
                <li>Get familiar with <a href="https://aframe.io/">A-Frame</a> and <a href="https://github.com/aframevr/aframe/blob/master/CONTRIBUTING.md">read about areas to contribute</a></li>
              </Localized>
              <Localized id="vr-activity-format-14"
                slackLink={<a href="https://aframevr-slack.herokuapp.com/">A-Frame Slack Channel</a>}>
                <li>Join the <a href="https://aframevr-slack.herokuapp.com/">A-Frame Slack Channel</a></li>
              </Localized>
              <Localized id="vr-activity-format-15"
                worldScene={<a href="https://codepen.io/mozvr/pen/BjygdO">Hello World scene</a>}
                docLink={<a href="https://aframe.io/docs/0.3.0/introduction/getting-started.html">documentation</a>}>
                <li>[Optional] Play with A-Frame, starting with a <a href="https://codepen.io/mozvr/pen/BjygdO">Hello World scene</a>. Skim through the <a href="https://aframe.io/docs/0.3.0/introduction/getting-started.html">documentation</a>.</li>
              </Localized>
            </ol>
          </ol>

          <Localized id="vr-activity-flow">
            <h2 id="event-flow">Event Flow</h2>
          </Localized>

          <Localized id="vr-activity-flow-1">
            <p>This is how you can break up a 4 hour event format. You can try to shorten some sections if you want to do it quicker.</p>
          </Localized>

          <Localized id="vr-activity-flow-2">
            <strong>Getting Started (30 minutes)</strong>
          </Localized>

          <ul>
            <Localized id="vr-activity-flow-3"
              ballLink={<a href="http://businessmajors.about.com/od/icebreakers/a/Icebreaker8.htm">catch the ball</a>}>
              <li>Introduction of speakers and attendees with an ice breaker session (e.g., <a href="http://businessmajors.about.com/od/icebreakers/a/Icebreaker8.htm">catch the ball</a>)</li>
            </Localized>
            <Localized id="vr-activity-flow-4"
              missionLink={<a href="https://www.mozilla.org/mission/">Mozilla’s mission</a>}>
              <li>About <a href="https://www.mozilla.org/mission/">Mozilla’s mission</a> as a non-profit and community-focused organization.</li>
            </Localized>
            <Localized id="vr-activity-flow-5"
              blogLink={<a href="https://gurumukhi.wordpress.com/2016/09/21/a-frame-for-vr-development-on-web/">VR, WebVR &amp; A-Frame</a>}>
              <li>About <a href="https://gurumukhi.wordpress.com/2016/09/21/a-frame-for-vr-development-on-web/">VR, WebVR &amp; A-Frame</a></li>
            </Localized>
            <Localized id="vr-activity-flow-6">
              <li>Quickly note social tags: #MozActivate, #WebVRCamp, @mozillavr</li>
            </Localized>
          </ul>

          <Localized id="vr-activity-flow-7"
            conceptLink={<a href="https://aframe.io/docs/0.3.0/introduction/">Concepts</a>}>
            <strong>A-Frame <a href="https://aframe.io/docs/0.3.0/introduction/">Concepts</a> (30 minutes)</strong>
          </Localized>

          <ul>
            <Localized id="vr-activity-flow-8"
              demoLink={<a href="http://aframe.io/examples">Demo</a>}
              weekLink={<a href="https://aframe.io/blog/">A Week of A-Frame</a>}>
              <li><a href="http://aframe.io/examples">Demo</a> of basic A-Frame scenes &amp; apps. More examples at <a href="https://aframe.io/blog/">A Week of A-Frame</a></li>
            </Localized>
            <Localized id="vr-activity-flow-9"
              apainterLink={<a href="https://blog.mozvr.com/a-painter/">A-Painter</a>}>
              <li>Show off <a href="https://blog.mozvr.com/a-painter/">A-Painter</a></li>
            </Localized>
            <Localized id="vr-activity-flow-10"
              patternLink={<a href="https://aframe.io/docs/0.3.0/introduction/#entity-component-system">entity-component-system pattern</a>}>
              <li>Introduce HTML tags. If audience is more technical, also introduce the <a href="https://aframe.io/docs/0.3.0/introduction/#entity-component-system">entity-component-system pattern</a></li>
            </Localized>
          </ul>

          <Localized id="vr-activity-flow-11">
            <strong>Time to Hack (1 hour)</strong>
          </Localized>

          <ul>
            <Localized id="vr-activity-flow-12">
              <li>Propose your idea of VR experiences to build</li>
            </Localized>
            <Localized id="vr-activity-flow-13"
              codepenLink={<a href="http://codepen.io/mozvr/pen/BjygdO">Codepen</a>}
              boilerplateLink={<a href="https://github.com/aframevr/aframe-boilerplate">Boilerplate</a>}>
              <li>Can get started with <a href="http://codepen.io/mozvr/pen/BjygdO">Codepen</a> or the <a href="https://github.com/aframevr/aframe-boilerplate">Boilerplate</a></li>
            </Localized>
            <ul>
              <Localized id="vr-activity-flow-14"
              mongooseLink={<a href="https://www.cesanta.com/products/binary">Mongoose</a>}>
                <li>For the boilerplate, we recommend using a local server such as <a href="https://www.cesanta.com/products/binary">Mongoose</a> or through Node.js.</li>
              </Localized>
            </ul>
          </ul>

          <Localized id="vr-activity-flow-15">
            <strong>More About A-Frame (30 minutes)</strong>
          </Localized>

          <ul>
            <Localized id="vr-activity-flow-16">
              <li>A-Frame in depth (e.g., demo of advanced scenes, how are they built, using community components)</li>
            </Localized>
          </ul>

          <Localized id="vr-activity-flow-17">
            <strong>Continue Hacking (1 hour)</strong>
          </Localized>

          <ul>
            <Localized id="vr-activity-flow-18">
              <li>Improve your VR experience or build something else using more advanced concepts</li>
            </Localized>
          </ul>

          <Localized id="vr-activity-flow-19">
            <strong>Review &amp; Plan (30 minutes)</strong>
          </Localized>

          <ul>
            <Localized id="vr-activity-flow-20">
              <li>Review the whole event</li>
            </Localized>
            <Localized id="vr-activity-flow-21"
              communityLink={<a href="http://aframe.io/community/">A-Frame community</a>}>
              <li>Talk about <a href="http://aframe.io/community/">A-Frame community</a>. Don’t forget to mention if you have a separate communication medium to connect with the local WebVR community (e.g., WebVR-India telegram group)</li>
            </Localized>
            <Localized id="vr-activity-flow-22">
              <li>Discuss takeaways</li>
            </Localized>
            <Localized id="vr-activity-flow-23">
              <li>Discuss individual action plans and follow-up plans</li>
            </Localized>
          </ul>

          <Localized id="vr-activity-end">
            <h2 id="directly-at-the-end-of-the-activity">Directly at the end of the activity</h2>
          </Localized>

          <Localized id="vr-activity-end-1">
            <p>Immediately after the event don’t forget to share the link to the impact form with your attendees:</p>
          </Localized>

          <p className="attention-link"><a href="http://mzl.la/howwasit">mzl.la/howwasit</a></p>

          <Localized id="vr-activity-end-2">
            <p>Remember this is how you’ll know who attended your event, and if you successfully inspired them to action! We recommend adding it to your final slide AND emailing it out after the event.</p>
          </Localized>

          <Localized id="vr-activity-output">
            <h2 id="output">Output</h2>
          </Localized>

          <Localized id="vr-activity-output-1">
            <p>Additional to the recommended event flow here are some things we’d like you, the event organizer, to do.</p>
          </Localized>

          <ul>
            <Localized id="vr-activity-output-2">
              <li>Fill out the post-event metrics on the event page you set up on the Reps portal</li>
            </Localized>
            <Localized id="vr-activity-output-3">
              <li>Thank-You email to attendees with:</li>
            </Localized>
            <ul>
              <Localized id="vr-activity-output-4">
                <li>A feedback form</li>
              </Localized>
              <Localized id="vr-activity-output-5">
                <li>Suggestion to Tweet their experience. Mention @mozillavr, #MozActivate, and #WebVRCamp</li>
              </Localized>
              <Localized id="vr-activity-output-6">
                <li>Suggestion to write a blog post and share</li>
              </Localized>
              <Localized id="vr-activity-output-7">
                <li>Important links</li>
              </Localized>
            </ul>
            <Localized id="vr-activity-output-8">
              <li>Send an event report or blog post and photo-stream link either over Twitter or Slack.</li>
            </Localized>
            <Localized id="vr-activity-output-9"
              discourseLink={<a href="https://discourse.mozilla-community.org/t/activate-mozilla-webvr-camp/11190">this Discourse thread</a>}>
              <li>Share a summary <a href="https://discourse.mozilla-community.org/t/activate-mozilla-webvr-camp/11190">this Discourse thread</a></li>
            </Localized>
          </ul>

          <Localized id="vr-activity-contact">
            <h2 id="contact">Contact</h2>
          </Localized>

          <Localized id="vr-activity-contact-1"
            slackLink={<a href="https://aframevr-slack.herokuapp.com/">A-Frame Slack channel</a>}
            twitterLink={<a href="https://twitter.com/aframevr">@aframevr</a>}
            communityLink={<a href="https://aframe.io/community/">A-Frame community page</a>}>
            <p>Want to find out more about the A-Frame community? Ping us on the <a href="https://aframevr-slack.herokuapp.com/">A-Frame Slack channel</a> or Tweet at us <a href="https://twitter.com/aframevr">@aframevr</a>. Visit the <a href="https://aframe.io/community/">A-Frame community page</a> for more details.</p>
          </Localized>
        </Col>

        <Col lg={3} md={3} sm={3} smPull={9} className="sidebar">
          <Localized id="vr-activity-impact">
            <h2 id="impact-and-metrics">Impact and Metrics</h2>
          </Localized>

          <Localized id="vr-activity-goals">
            <h3 id="goals-for-this-area">Goals for this area</h3>
          </Localized>

          <Localized id="vr-activity-impact-1">
            <strong>Impact:</strong>
          </Localized>

          <ul>
            <Localized id="vr-activity-impact-2"
              slackLink={<a href="https://aframe.io/community/#a-frame">A-Frame Slack channel</a>}>
              <li>200 people signed up to the <a href="https://aframe.io/community/#a-frame">A-Frame Slack channel</a></li>
            </Localized>
            <Localized id="vr-activity-impact-3">
              <li>100 projects built in or for A-Frame</li>
            </Localized>
            <Localized id="vr-activity-impact-4">
              <li>20 blog posts about events, activities, experiences, projects, or tutorials.</li>
            </Localized>
            <Localized id="vr-activity-impact-5">
              <li>500 social shares with #MozActivate, #WebVRCamp, @aframevr, @mozillavr</li>
            </Localized>
          </ul>

          <Localized id="vr-activity-strength">
            <strong>Strength:</strong>
          </Localized>

          <ul>
            <Localized id="vr-activity-strength-2">
              <li>20 Mobilizers activated</li>
            </Localized>
            <Localized id="vr-activity-strength-3">
              <li>30 events</li>
            </Localized>
            <Localized id="vr-activity-strength-4">
              <li>400 people are introduced to and starting to build with A-Frame</li>
            </Localized>
          </ul>

          <Localized id="vr-activity-audience">
            <h2 id="audience-for-this-activity">Audience for this activity</h2>
          </Localized>

          <Localized id="vr-activity-audience-1">
            <p>Your audience for this event should be anyone interested in virtual reality including web developers, designers and students. The audience should have a basic grasp of HTML.</p>
          </Localized>
        </Col>

      </ActivityDetail>
    );
  }
}

export default WebVRCamp;
