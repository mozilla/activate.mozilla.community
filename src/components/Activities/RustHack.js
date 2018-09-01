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

          <p class="alert alert-info impactbox"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
          Having more developers understand, use and evangelize this language will advance make the web better and more secure. Rust is also a great way to learn about WebAssembly.</p>

            <p>Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. <a href="https://www.rust-lang.org">Find out more…</a></p>

            <p>
            <iframe src="https://www.youtube.com/embed/8EPsnf_ZYU0" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
          </p>

          <h2 id="activity-format">Activity Format</h2>

          <p>For duration, we recommend at least a 2-3 hours event with a minimum of 10 attendees.</p>

          <ol>
            <li>Put an event team together. Going alone is fine, but at least two people is advisable. Check the <a href="https://calendar.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc@group.calendar.google.com">Rust Community Calendar</a> - maybe there’s already people in your area. You can also get in touch with the <a href="mailto:community@rust-lang.org">Rust Community Team</a> for additional support.</li>
            <li>Try to find people with Rust experience who want to help. If you find none, this is fine - many Hack and Learns started out by curious people.</li>
          </ol>

          <p>Some Mozillians have already done such sessions. For example see <a href="https://reps.mozilla.org/events/#/period/past/category/rust/">past Mozilla Reps events</a>.</p>

          <p><strong>2-4 Weeks Before the Event</strong></p>

          <ol>
            <li>Read the <a href="/eventguide/">event guide</a> on how to set up an event page and how to organize an event.</li>
            <li>Choose a date and secure a venue.</li>
            <li>Fill the <a href="https://github.com/rust-community/events-team/issues/new?template=new_meetup.md&amp;labels=meetup,mozilla-activate">event template</a> for access to the calendar so that you can enter it there.  It will then be sent around with Rust’s weekly newsletter and promoted in other fashions. You can also ask the <a href="mailto:community@rust-lang.org?subject=[SWAG]">Rust Community Team</a> if they can send some stickers.</li>
            <li>Setup the event on the Reps Portal (<a href="https://wiki.mozilla.org/ReMo/SOPs/Event_hosting">instructions</a>). Please make sure the initiative is set to “MozActivate” and the functional area indicates “Rust”.</li>
          </ol>

          <p><strong>1 Week Before the Event</strong></p>

          <ol>
            <li>Get <a href="https://github.com/rust-community/resources">Material</a> and print them to hand them out.</li>
            <li>Promote your event locally and online.</li>
          </ol>

          <h2 id="event-flow">Event Flow</h2>

          <p>Hack &amp; Learn are mainly structureless, which allows for people of all experience levels to feel great. They can follow their interests and can interact with people. As an organiser, you can try to also bring your own project, please note that you will the first point of contact for problems.</p>

          <ul>
            <li>Give people some time to get in and wait 5-10 minutes to get them set up and comfortable</li>
            <li>Do an intro round (5 minutes). Ask everyone for:
              <ul>
                <li>Who they are</li>
                <li>What previous programming experiences they have</li>
                <li>What they intend to work on (or if they are searching for a project)</li>
              </ul>
            </li>
            <li>Encourage people to group up or work alone</li>
            <li>Introduce new people to the existing resources</li>
            <li>Help people that don’t have a project to find one</li>
            <li>Open time: people should just work on whatever they have. Some people will just chat, make sure they don’t disturb others.</li>
            <li>Closing: go through the group again and ask people for their progress.
              <ul>
                <li>If time allows, make a <a href="https://en.wikipedia.org/wiki/Show_and_tell_(education)">Show &amp; Tell</a> and have people actually present their learnings in a very short talk.</li>
              </ul>
            </li>
            <li>If this is the first time you run it: ask people about their schedules and try to find a regular date for repeats.</li>
          </ul>

          <p>If the event is just 2 hours long, keep the intro and the closing short. If you spend 2.5 hours or more, you can spend more time on the closing. If the event is even longer, consider running something by the middle of it, to give people a moment to step away from the project.</p>

          <h2 id="directly-at-the-end-of-the-activity">Directly at the end of the activity</h2>
          <p>Immediately after the event don’t forget to share the link to the impact form with your attendees:</p>

          <p class="attention-link"><a href="http://mzl.la/howwasit">mzl.la/howwasit</a></p>

          <p>Remember this is how you’ll know who attended your event, and if you successfully inspired them to action! We recommend adding it to your final slide AND emailing it out after the event.</p>

          <h2 id="other-resources">Other Resources</h2>

          <h3 id="tutorials">Tutorials</h3>

          <h4 id="learn-by-example">Learn by Example</h4>

          <ul>
            <li><a href="https://github.com/carols10cents/rustlings">Getting used to reading and writing Rust code</a></li>
            <li><a href="http://exercism.io/languages/rust/about">“Exercism” coding challenges</a></li>
            <li><a href="https://rustbyexample.com/index.html">“Rust by Example”</a></li>
          </ul>

          <h4 id="visual-learning">Visual learning</h4>

          <ul>
            <li><a href="http://intorust.com/">“Into Rust”, a series of introductory screencasts about Rust</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PL0Fqs05rod8D80WKBCeT326CT8vcAm_N9">A video tutorial series about Rust</a></li>
          </ul>

          <h4 id="coming-from-other-programming-languages">Coming from other programming languages</h4>

          <ul>
            <li><a href="http://www.rustforrubyists.com/book/book.html">Ruby developers</a></li>
            <li><a href="https://github.com/Mercateo/rust-for-node-developers#rust-for-node-developers">node.js developers</a></li>
            <li><a href="https://mixitconf.org/en/2017/rust-for-java-developers">Java developers</a></li>
            <li><a href="https://github.com/nrc/r4cppp#rust-for-systems-programmers">C++ developers</a></li>
            <li><a href="http://lucumr.pocoo.org/2015/5/27/rust-for-pythonistas/">Python developers</a></li>
          </ul>

          <h2 id="output">Output</h2>
          <p>In addition to the recommended event flow here are some things we’d like you, the event organizer, to do:</p>

          <ul>
            <li>Fill out the post-event metrics on the event page you setup on the Reps portal</li>
            <li>Share your own experience on social media and encourage your attendees to do so as well:
              <ul>
                <li>use the hashtag <a href="https://twitter.com/search?f=tweets&amp;q=%23RustActivate&amp;src=typd">#RustActivate</a></li>
                <li>mention the <a href="https://twitter.com/rustlang">@rustlang</a> account so they can RT you!</li>
                <li>link to a GitHub project or blogpost to show off your work!</li>
                <li>take a “family photo” of your group members (make sure to get permission from everyone first!)</li>
              </ul>
            </li>
          </ul>

          <h2 id="extra">Extra</h2>
          <p>While the focus of this activity should be on these events, people can get more involved with the Rust community after.</p>

          <ul>
            <li>Follow up with attendees to highlight <a href="https://www.rust-lang.org/en-US/community.html">more things happening in the community to get involved with</a></li>
          </ul>

        </Col>

        <Col lg={3} md={3} sm={3} className="sidebar hidden-xs">
          <h2 id="impact-and-metrics">Impact and Metrics</h2>

          <p>The Rust programming language will be important to the future of the web, making it safe and great. Having more developers understand, use and evangelize this language will advance make the web better and more secure.</p>

          <p>Rust is used extensively for Mozilla projects – including this year as Servo (written in Rust) is advanced even further, and parts of it are moved into Gecko/Firefox. Having more Mozilla contributors know Rust will give them a chance to contribute to the most exciting and important technical projects coming up for Mozilla.</p>

          <p>Rust is also a good subject to get people closer to Mozilla gradually, as it has smaller project sizes and potential for individual contribution - for example by writing a useful library.</p>

          <h3 id="goals-for-this-area">Goals for this area</h3>

          <p><strong>Impact:</strong></p>

          <ul>
            <li>1,000 programmers are introduced to and are well on their way to learning Rust</li>
            <li>10 ongoing Rust Hack and Learn events</li>
            <li>500 social media shares</li>
            <li>Each organizer schedules 3 Rust Hack and Learn events</li>
          </ul>

          <p><strong>Strength:</strong></p>

          <ul>
            <li>50 Mozillians organize Rust Hack and Learn events</li>
            <li>1-2 people join <a href="https://www.rust-lang.org/en-US/team.html">Rust teams</a></li>
          </ul>

          <h2 id="audience-for-this-activity">Audience for this activity</h2>

          <p>Your audience for this event should be <strong>programmers of all kinds</strong>. Some outreach to beginners can be done.</p>
        </Col>

      </ActivityDetail>
    );
  }
}

export default RustHack;
