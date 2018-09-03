import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Localized } from 'fluent-react/compat';

import ActivityDetail from './ActivityDetail';

class RustHack extends Component {
  render() {
    return (
      <ActivityDetail
        titleImage="/images/rust-post-header.png"
        titleKey="rust-title"
        durationKey="rust-duration">

        <Col lg={9} md={9} sm={9} xs={12}>

          <Localized id="rust-activity-intro">
            <p class="alert alert-info impactbox"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
            Having more developers understand, use and evangelize this language will advance make the web better and more secure. Rust is also a great way to learn about WebAssembly.</p>
          </Localized>

          <Localized id="rust-activity-general"
            moreLink={<a href="https://www.rust-lang.org">Find out more…</a>}>
            <p>Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. <a href="https://www.rust-lang.org">Find out more…</a></p>
          </Localized>

          <iframe src="https://www.youtube.com/embed/8EPsnf_ZYU0" title="Rust intro" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>

          <Localized id="rust-activity-format">
            <h2 id="activity-format">Activity Format</h2>
          </Localized>

          <Localized id="rust-activity-duration">
            <p>For duration, we recommend at least a 2-3 hours event with a minimum of 10 attendees.</p>
          </Localized>

          <ol>
            <Localized id="rust-activity-setup-1"
              calendarLink={<a href="https://calendar.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc@group.calendar.google.com">Rust Community Calendar</a>}
              mailLink={<a href="mailto:community@rust-lang.org">Rust Community Team</a>}>
              <li>Put an event team together. Going alone is fine, but at least two people is advisable. Check the <a href="https://calendar.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc@group.calendar.google.com">Rust Community Calendar</a> - maybe there’s already people in your area. You can also get in touch with the <a href="mailto:community@rust-lang.org">Rust Community Team</a> for additional support.</li>
            </Localized>
            <Localized id="rust-activity-setup-2">
              <li>Try to find people with Rust experience who want to help. If you find none, this is fine - many Hack and Learns started out by curious people.</li>
            </Localized>
          </ol>

          <Localized id="rust-activity-setup-3"
            pastEventsLink={<a href="https://reps.mozilla.org/events/#/period/past/category/rust/">past Mozilla Reps events</a>}>
            <p>Some Mozillians have already done such sessions. For example see <a href="https://reps.mozilla.org/events/#/period/past/category/rust/">past Mozilla Reps events</a>.</p>
          </Localized>

          <Localized id="rust-activity-before">
            <strong>2-4 Weeks Before the Event</strong>
          </Localized>

          <ol>
            <Localized id="rust-activity-before-1"
              eventGuideLink={<a href="/eventguide/">event guide</a>}>
              <li>Read the <a href="/eventguide/">event guide</a> on how to set up an event page and how to organize an event.</li>
            </Localized>
            <Localized id="rust-activity-before-2">
              <li>Choose a date and secure a venue.</li>
            </Localized>
            <Localized id="rust-activity-before-3"
              issueLink={<a href="https://github.com/rust-community/events-team/issues/new?template=new_meetup.md&amp;labels=meetup,mozilla-activate">event template</a>}
              swagLink={<a href="mailto:community@rust-lang.org?subject=[SWAG]">Rust Community Team</a>}>
              <li>Fill the <a href="https://github.com/rust-community/events-team/issues/new?template=new_meetup.md&amp;labels=meetup,mozilla-activate">event template</a> for access to the calendar so that you can enter it there.  It will then be sent around with Rust’s weekly newsletter and promoted in other fashions. You can also ask the <a href="mailto:community@rust-lang.org?subject=[SWAG]">Rust Community Team</a> if they can send some stickers.</li>
            </Localized>
            <Localized id="rust-activity-before-4"
              instructionLink={<a href="https://wiki.mozilla.org/ReMo/SOPs/Event_hosting">instructions</a>}>
              <li>Setup the event on the Reps Portal (<a href="https://wiki.mozilla.org/ReMo/SOPs/Event_hosting">instructions</a>). Please make sure the initiative is set to “MozActivate” and the functional area indicates “Rust”.</li>
            </Localized>
          </ol>

          <Localized id="rust-activity-before2">
            <strong>1 Week Before the Event</strong>
          </Localized>

          <ol>
            <Localized id="rust-activity-before2-1"
              materialLink={<a href="https://github.com/rust-community/resources">Material</a>}>
              <li>Get <a href="https://github.com/rust-community/resources">Material</a> and print them to hand them out.</li>
            </Localized>
            <Localized id="rust-activity-before2-2">
              <li>Promote your event locally and online.</li>
            </Localized>
          </ol>

          <Localized id="rust-activity-flow">
            <h2 id="event-flow">Event Flow</h2>
          </Localized>

          <Localized id="rust-activity-flow-1">
            <p>Hack &amp; Learn are mainly structureless, which allows for people of all experience levels to feel great. They can follow their interests and can interact with people. As an organiser, you can try to also bring your own project, please note that you will the first point of contact for problems.</p>
          </Localized>

          <ul>
            <Localized id="rust-activity-flow-2">
              <li>Give people some time to get in and wait 5-10 minutes to get them set up and comfortable</li>
            </Localized>
            <Localized id="rust-activity-flow-3">
              <li>Do an intro round (5 minutes). Ask everyone for:</li>
            </Localized>
            <ul>
              <Localized id="rust-activity-flow-4">
                <li>Who they are</li>
              </Localized>
              <Localized id="rust-activity-flow-5">
                <li>What previous programming experiences they have</li>
              </Localized>
              <Localized id="rust-activity-flow-6">
                <li>What they intend to work on (or if they are searching for a project)</li>
              </Localized>
            </ul>
            <Localized id="rust-activity-flow-7">
              <li>Encourage people to group up or work alone</li>
            </Localized>
            <Localized id="rust-activity-flow-8">
              <li>Introduce new people to the existing resources</li>
            </Localized>
            <Localized id="rust-activity-flow-9">
              <li>Help people that don’t have a project to find one</li>
            </Localized>
            <Localized id="rust-activity-flow-10">
              <li>Open time: people should just work on whatever they have. Some people will just chat, make sure they don’t disturb others.</li>
            </Localized>
            <Localized id="rust-activity-flow-11">
              <li>Closing: go through the group again and ask people for their progress.</li>
            </Localized>
            <ul>
              <Localized id="rust-activity-flow-12"
                stLink={<a href="https://en.wikipedia.org/wiki/Show_and_tell_(education)">Show &amp; Tell</a>}>
                <li>If time allows, make a <a href="https://en.wikipedia.org/wiki/Show_and_tell_(education)">Show &amp; Tell</a> and have people actually present their learnings in a very short talk.</li>
              </Localized>
            </ul>
            <Localized id="rust-activity-flow-13">
              <li>If this is the first time you run it: ask people about their schedules and try to find a regular date for repeats.</li>
            </Localized>
          </ul>

          <Localized id="rust-activity-flow-14">
            <p>If the event is just 2 hours long, keep the intro and the closing short. If you spend 2.5 hours or more, you can spend more time on the closing. If the event is even longer, consider running something by the middle of it, to give people a moment to step away from the project.</p>
          </Localized>

          <Localized id="rust-activity-end">
            <h2 id="directly-at-the-end-of-the-activity">Directly at the end of the activity</h2>
          </Localized>

          <Localized id="rust-activity-end-1">
            <p>Immediately after the event don’t forget to share the link to the impact form with your attendees:</p>
          </Localized>

          <p class="attention-link"><a href="http://mzl.la/howwasit">mzl.la/howwasit</a></p>

          <Localized id="rust-activity-end-2">
            <p>Remember this is how you’ll know who attended your event, and if you successfully inspired them to action! We recommend adding it to your final slide AND emailing it out after the event.</p>
          </Localized>

          <Localized id="rust-activity-resources">
            <h2 id="other-resources">Other Resources</h2>
          </Localized>

          <Localized id="rust-activity-resources-1">
            <h3 id="tutorials">Tutorials</h3>
          </Localized>

          <Localized id="rust-activity-resources-2">
            <h4 id="learn-by-example">Learn by Example</h4>
          </Localized>

          <ul>
            <Localized id="rust-activity-resources-3"
              rLink={<a href="https://github.com/carols10cents/rustlings">Getting used to reading and writing Rust code</a>}>
              <li><a href="https://github.com/carols10cents/rustlings">Getting used to reading and writing Rust code</a></li>
            </Localized>
            <Localized id="rust-activity-resources-4"
              rLink={<a href="http://exercism.io/languages/rust/about">“Exercism” coding challenges</a>}>
              <li><a href="http://exercism.io/languages/rust/about">“Exercism” coding challenges</a></li>
            </Localized>
            <Localized id="rust-activity-resources-5"
              rLink={<a href="https://rustbyexample.com/index.html">“Rust by Example”</a>}>
              <li><a href="https://rustbyexample.com/index.html">“Rust by Example”</a></li>
            </Localized>
          </ul>

          <Localized id="rust-activity-resources-6">
            <h4 id="visual-learning">Visual learning</h4>
          </Localized>

          <ul>
            <Localized id="rust-activity-resources-7"
              rLink={<a href="http://intorust.com/">“Into Rust”, a series of introductory screencasts about Rust</a>}>
              <li><a href="http://intorust.com/">“Into Rust”, a series of introductory screencasts about Rust</a></li>
            </Localized>
            <Localized id="rust-activity-resources-8"
              rLink={<a href="https://www.youtube.com/playlist?list=PL0Fqs05rod8D80WKBCeT326CT8vcAm_N9">A video tutorial series about Rust</a>}>
              <li><a href="https://www.youtube.com/playlist?list=PL0Fqs05rod8D80WKBCeT326CT8vcAm_N9">A video tutorial series about Rust</a></li>
            </Localized>
          </ul>

          <Localized id="rust-activity-resources-9">
            <h4 id="coming-from-other-programming-languages">Coming from other programming languages</h4>
          </Localized>

          <ul>
            <Localized id="rust-activity-resources-10"
              rLink={<a href="http://www.rustforrubyists.com/book/book.html">Ruby developers</a>}>
              <li><a href="http://www.rustforrubyists.com/book/book.html">Ruby developers</a></li>
            </Localized>
            <Localized id="rust-activity-resources-11"
              rLink={<a href="https://github.com/Mercateo/rust-for-node-developers#rust-for-node-developers">node.js developers</a>}>
              <li><a href="https://github.com/Mercateo/rust-for-node-developers#rust-for-node-developers">node.js developers</a></li>
            </Localized>
            <Localized id="rust-activity-resources-12"
              rLink={<a href="https://mixitconf.org/en/2017/rust-for-java-developers">Java developers</a>}>
              <li><a href="https://mixitconf.org/en/2017/rust-for-java-developers">Java developers</a></li>
            </Localized>
            <Localized id="rust-activity-resources-13"
              rLink={<a href="https://github.com/nrc/r4cppp#rust-for-systems-programmers">C++ developers</a>}>
              <li><a href="https://github.com/nrc/r4cppp#rust-for-systems-programmers">C++ developers</a></li>
            </Localized>
            <Localized id="rust-activity-resources-14"
              rLink={<a href="http://lucumr.pocoo.org/2015/5/27/rust-for-pythonistas/">Python developers</a>}>
              <li><a href="http://lucumr.pocoo.org/2015/5/27/rust-for-pythonistas/">Python developers</a></li>
            </Localized>
          </ul>

          <Localized id="rust-activity-output">
            <h2 id="output">Output</h2>
          </Localized>

          <Localized id="rust-activity-output-general">
            <p>In addition to the recommended event flow here are some things we’d like you, the event organizer, to do:</p>
          </Localized>

          <ul>
            <Localized id="rust-activity-output-1">
              <li>Fill out the post-event metrics on the event page you setup on the Reps portal</li>
            </Localized>
            <Localized id="rust-activity-output-2">
              <li>Share your own experience on social media and encourage your attendees to do so as well:</li>
            </Localized>
            <ul>
              <Localized id="rust-activity-output-3"
                hashtagLink={<a href="https://twitter.com/search?f=tweets&amp;q=%23RustActivate&amp;src=typd">#RustActivate</a>}>
                <li>use the hashtag <a href="https://twitter.com/search?f=tweets&amp;q=%23RustActivate&amp;src=typd">#RustActivate</a></li>
              </Localized>
              <Localized id="rust-activity-output-4"
                twitterLink={<a href="https://twitter.com/rustlang">@rustlang</a>}>
                <li>mention the <a href="https://twitter.com/rustlang">@rustlang</a> account so they can RT you!</li>
              </Localized>
              <Localized id="rust-activity-output-5">
                <li>link to a GitHub project or blogpost to show off your work!</li>
              </Localized>
              <Localized id="rust-activity-output-6">
                <li>take a “family photo” of your group members (make sure to get permission from everyone first!)</li>
              </Localized>
            </ul>
          </ul>

          <Localized id="rust-activity-extra">
            <h2 id="extra">Extra</h2>
          </Localized>

          <Localized id="rust-activity-extra-1">
            <p>While the focus of this activity should be on these events, people can get more involved with the Rust community after.</p>
          </Localized>

          <ul>
            <Localized id="rust-activity-extra-2"
              moreLink={<a href="https://www.rust-lang.org/community.html">more things happening in the community to get involved with</a>}>
              <li>Follow up with attendees to highlight <a href="https://www.rust-lang.org/community.html">more things happening in the community to get involved with</a></li>
            </Localized>
          </ul>

        </Col>

        <Col lg={3} md={3} sm={3} className="sidebar hidden-xs">
          <Localized id="rust-activity-impact">
            <h2 id="impact-and-metrics">Impact and Metrics</h2>
          </Localized>

          <Localized id="rust-activity-impact-1">
            <p>The Rust programming language will be important to the future of the web, making it safe and great. Having more developers understand, use and evangelize this language will advance make the web better and more secure.</p>
          </Localized>

          <Localized id="rust-activity-impact-2">
            <p>Rust is used extensively for Mozilla projects – including this year as Servo (written in Rust) is advanced even further, and parts of it are moved into Gecko/Firefox. Having more Mozilla contributors know Rust will give them a chance to contribute to the most exciting and important technical projects coming up for Mozilla.</p>
          </Localized>

          <Localized id="rust-activity-impact-3">
            <p>Rust is also a good subject to get people closer to Mozilla gradually, as it has smaller project sizes and potential for individual contribution - for example by writing a useful library.</p>
          </Localized>

          <Localized id="rust-activity-goals">
            <h3 id="goals-for-this-area">Goals for this area</h3>
          </Localized>

          <Localized id="rust-activity-impact-4">
            <strong>Impact:</strong>
          </Localized>

          <ul>
            <Localized id="rust-activity-impact-5">
              <li>1,000 programmers are introduced to and are well on their way to learning Rust</li>
            </Localized>
            <Localized id="rust-activity-impact-6">
              <li>10 ongoing Rust Hack and Learn events</li>
            </Localized>
            <Localized id="rust-activity-impact-7">
              <li>500 social media shares</li>
            </Localized>
            <Localized id="rust-activity-impact-8">
              <li>Each organizer schedules 3 Rust Hack and Learn events</li>
            </Localized>
          </ul>

          <Localized id="rust-activity-strength">
            <strong>Strength:</strong>
          </Localized>

          <ul>
            <Localized id="rust-activity-strength-1">
              <li>50 Mozillians organize Rust Hack and Learn events</li>
            </Localized>
            <Localized id="rust-activity-strength-2"
              rustTeamLink={<a href="https://www.rust-lang.org/team.html">Rust teams</a>}>
              <li>1-2 people join <a href="https://www.rust-lang.org/team.html">Rust teams</a></li>
            </Localized>
          </ul>

          <Localized id="rust-activity-audience">
            <h2 id="audience-for-this-activity">Audience for this activity</h2>
          </Localized>

          <Localized id="rust-activity-audience-1">
            <p>Your audience for this event should be programmers of all kinds. Some outreach to beginners can be done.</p>
          </Localized>
        </Col>

      </ActivityDetail>
    );
  }
}

export default RustHack;
