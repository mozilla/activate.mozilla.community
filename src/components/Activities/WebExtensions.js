import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import DocumentTitle from 'react-document-title';
import {Toggle, ToggleItem} from './../Toggle.js'
import ActivityDetail from './ActivityDetail';
import { SidebarItem } from './../Sidebar.js'

class WebExtensions extends Component {
  buildSidebarContent = () => {
    return (
      <div>
        <SidebarItem titleKey="webext-activity-impact-2" >
          <ul>
            <Localized id="webext-activity-impact-3">
              <li>125 developers are introduced to and building browser extensions either online or at regional events.</li>
            </Localized>
            <Localized id="webext-activity-impact-4">
              <li>20 add-ons tagged with ‘#mozactivate’ in addons.mozilla.org.</li>
            </Localized>
          </ul>
        </SidebarItem>
        <SidebarItem titleKey="webext-activity-impact-5">
          <ul>
            <Localized id="webext-activity-impact-6">
              <li>15 Mozillians organize Build Your Own Extension workshops</li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem titleKey="webext-activity-goals-workshop" type="audience">
          <ul>
            <Localized id="webext-activity-goals-workshop-1">
              <li>Workshop is attended by five or more people</li>
            </Localized>
            <Localized id="webext-activity-goals-workshop-2">
              <li>60% of participants from the first workshop attend at least one other event in the series</li>
            </Localized>
            <Localized id="webext-activity-goals-workshop-3">
              <li>100% of attendees receive the event follow-up email</li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem titleKey="webext-activity-participants" type="audience">
          <Localized id="webext-activity-participants-1">
            <p>Your audience for this event should be people who have written HTML and JavaScript code in the past.</p>
          </Localized>

          <Localized id="webext-activity-participants-2"
            tutorialOneLink={<a href="https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD">Viswaprasath Ks</a>}
            tutorialTwoLink={<a href="https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS">Trishul Goel</a>}>
            <p>New to JavaScript and HTML? Check out these tutorials by community members <a href="https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD">Viswaprasath Ks</a> and <a href="https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS">Trishul Goel</a> to build your programming skills and create browser extensions!</p>
          </Localized>
        </SidebarItem>
      </ div>
    );
  };

  buildMainContentTop = () => {
    return (
      <div>
        <Localized id="webext-activity-intro">
          <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
            Firefox is an open-source web browser that cares about user control and privacy, and extensions provide a safe, simple, and powerful way to personalize your browsing experience. From blocking ads to organizing tabs, add-ons help make Firefox your own.
          </p>
        </Localized>

        <Localized id="webext-activity-general"
            docLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions">WebExtensions APIs</a>}>
            <p>It’s very easy to create extensions for Firefox using <a href="https://developer.mozilla.org/Add-ons/WebExtensions">WebExtensions APIs</a>. This Web-based technology framework offers a powerful way to create browser extensions that can be easily ported to Chrome, Opera, and Edge, and you only need to know HTML, JavaScript and CSS to build them.</p>
          </Localized>

          <Localized id="webext-activity-general-1">
            <p>In this series of workshops, you’ll help connect new developers with an opportunity to create extensions to solve real problems and make their lives and the web better.</p>
          </Localized>
      </div>
    );
  };

  buildMainContentToggleItems = () => {
    return (
      <div>
        {/* Activity Format */}
        <Toggle
          titleKey="webext-activity-planning"
          id="planning-workshop"
        >
          <Localized id="webext-activity-planning-1"
            eventGuideLink={<a href="https://activate.mozilla.community/eventguide/">event guide</a>}>
            <p>Read the <a href="https://activate.mozilla.community/eventguide/">event guide</a> on how to set up an event page and how to organize an event. For this campaign, we recommend scheduling a series of 3 workshops and dedicating 1.5 - 3 hours for each workshop. Be sure to complete the actions listed in the Pre-Event section 2 - 3 days before hosting the event.</p>
          </Localized>

          <Localized id="webext-activity-planning-2">
            <p>Attendees should bring their own laptops to the workshop, or the workshop should be held in a computer lab.</p>
          </Localized>

          <Localized id="webext-activity-planning-3">
            <p>Interested in learning more about extension development or sharing additional information with workshop attendees? See the Resources section below.</p>
          </Localized>
        </Toggle>

        {/* Event Flow */}

        <Toggle
          titleKey="webext-activity-flow"
          id="workshop-flow"
        >
          <ToggleItem
            titleKey="webext-activity-flow-1"
            id="activity-flow-1"
          >
            <Localized id="webext-activity-flow-2">
              <p>To ensure that your participants get to focus on building extensions during the workshop</p>
            </Localized>

            <ul>
              <Localized id="webext-activity-flow-3">
                <li>Ask registered participants to explore addons.mozilla.org, install a few extensions, and see how they work.</li>
              </Localized>
              <Localized id="webext-activity-flow-4">
                <li>Make sure that computers being used for the workshop have the most recent version of Firefox Developer Edition (available for Windows, Linux, or Mac OS X). If attendees are bringing their own computers, ask them to install Firefox Developer Edition.</li>
              </Localized>
            </ul>
          </ToggleItem>

          <ToggleItem
            titleKey="webext-activity-first"
            id="activity-flow-7"
          >
            <Localized id="webext-activity-first-1"
              introLink={<a href="https://docs.google.com/presentation/d/1SwKbcfI55DEgjQMAzNHvDY5e4ywCUgsWu-qtt2LsxeE/edit#slide=id.p">Introduction to Browser Extensions</a>}>
              <p>The focus of this meeting will be to introduce a general audience to browser extensions and the WebExtensions API. You can make a copy of the presentation <a href="https://docs.google.com/presentation/d/1SwKbcfI55DEgjQMAzNHvDY5e4ywCUgsWu-qtt2LsxeE/edit#slide=id.p">Introduction to Browser Extensions</a> and customize it for your group.</p>
            </Localized>

            <Localized id="webext-activity-first-2">
              <p>We recommend the following agenda for this event:</p>
            </Localized>

            <ul>
              <li>
                <Localized id="webext-activity-first-3">
                  <p>Introduce participants to browser extensions and why they are important.  Here is some sample language you can use:</p>
                </Localized>

                <Localized id="webext-activity-first-4">
                  <em>“Welcome to the [name of event]! I am [name]. Today, we are going to customize our Firefox browsers by developing our own extensions to solve real problems in our own lives. Add-ons are a great way to add extra features to your browser, like blocking time-wasting websites during study hours, or turning images into cat pictures. With WebExtensions APIs, it’s now easier to create add-ons that are compatible with Firefox, Chrome, and Opera. Add-ons help keep users to be in control of their online experience, so your support in building them and the community around them matter.”</em>
                </Localized>
              </li>
              <Localized id="webext-activity-first-5">
                <li>Ask participants to share their experience using browser extensions. What are their favorite extensions and what do those extensions do?</li>
              </Localized>
              <Localized id="webext-activity-first-6"
                borderifyLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/Your_first_WebExtension">building the borderify extension</a>}>
                <li>Walk participants through the tutorial for <a href="https://developer.mozilla.org/Add-ons/WebExtensions/Your_first_WebExtension">building the borderify extension</a> on MDN web docs.</li>
              </Localized>
              <Localized id="webext-activity-first-7"
                anatomyLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">anatomy of an extension</a>}>
                <li>Discuss the <a href="https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">anatomy of an extension</a>.</li>
              </Localized>
              <Localized id="webext-activity-first-8"
                complexLink={<a href="https://github.com/mdn/webextensions-examples">building a more complex extension</a>}>
                <li>Have participants follow the MDN tutorial for <a href="https://github.com/mdn/webextensions-examples">building a more complex extension</a>.</li>
              </Localized>
            </ul>

            <Localized id="webext-activity-first-9">
              <p>At the end of the session, tell attendees when the next event in the series will be held and encourage them to sign up for it in advance. See the ‘Event Followup’ section for more details about how to follow up after your event.</p>
            </Localized>
          </ToggleItem>

          <ToggleItem
            titleKey="webext-activity-second"
            id="activity-flow-11"
          >
            <Localized id="webext-activity-second-1"
              actionLink={<a href="https://docs.google.com/presentation/d/1GssoHmC0e7TArrqWz4DKBqL2f8CWel182tr5Y2RAr2k/edit#slide=id.p">APIs in Action, Part One</a>}>
              <p>During the second event, participants will be introduced to WebExtensions APIs that can perform basic functionalities.  After reviewing the functionalities of these APIs, you will help the group put them in action to create an extension for Firefox. You can make a copy of the presentation <a href="https://docs.google.com/presentation/d/1GssoHmC0e7TArrqWz4DKBqL2f8CWel182tr5Y2RAr2k/edit#slide=id.p">APIs in Action, Part One</a>, and share it with your group.</p>
            </Localized>

            <Localized id="webext-activity-second-2">
              <p>We recommend the following agenda for this meeting:</p>
            </Localized>

            <ul>
              <Localized id="webext-activity-second-3">
                <li>1st half of the meeting: provide overviews and demonstrations of the following topics:</li>
              </Localized>
            </ul>
            <div className="table-responsive">
              <table className="table table-striped">
              <thead>
                <tr>
                  <Localized id="webext-activity-second-4">
                    <th>Topic</th>
                  </Localized>
                  <Localized id="webext-activity-second-5">
                    <th>Extension Examples</th>
                  </Localized>
                  <Localized id="webext-activity-second-6">
                    <th>Videos</th>
                  </Localized>
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
                  <td></td>
                </tr>
                <tr>
                  <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/pageAction">pageAction API</a></td>
                  <td><a href="https://github.com/mdn/webextensions-examples/tree/master/chill-out">Chill Out</a></td>
                  <td><a href="https://www.youtube.com/watch?v=RBI-j8USuJs&amp;feature=youtu.be">pageAction tutorial </a></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/pageAction">Apply CSS</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="https://github.com/tsl143/jsDemos/tree/master/ipFinder_webext">IP-Finder</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="https://github.com/viswanathamsantosh/inshorts/tree/page-action">Inshorts</a></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            </div>
            <ul>
              <Localized id="webext-activity-second-7">
                <li>2nd half of the meeting: ask attendees to put these APIs to use by creating an original extension or by building one of the examples listed in the table above.</li>
              </Localized>
            </ul>

            <Localized id="webext-activity-help-idea"
              repoLink={<a href="https://github.com/firefox-addons/ideas/issues">repository of extension ideas</a>}>
              <p>If your attendees need help coming up with an idea for building an original extension, ask them to visit the <a href="https://github.com/firefox-addons/ideas/issues">repository of extension ideas</a> for inspiration.</p>
            </Localized>

            <Localized id="webext-activity-upload">
              <p>Ask attendees who build an original extension to submit it to addons.mozilla.org. Once it has been submitted, they can navigate to “Manage My Submissions” and “Edit Information” to tag their extension with ‘#mozactivate17.’ Be sure to click “Save Changes” after the tag it added!</p>
            </Localized>

            <Localized id="webext-activity-second-8">
              <p>At the end of the session, tell attendees when the next event in the series will be held and encourage them to sign up for it in advance.</p>
            </Localized>
          </ToggleItem>

          <ToggleItem
            titleKey="webext-activity-third"
            id="activity-flow-15"
          >
            <Localized id="webext-activity-third-1"
              tabsLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/tabs">tabs</a>}
              sidebarLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/sidebarAction">sidebarAction</a>}
              requestLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/webRequest">webRequest</a>}
              actionLink={<a href="https://docs.google.com/presentation/d/1_iP7TvHQxKbMynh3tjI1kHGh0gZ5ZElG-K9RYvYjbMk/edit">APIs in Action, Part Two</a>}>
              <p>During the third event, participants will explore how their extensions can use the <a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/tabs">tabs</a>, <a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/sidebarAction">sidebarAction</a>, and <a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/webRequest">webRequest</a> APIs to interact with the browser. You can make a copy of the presentation <a href="https://docs.google.com/presentation/d/1_iP7TvHQxKbMynh3tjI1kHGh0gZ5ZElG-K9RYvYjbMk/edit">APIs in Action, Part Two</a>, to customize and share with your group.</p>
            </Localized>

            <Localized id="webext-activity-third-2">
              <p>We recommend the following agenda for this meeting:</p>
            </Localized>

            <ul>
              <Localized id="webext-activity-third-3">
                <li>1st half of the meeting: provide an overview and demonstration of the following topics:</li>
              </Localized>
            </ul>
            <div className="table-responsive">
              <table className="table table-striped">
              <thead>
                <tr>
                  <Localized id="webext-activity-third-4">
                    <th>Topic</th>
                  </Localized>
                  <Localized id="webext-activity-third-5">
                    <th>Extension Examples</th>
                  </Localized>
                  <Localized id="webext-activity-third-6">
                    <th>Videos</th>
                  </Localized>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/tabs">Tabs API</a></td>
                  <td><a href="https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs">Tabs Tabs Tabs</a></td>
                  <td><a href="https://www.youtube.com/watch?v=GS1nM55iKZo&amp;t=612s&amp;list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD&amp;index=5">Getting Started with Tabs</a></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="https://github.com/mdn/webextensions-examples/tree/master/contextual-identities">Contextual Identities</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">Beastify</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/sidebarAction">sidebarAction API</a></td>
                  <td><a href="https://github.com/mdn/webextensions-examples/tree/master/annotate-page">Annotate Page</a></td>
                  <td><a href="https://youtu.be/F6Up_yGfuJw">How to create a Sidebar Menu</a></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types">Context Menu Demo</a></td>
                  <td><a href="https://www.youtube.com/watch?v=AIh47SUwAs0&feature=youtu.be">How to Create a Context Menu</a></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="https://github.com/soapdog/webextension-facebook-messenger-as-a-sidebar">Facebook Messenger as a Sidebar</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td><a href="https://developer.mozilla.org/Add-ons/WebExtensions/API/webRequest">webRequest API</a></td>
                  <td><a href="https://github.com/mdn/webextensions-examples/tree/master/stored-credentials">Stored Credentials</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="https://github.com/mdn/webextensions-examples/tree/master/user-agent-rewriter">User Agent Rewriter</a></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            </div>
            <ul>
              <Localized id="webext-activity-third-7">
                <li>2nd half of the meeting: ask attendees to put these APIs to use by creating an original extension or by building an example from MDN web docs.</li>
              </Localized>
            </ul>

            <Localized id="webext-activity-help-idea"
              repoLink={<a href="https://github.com/firefox-addons/ideas/issues">repository of extension ideas</a>}>
              <p>If your attendees need help coming up with an idea for building an original extension, ask them to visit the <a href="https://github.com/firefox-addons/ideas">repository of extension ideas</a> for inspiration.</p>
            </Localized>

            <Localized id="webext-activity-upload">
              <p>Ask attendees who build an original extension to submit it to addons.mozilla.org. Once it has been submitted, they can navigate to “Manage My Submissions” and “Edit Information” to tag their extension with ‘#mozactivate.’ Be sure to click “Save Changes” after the tag it added!</p>
            </Localized>
          </ToggleItem>
        </Toggle>

        {/* Conclusion */}
        <Toggle
          titleKey="webext-activity-followup"
          id="directly-at-the-end-of-the-activity"
        >
          <ul>
            <Localized id="webext-activity-followup-1"
              telegramLink={<a href="https://t.me/addonschat">@addonchats</a>}
              feedbackLink={<a href="mzl.la/howwasit">mzl.la/howwasit</a>}>
              <li>Immediately after every event, share the link to the impact form with your attendees: <a href="mzl.la/howwasit">mzl.la/howwasit</a>. While you’re at it, why not also send a copy of your slide deck and invite the attendees to join the Telegram group <a href="https://t.me/addonschat">@addonchats</a>?</li>
            </Localized>
            <Localized id="webext-activity-followup-2">
              <li>Fill out the post-event metrics on the event page you set up on the Reps portal.</li>
            </Localized>
            <Localized id="webext-activity-followup-3"
              discourseLink={<a href="https://discourse.mozilla.org/t/activate-build-your-own-webextension-add-on-for-firefox/13866">Tell us about your event</a>}>
              <li><a href="https://discourse.mozilla.org/t/activate-build-your-own-webextension-add-on-for-firefox/13866">Tell us about your event</a> on Discourse. We love to hear about upcoming plans, and of course love to hear about what was achieved at the event with a picture or two!</li>
            </Localized>
          </ul>
        </Toggle>

        <Toggle
          titleKey="webext-activity-resources"
          id="resources"
        >
          <Localized id="webext-activity-resources-1">
            <p>Do you need help getting started with extension development or want to learn as much as possible? Check out these fantastic resources!</p>
          </Localized>

          <ul>
            <Localized id="webext-activity-resources-2"
              rLink={<a href="https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD">Building Browser Extensions by Viswaprasanth Ks Video Series</a>}>
              <li><a href="https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD">Building Browser Extensions by Viswaprasanth Ks Video Series</a></li>
            </Localized>
            <Localized id="webext-activity-resources-3"
              rLink={<a href="https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS">WebExtensions Tutorials by Trishul Goel Video Series</a>}>
              <li><a href="https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS">WebExtensions Tutorials by Trishul Goel Video Series</a></li>
            </Localized>
            <Localized id="webext-activity-resources-4"
              rLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/Examples">More Examples of APIs in Action</a>}>
              <li><a href="https://developer.mozilla.org/Add-ons/WebExtensions/Examples">More Examples of APIs in Action</a> on MDN web docs</li>
            </Localized>
            <Localized id="webext-activity-resources-5"
              rLink={<a href="https://github.com/iamVP7/MyExtensions/blob/master/README.md">Extension Examples and Walkthroughs by Viswaprasanth Ks</a>}>
              <li><a href="https://github.com/iamVP7/MyExtensions/blob/master/README.md">Extension Examples and Walkthroughs by Viswaprasanth Ks</a></li>
            </Localized>
            <Localized id="webext-activity-resources-6"
              rLink={<a href="https://hacks.mozilla.org/2015/09/lets_write_a_webextension/">Let’s Write a Web Extension by Blake Winton</a>}>
              <li><a href="https://hacks.mozilla.org/2015/09/lets_write_a_webextension/">Let’s Write a Web Extension by Blake Winton</a></li>
            </Localized>
            <Localized id="webext-activity-resources-7"
              rLink={<a href="https://davidwalsh.name/web-extensions">Create a Simple WebExtension by David Wals</a>}>
              <li><a href="https://davidwalsh.name/web-extensions">Create a Simple WebExtension by David Wals</a></li>
            </Localized>
            <Localized id="webext-activity-resources-8"
              rLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Browser Compatibility Table for APIs</a>}>
              <li><a href="https://developer.mozilla.org/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Browser Compatibility Table for APIs</a></li>
            </Localized>
            <Localized id="webext-activity-resources-9"
              rLink={<a href="https://webextensions.tech">WebExtensions.tech</a>}>
              <li><a href="https://webextensions.tech">Webextensions.tech - a scaffolding tool for browser extensions</a>  by Shivam Singhal, Tushar Arora & Trishul</li>
            </Localized>
          </ul>
        </Toggle>

        <Toggle
          titleKey="webext-activity-ack"
          id="acknowledgements"
        >
          <Localized id="webext-activity-new-ack">
            <p>Thank you to Viswaprasanth Ks, Santosh Viswanatham, Trishul Goel, Karthic Keyan, Andre Garzia, Daniele Scasciafratte, Michael Kohler, Shivam Singhal and Tushar Arora.</p>
          </Localized>
        </Toggle>
      </div>
    );
  };

  render() {
    return (
      <Localized id="webext-document-title" attrs={{title: true}}>
        <DocumentTitle>
          <ActivityDetail
            titleImage="/images/webextensions-post-header.png"
            titleKey="webext-title"
            tagKey="programming"
            durationKey="webext-duration"
            sidebarContent = {this.buildSidebarContent()}
            mainContentTop = {this.buildMainContentTop()}
            mainContentToggleItems = {this.buildMainContentToggleItems()}/>
        </DocumentTitle>
      </Localized>
    );
  }
}

export default WebExtensions;
