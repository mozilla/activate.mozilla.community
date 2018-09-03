import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Localized } from 'fluent-react/compat';

import ActivityDetail from './ActivityDetail';

class WebExtensions extends Component {
  render() {
    return (
      <ActivityDetail
        titleImage="/images/webextensions-post-header.png"
        titleKey="webextensions-title"
        durationKey="webextensions-duration">

        <Col lg={9} md={9} sm={9} xs={12}>
          <p class="alert alert-info impactbox"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
        Firefox is an open-source web browser that cares about user control and privacy, and extensions provide a safe, simple, and powerful way to personalize your browsing experience. From blocking ads to organizing tabs, add-ons help make Firefox your own.</p>

          <p>It’s very easy to create extensions for Firefox using <a href="https://developer.mozilla.org/Add-ons/WebExtensions">WebExtensions APIs</a>. This Web-based technology framework offers a powerful way to create browser extensions that can be easily ported to Chrome, Opera, and Edge, and you only need to know HTML, JavaScript and CSS to build them.</p>

          <p>In this series of workshops, you’ll help connect new developers with an opportunity to create extensions to solve real problems and make their lives and the web better.</p>

          <h2 id="planning-your-workshop">Planning Your Workshop</h2>

          <p>Read the <a href="https://activate.mozilla.community/eventguide/">event guide</a> on how to set up an event page and how to organize an event. For this campaign, we recommend scheduling a series of 3 workshops and dedicating 1.5 - 3 hours for each workshop. Be sure to complete the actions listed in the Pre-Event section 2 - 3 days before hosting the event.</p>

          <p>Attendees should bring their own laptops to the workshop, or the workshop should be held in a computer lab.</p>

          <p>Interested in learning more about extension development or sharing additional information with workshop attendees? See the Resources section below.</p>

          <h2 id="flow-of-workshops">Flow of Workshops</h2>

          <h3 id="pre-event">Pre-Event</h3>

          <p>To ensure that your participants get to focus on building extensions during the workshop</p>

          <ul>
            <li>
              <p>Ask registered participants to explore addons.mozilla.org, install a few extensions, and see how they work.</p>
            </li>
            <li>
              <p>Make sure that computers being used for the workshop have the most recent version of Firefox Developer Edition (available for Windows, Linux, or Mac OS X). If attendees are bringing their own computers, ask them to install Firefox Developer Edition.</p>
            </li>
          </ul>

          <h3 id="first-meeting-introduction-to-browser-extensions">First Meeting: Introduction to Browser Extensions</h3>

          <p>The focus of this meeting will be to introduce a general audience to browser extensions and the WebExtensions API. You can make a copy of the presentation <a href="https://docs.google.com/presentation/d/1SwKbcfI55DEgjQMAzNHvDY5e4ywCUgsWu-qtt2LsxeE/edit#slide=id.p">Introduction to Browser Extensions</a> and customize it for your group.</p>

          <p>We recommend the following agenda for this event:</p>

          <ul>
            <li>
              <p>Introduce participants to browser extensions and why they are important.  Here is some sample language you can use:</p>

              <p><em>“Welcome to the [name of event]! I am [name]. Today, we are going to customize our Firefox browsers by developing our own extensions to solve real problems in our own lives. Add-ons are a great way to add extra features to your browser, like blocking time-wasting websites during study hours, or turning images into cat pictures. With WebExtensions APIs, it’s now easier to create add-ons that are compatible with Firefox, Chrome, and Opera. Add-ons help keep users to be in control of their online experience, so your support in building them and the community around them matter.”</em></p>
            </li>
            <li>Ask participants to share their experience using browser extensions. What are their favorite extensions and what do those extensions do?</li>
            <li>Walk participants through the tutorial for <a href="https://developer.mozilla.org/Add-ons/WebExtensions/Your_first_WebExtension">building the borderify extension</a> on MDN web docs.</li>
            <li>Discuss the <a href="https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">anatomy of an extension</a>.</li>
            <li>Have participants follow the MDN tutorial for <a href="https://github.com/mdn/webextensions-examples">building a more complex extension</a>.</li>
          </ul>

          <p>At the end of the session, tell attendees when the next event in the series will be held and encourage them to sign up for it in advance. See the ‘Event Followup’ section for more details about how to follow up after your event.</p>

          <h3 id="second-meeting-apis-in-action-part-1">Second Meeting: APIs in Action, Part 1</h3>

          <p>During the second event, participants will be introduced to WebExtensions APIs that can perform basic functionalities.  After reviewing the functionalities of these APIs, you will help the group put them in action to create an extension for Firefox. You can make a copy of the presentation <a href="https://docs.google.com/presentation/d/1GssoHmC0e7TArrqWz4DKBqL2f8CWel182tr5Y2RAr2k/edit#slide=id.p">APIs in Action, Part One</a>, and share it with your group.</p>

          <p>We recommend the following agenda for this meeting:</p>

          <ul>
            <li>1st half of the meeting: provide overviews and demonstrations of the following topics:</li>
          </ul>

          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Extension Examples</th>
                <th>Videos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/Content_scripts">Content scripts</a></td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/borderify">Borderify</a></td>
                <td><a href="https://youtu.be/WrEgBDg56sM">Content Script Tutorial</a></td>
              </tr>
              <tr>
                <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/browserAction">browserAction API</a></td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/bookmark-it">Bookmark It</a></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/pageAction">pageAction API</a></td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/chill-out">Chill Out</a></td>
                <td><a href="https://www.youtube.com/watch?v=RBI-j8USuJs&amp;feature=youtu.be">pageAction tutorial </a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/pageAction">Apply CSS</a></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><a href="https://github.com/tsl143/jsDemos/tree/master/ipFinder_webext">IP-Finder</a></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><a href="https://github.com/viswanathamsantosh/inshorts/tree/page-action">Inshorts</a></td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>

          <ul>
            <li>2nd half of the meeting: ask attendees to put these APIs to use by creating an original extension or by building one of the examples listed in the table above.</li>
          </ul>

          <p>💡 If your attendees need help coming up with an idea for building an original extension, ask them to visit the <a href="https://github.com/firefox-addons/ideas/issues">repository of extension ideas</a> for inspiration.</p>

          <p>⭐️ Ask attendees who build an original extension to submit it to addons.mozilla.org. Once it has been submitted, they can navigate to “Manage My Submissions” and “Edit Information” to tag their extension with ‘#mozactivate17.’ Be sure to click “Save Changes” after the tag it added!</p>

          <p>At the end of the session, tell attendees when the next event in the series will be held and encourage them to sign up for it in advance.</p>

          <h3 id="third-meeting-apis-in-action-part-2">Third Meeting: APIs in Action, Part 2</h3>
          <p>During the third event, participants will explore how their extensions can use the <a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/tabs">tabs</a>, <a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/sidebarAction">sidebarAction</a>, and <a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/webRequest">webRequest</a> APIs to interact with the browser. You can make a copy of the presentation <a href="https://docs.google.com/presentation/d/1_iP7TvHQxKbMynh3tjI1kHGh0gZ5ZElG-K9RYvYjbMk/edit">APIs in Action, Part Two</a>, to customize and share with your group.</p>

          <p>We recommend the following agenda for this meeting:</p>

          <ul>
            <li>1st half of the meeting: provide an overview and demonstration of the following topics:</li>
          </ul>

          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Extension Examples</th>
                <th>Videos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/tabs">Tabs API</a></td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs">Tabs Tabs Tabs</a></td>
                <td><a href="https://www.youtube.com/watch?v=GS1nM55iKZo&amp;t=612s&amp;list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD&amp;index=5">Getting Started with Tabs</a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/contextual-identities">Contextual Identities</a></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">Beastify</a></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/sidebarAction">sidebarAction API</a></td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/annotate-page">Annotate Page</a></td>
                <td><a href="https://youtu.be/F6Up_yGfuJw">How to create a Sidebar Menu</a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types">Context Menu Demo</a></td>
                <td><a href="https://www.youtube.com/watch?v=AIh47SUwAs0&amp;feature=youtu.be">How to Create a Context Menu</a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><a href="https://github.com/soapdog/webextension-facebook-messenger-as-a-sidebar">Facebook Messenger as a Sidebar</a></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/webRequest">webRequest API</a></td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/stored-credentials">Stored Credentials</a></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><a href="https://github.com/mdn/webextensions-examples/tree/master/user-agent-rewriter">User Agent Rewriter</a></td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>

          <ul>
            <li>2nd half of the meeting: ask attendees to put these APIs to use by creating an original extension or by building an example from MDN web docs.</li>
          </ul>

          <p>💡 If your attendees need help coming up with an idea for building an original extension, ask them to visit the <a href="https://github.com/firefox-addons/ideas">repository of extension ideas</a> for inspiration.</p>

          <p>⭐️ Ask attendees who build an original extension to submit it to addons.mozilla.org. Once it has been submitted, they can navigate to “Manage My Submissions” and “Edit Information” to tag their extension with ‘#mozactivate.’ Be sure to click “Save Changes” after the tag it added!</p>

          <h2 id="resources">Resources</h2>
          <p>Do you need help getting started with extension development or want to learn as much as possible? Check out these fantastic resources!</p>

          <p>🎥  <a href="https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD">Building Browser Extensions by Viswaprasanth Ks <em>Video Series</em></a></p>

          <p>🎥  <a href="https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS">WebExtensions Tutorials by Trishul Goel <em>Video Series</em></a></p>

          <p>💃🏽 <a href="https://developer.mozilla.org/Add-ons/WebExtensions/Examples">More Examples of APIs in Action</a> on MDN web docs</p>

          <p>💃🏽 <a href="https://github.com/iamVP7/MyExtensions/blob/master/README.md">Extension Examples and Walkthroughs by Viswaprasanth Ks</a></p>

          <p>🔍  <a href="https://hacks.mozilla.org/2015/09/lets_write_a_webextension/">Let’s Write a Web Extension by Blake Winton</a></p>

          <p>🔍  <a href="https://davidwalsh.name/web-extensions">Create a Simple WebExtension by David Wals</a></p>

          <p>👍  <a href="https://developer.mozilla.org/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Browser Compatibility Table for APIs</a></p>

          <h2 id="event-follow-up">Event Follow-Up</h2>

          <ul>
            <li>
              <p>Immediately after every event, share the link to the impact form with your attendees: <a href="mzl.la/howwasit">mzl.la/howwasit</a>. While you’re at it, why not also send a copy of your slide deck and invite the attendees to join the Telegram group <a href="https://t.me/addonschat">@addonchats</a>?</p>
            </li>
            <li>
              <p>Fill out the post-event metrics on the event page you set up on the Reps portal.</p>
            </li>
            <li>
              <p><a href="https://discourse.mozilla.org/t/activate-build-your-own-webextension-add-on-for-firefox/13866">Tell us about your event</a> on Discourse. We love to hear about upcoming plans, and of course love to hear about what was achieved at the event with a picture or two!</p>
            </li>
          </ul>

          <h2 id="acknowledgements">Acknowledgements</h2>
          <p>Thank you to Viswaprasanth Ks, Santosh Viswanatham, Trishul Goel, Karthic Keyan, Andre Garzia, Daniele Scasciafratte, and Michael Kohler.</p>

        </Col>

        <Col lg={3} md={3} sm={3} className="sidebar hidden-xs">
          <h2 id="impact-and-metrics">Impact and Metrics</h2>

          <p>Throwing a workshop helps more people learn how to develop add-ons and help ensure that Firefox remains the most customizable browser.</p>

          <h3 id="campaign-goals">Campaign Goals</h3>

          <p><strong>Impact:</strong></p>

          <ul>
            <li>125 developers are introduced to and building browser extensions either online or at regional events.</li>
            <li>20 add-ons tagged with ‘#mozactivate’ in addons.mozilla.org.</li>
          </ul>

          <p><strong>Strength:</strong></p>

          <ul>
            <li>15 Mozillians organize Build Your Own Extension workshops</li>
          </ul>

          <h3 id="goals-for-your-workshop">Goals for Your Workshop</h3>

          <ul>
            <li>Workshop is attended by five or more people</li>
            <li>60% of participants from the first workshop attend at least one other event in the series</li>
            <li>100% of attendees receive the event follow-up email</li>
          </ul>

          <h2 id="finding-participants">Finding Participants</h2>

          <p>Your audience for this event should be <strong>people who have written HTML and JavaScript code in the past</strong>.</p>

          <p>New to JavaScript and HTML? Check out these tutorials by community members <a href="https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD">Viswaprasath Ks</a> and <a href="https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS">Trishul Goel</a> to build your programming skills and create browser extensions!</p>
        </Col>

      </ActivityDetail>
    );
  }
}

export default WebExtensions;
