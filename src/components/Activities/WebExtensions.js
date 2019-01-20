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
              <li></li>
            </Localized>
            <Localized id="webext-activity-impact-4">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>
        <SidebarItem titleKey="webext-activity-impact-5">
          <ul>
            <Localized id="webext-activity-impact-6">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem titleKey="webext-activity-goals-workshop" type="audience">
          <ul>
            <Localized id="webext-activity-goals-workshop-1">
              <li></li>
            </Localized>
            <Localized id="webext-activity-goals-workshop-2">
              <li></li>
            </Localized>
            <Localized id="webext-activity-goals-workshop-3">
              <li></li>
            </Localized>
          </ul>
        </SidebarItem>

        <SidebarItem titleKey="webext-activity-participants" type="audience">
          <Localized id="webext-activity-participants-1">
            <p></p>
          </Localized>

          <Localized id="webext-activity-participants-2"
            tutorialOneLink={<a href="https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD">Viswaprasath Ks</a>}
            tutorialTwoLink={<a href="https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS">Trishul Goel</a>}>
            <p></p>
          </Localized>
        </SidebarItem>
      </ div>
    );
  };

  buildMainContentTop = () => {
    return (
      <div>
        <Localized id="webext-activity-intro">
          <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></p>
        </Localized>

        <Localized id="webext-activity-general"
            docLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions">WebExtensions APIs</a>}>
            <p></p>
          </Localized>

          <Localized id="webext-activity-general-1">
            <p></p>
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
            <p></p>
          </Localized>

          <Localized id="webext-activity-planning-2">
            <p></p>
          </Localized>

          <Localized id="webext-activity-planning-3">
            <p></p>
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
              <p></p>
            </Localized>

            <ul>
              <Localized id="webext-activity-flow-3">
                <li></li>
              </Localized>
              <Localized id="webext-activity-flow-4">
                <li></li>
              </Localized>
            </ul>
          </ToggleItem>

          <ToggleItem
            titleKey="webext-activity-first"
            id="activity-flow-7"
          >
            <Localized id="webext-activity-first-1"
              introLink={<a href="https://docs.google.com/presentation/d/1SwKbcfI55DEgjQMAzNHvDY5e4ywCUgsWu-qtt2LsxeE/edit#slide=id.p">Introduction to Browser Extensions</a>}>
              <p></p>
            </Localized>

            <Localized id="webext-activity-first-2">
              <p></p>
            </Localized>

            <ul>
              <li>
                <Localized id="webext-activity-first-3">
                  <p></p>
                </Localized>

                <Localized id="webext-activity-first-4">
                  <em></em>
                </Localized>
              </li>
              <Localized id="webext-activity-first-5">
                <li></li>
              </Localized>
              <Localized id="webext-activity-first-6"
                borderifyLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/Your_first_WebExtension">building the borderify extension</a>}>
                <li></li>
              </Localized>
              <Localized id="webext-activity-first-7"
                anatomyLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">anatomy of an extension</a>}>
                <li></li>
              </Localized>
              <Localized id="webext-activity-first-8"
                complexLink={<a href="https://github.com/mdn/webextensions-examples">building a more complex extension</a>}>
                <li></li>
              </Localized>
            </ul>

            <Localized id="webext-activity-first-9">
              <p></p>
            </Localized>
          </ToggleItem>

          <ToggleItem
            titleKey="webext-activity-second"
            id="activity-flow-11"
          >
            <Localized id="webext-activity-second-1"
              actionLink={<a href="https://docs.google.com/presentation/d/1GssoHmC0e7TArrqWz4DKBqL2f8CWel182tr5Y2RAr2k/edit#slide=id.p">APIs in Action, Part One</a>}>
              <p></p>
            </Localized>

            <Localized id="webext-activity-second-2">
              <p></p>
            </Localized>

            <ul>
              <Localized id="webext-activity-second-3">
                <li></li>
              </Localized>
            </ul>
            <div className="table-responsive">
              <table className="table table-striped">
              <thead>
                <tr>
                  <Localized id="webext-activity-second-4">
                    <th></th>
                  </Localized>
                  <Localized id="webext-activity-second-5">
                    <th></th>
                  </Localized>
                  <Localized id="webext-activity-second-6">
                    <th></th>
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
                <li></li>
              </Localized>
            </ul>

            <Localized id="webext-activity-help-idea"
              repoLink={<a href="https://github.com/firefox-addons/ideas/issues">repository of extension ideas</a>}>
              <p></p>
            </Localized>

            <Localized id="webext-activity-upload">
              <p></p>
            </Localized>

            <Localized id="webext-activity-second-8">
              <p></p>
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
              <p></p>
            </Localized>

            <Localized id="webext-activity-third-2">
              <p></p>
            </Localized>

            <ul>
              <Localized id="webext-activity-third-3">
                <li></li>
              </Localized>
            </ul>
            <div className="table-responsive">
              <table className="table table-striped">
              <thead>
                <tr>
                  <Localized id="webext-activity-third-4">
                    <th></th>
                  </Localized>
                  <Localized id="webext-activity-third-5">
                    <th></th>
                  </Localized>
                  <Localized id="webext-activity-third-6">
                    <th></th>
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
                <li></li>
              </Localized>
            </ul>

            <Localized id="webext-activity-help-idea"
              repoLink={<a href="https://github.com/firefox-addons/ideas/issues">repository of extension ideas</a>}>
              <p></p>
            </Localized>

            <Localized id="webext-activity-upload">
              <p></p>
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
              feedbackLink={<a href="https://mzl.la/howwasit">mzl.la/howwasit</a>}>
              <li></li>
            </Localized>
            <Localized id="webext-activity-followup-2">
              <li></li>
            </Localized>
            <Localized id="webext-activity-followup-3"
              discourseLink={<a href="https://discourse.mozilla.org/t/activate-build-your-own-webextension-add-on-for-firefox/13866">Tell us about your event</a>}>
              <li></li>
            </Localized>
          </ul>
        </Toggle>

        <Toggle
          titleKey="webext-activity-resources"
          id="resources"
        >
          <Localized id="webext-activity-resources-1">
            <p></p>
          </Localized>

          <ul>
            <Localized id="webext-activity-resources-2"
              rLink={<a href="https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD">Building Browser Extensions by Viswaprasanth Ks Video Series</a>}>
              <li></li>
            </Localized>
            <Localized id="webext-activity-resources-3"
              rLink={<a href="https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS">WebExtensions Tutorials by Trishul Goel Video Series</a>}>
              <li></li>
            </Localized>
            <Localized id="webext-activity-resources-4"
              rLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/Examples">More Examples of APIs in Action</a>}>
              <li></li>
            </Localized>
            <Localized id="webext-activity-resources-5"
              rLink={<a href="https://github.com/iamVP7/MyExtensions/blob/master/README.md">Extension Examples and Walkthroughs by Viswaprasanth Ks</a>}>
              <li></li>
            </Localized>
            <Localized id="webext-activity-resources-6"
              rLink={<a href="https://hacks.mozilla.org/2015/09/lets_write_a_webextension/">Let’s Write a Web Extension by Blake Winton</a>}>
              <li></li>
            </Localized>
            <Localized id="webext-activity-resources-7"
              rLink={<a href="https://davidwalsh.name/web-extensions">Create a Simple WebExtension by David Wals</a>}>
              <li></li>
            </Localized>
            <Localized id="webext-activity-resources-8"
              rLink={<a href="https://developer.mozilla.org/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Browser Compatibility Table for APIs</a>}>
              <li></li>
            </Localized>
            <Localized id="webext-activity-resources-9"
              rLink={<a href="https://webextensions.tech">WebExtensions.tech</a>}>
              <li></li>
            </Localized>
          </ul>
        </Toggle>

        <Toggle
          titleKey="webext-activity-ack"
          id="acknowledgements"
        >
          <Localized id="webext-activity-new-ack">
            <p></p>
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
