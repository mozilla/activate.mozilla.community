import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import DocumentTitle from 'react-document-title';
import {Toggle, ToggleItem} from './../Toggle.js'
import ActivityDetail from './ActivityDetail';
import { SidebarItem } from './../Sidebar.js'

class RustHack extends Component {
  buildSidebarContent = () => {
    return (
      <div>
        <SidebarItem titleKey="rust-activity-goals" >
          <Localized id="rust-activity-impact-1">
            <p></p>
          </Localized>

          <Localized id="rust-activity-impact-2">
            <p></p>
          </Localized>

          <Localized id="rust-activity-impact-3">
            <p></p>
          </Localized>
        </SidebarItem>

        <SidebarItem titleKey="rust-activity-impact-4" >
          <ul>
            <Localized id="rust-activity-impact-5">
              <li></li>
            </Localized>
            <Localized id="rust-activity-impact-6">
              <li></li>
            </Localized>
            <Localized id="rust-activity-impact-7">
              <li></li>
            </Localized>
            <Localized id="rust-activity-impact-8">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>
        <SidebarItem titleKey="rust-activity-strength">
          <ul>
            <Localized id="rust-activity-strength-1">
              <li></li>
            </Localized>
            <Localized id="rust-activity-strength-2"
              rustTeamLink={<a href="https://www.rust-lang.org/team.html">Rust teams</a>}>
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem titleKey="rust-activity-audience" type="audience">
          <Localized id="rust-activity-audience-1">
            <p></p>
          </Localized>
        </SidebarItem>
      </ div>
    );
  };

  buildMainContentTop = () => {
    return (
      <div>
        <Localized id="rust-activity-intro">
          <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></p>
        </Localized>

        <Localized id="rust-activity-general"
            moreLink={<a href="https://www.rust-lang.org">Find out more…</a>}>
          <p></p>
        </Localized>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/8EPsnf_ZYU0" title="Rust intro" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
        </div>
      </ div>
    );
  };

  buildMainContentToggleItems = () => {
    return (
      <div>
        {/* Activity Format */}
        <Toggle
          titleKey="rust-activity-format"
          id="activity-format"
        >
          <Localized id="rust-activity-duration">
            <p></p>
          </Localized>

          <ol>
            <Localized id="rust-activity-setup-1"
              calendarLink={<a href="https://calendar.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc@group.calendar.google.com">Rust Community Calendar</a>}
              mailLink={<a href="mailto:community@rust-lang.org">Rust Community Team</a>}>
              <li></li>
            </Localized>
            <Localized id="rust-activity-setup-2">
              <li></li>
            </Localized>
          </ol>

          <Localized id="rust-activity-setup-3"
            pastEventsLink={<a href="https://reps.mozilla.org/events/#/period/past/category/rust/">past Mozilla Reps events</a>}>
            <p></p>
          </Localized>

          <ToggleItem
            titleKey="rust-activity-before"
            id="activity-format-1"
          >
            <ol>
              <Localized id="rust-activity-before-1"
                eventGuideLink={<a href="/eventguide/">event guide</a>}>
                <li></li>
              </Localized>
              <Localized id="rust-activity-before-2">
                <li></li>
              </Localized>
              <Localized id="rust-activity-before-3"
                issueLink={<a href="https://github.com/rust-community/events-team/issues/new?template=new_meetup.md&amp;labels=meetup,mozilla-activate">event template</a>}
                swagLink={<a href="mailto:community@rust-lang.org?subject=[SWAG]">Rust Community Team</a>}>
                <li></li>
              </Localized>
              <Localized id="rust-activity-before-4"
                instructionLink={<a href="https://wiki.mozilla.org/ReMo/SOPs/Event_hosting">instructions</a>}>
                <li></li>
              </Localized>
            </ol>
          </ToggleItem>

          <ToggleItem
            titleKey="rust-activity-before2"
            id="activity-format-2"
          >
            <ol>
              <Localized id="rust-activity-before2-1"
                materialLink={<a href="https://github.com/rust-community/resources">Material</a>}>
                <li></li>
              </Localized>
              <Localized id="rust-activity-before2-2">
                <li></li>
              </Localized>
            </ol>
          </ToggleItem>
        </Toggle>

        {/* Event Flow */}

        <Toggle
          titleKey="rust-activity-flow"
          id="event-flow"
        >
          <Localized id="rust-activity-flow-1">
            <p></p>
          </Localized>

          <ul>
            <Localized id="rust-activity-flow-2">
              <li></li>
            </Localized>
            <Localized id="rust-activity-flow-3">
              <li></li>
            </Localized>
            <ul>
              <Localized id="rust-activity-flow-4">
                <li></li>
              </Localized>
              <Localized id="rust-activity-flow-5">
                <li></li>
              </Localized>
              <Localized id="rust-activity-flow-6">
                <li></li>
              </Localized>
            </ul>
            <Localized id="rust-activity-flow-7">
              <li></li>
            </Localized>
            <Localized id="rust-activity-flow-8">
              <li></li>
            </Localized>
            <Localized id="rust-activity-flow-9">
              <li></li>
            </Localized>
            <Localized id="rust-activity-flow-10">
              <li></li>
            </Localized>
            <Localized id="rust-activity-flow-11">
              <li></li>
            </Localized>
            <ul>
              <Localized id="rust-activity-flow-12"
                stLink={<a href="https://en.wikipedia.org/wiki/Show_and_tell_(education)">Show &amp; Tell</a>}>
                <li></li>
              </Localized>
            </ul>
            <Localized id="rust-activity-flow-13">
              <li>.</li>
            </Localized>
          </ul>

          <Localized id="rust-activity-flow-14">
            <p></p>
          </Localized>

        </Toggle>

        {/* Conclusion */}
        <Toggle
          titleKey="rust-activity-end"
          id="directly-at-the-end-of-the-activity"
        >
          <Localized id="rust-activity-end-1">
            <p></p>
          </Localized>

          <p className="toggle__attention-link"><a href="https://mzl.la/howwasit">mzl.la/howwasit</a></p>

          <Localized id="vr-activity-end-2">
            <p></p>
          </Localized>

          <ToggleItem
            titleKey="rust-activity-output"
            id="output"
          >
            <Localized id="rust-activity-output-general">
              <p></p>
            </Localized>

            <ul>
              <Localized id="rust-activity-output-1">
                <li></li>
              </Localized>
              <Localized id="rust-activity-output-2">
                <li></li>
              </Localized>
              <ul>
                <Localized id="rust-activity-output-3"
                  hashtagLink={<a href="https://twitter.com/search?f=tweets&amp;q=%23RustActivate&amp;src=typd">#RustActivate</a>}>
                  <li></li>
                </Localized>
                <Localized id="rust-activity-output-4"
                  twitterLink={<a href="https://twitter.com/rustlang">@rustlang</a>}>
                  <li></li>
                </Localized>
                <Localized id="rust-activity-output-5">
                  <li></li>
                </Localized>
                <Localized id="rust-activity-output-6">
                  <li></li>
                </Localized>
              </ul>
            </ul>
          </ToggleItem>
        </Toggle>

        <Toggle
          titleKey="rust-activity-resources"
          id="other-resources"
        >
          <Localized id="rust-activity-resources-1">
            <h3 id="tutorials">Tutorials</h3>
          </Localized>

          <Localized id="rust-activity-resources-2">
            <h4 id="learn-by-example">Learn by Example</h4>
          </Localized>

          <ul>
            <Localized id="rust-activity-resources-3"
              rLink={<a href="https://github.com/carols10cents/rustlings">Getting used to reading and writing Rust code</a>}>
              <li></li>
            </Localized>
            <Localized id="rust-activity-resources-4"
              rLink={<a href="https://exercism.io/languages/rust/about">“Exercism” coding challenges</a>}>
              <li></li>
            </Localized>
            <Localized id="rust-activity-resources-5"
              rLink={<a href="https://rustbyexample.com/index.html">“Rust by Example”</a>}>
              <li></li>
            </Localized>
          </ul>

          <Localized id="rust-activity-resources-6">
            <h4 id="visual-learning">Visual learning</h4>
          </Localized>

          <ul>
            <Localized id="rust-activity-resources-7"
              rLink={<a href="http://intorust.com/">“Into Rust”, a series of introductory screencasts about Rust</a>}>
              <li></li>
            </Localized>
            <Localized id="rust-activity-resources-8"
              rLink={<a href="https://www.youtube.com/playlist?list=PL0Fqs05rod8D80WKBCeT326CT8vcAm_N9">A video tutorial series about Rust</a>}>
              <li></li>
            </Localized>
          </ul>

          <Localized id="rust-activity-resources-9">
            <h4 id="coming-from-other-programming-languages">Coming from other programming languages</h4>
          </Localized>

          <ul>
            <Localized id="rust-activity-resources-10"
              rLink={<a href="http://www.rustforrubyists.com/book/book.html">Ruby developers</a>}>
              <li></li>
            </Localized>
            <Localized id="rust-activity-resources-11"
              rLink={<a href="https://github.com/Mercateo/rust-for-node-developers#rust-for-node-developers">node.js developers</a>}>
              <li></li>
            </Localized>
            <Localized id="rust-activity-resources-12"
              rLink={<a href="https://mixitconf.org/en/2017/rust-for-java-developers">Java developers</a>}>
              <li></li>
            </Localized>
            <Localized id="rust-activity-resources-13"
              rLink={<a href="https://github.com/nrc/r4cppp#rust-for-systems-programmers">C++ developers</a>}>
              <li></li>
            </Localized>
            <Localized id="rust-activity-resources-14"
              rLink={<a href="http://lucumr.pocoo.org/2015/5/27/rust-for-pythonistas/">Python developers</a>}>
              <li></li>
            </Localized>
          </ul>
        </Toggle>

        <Toggle
          titleKey="rust-activity-extra"
          id="extra"
        >
          <Localized id="rust-activity-extra-1">
            <p></p>
          </Localized>

          <ul>
            <Localized id="rust-activity-extra-2"
              moreLink={<a href="https://www.rust-lang.org/community">more things happening in the community to get involved with</a>}>
              <li></li>
            </Localized>
          </ul>
        </Toggle>
      </ div>
    );
  };

  render() {
    return (
      <Localized id="rust-document-title" attrs={{title: true}}>
        <DocumentTitle>
          <ActivityDetail
            titleImage="/images/rust-header.png"
            titleKey="rust-title"
            tagKey="programming"
            durationKey="rust-duration"
            sidebarContent = {this.buildSidebarContent()}
            mainContentTop = {this.buildMainContentTop()}
            mainContentToggleItems = {this.buildMainContentToggleItems()}/>
        </DocumentTitle>
      </Localized>
    );
  }
}

export default RustHack;
