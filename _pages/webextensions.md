---
layout: activity
title:  "Build Your Own Extension for Firefox"
subtitle: "in 1.5-3 hours"
image: "/assets/img/webextensions-post-header.png"
permalink: /webextensions/
lang: en
ref: webextensions
parent: activities
---

<div class="col-md-3 hidden-xs pull-right" markdown="1">
## Impact and Metrics

Throwing a workshop helps more people learn how to develop add-ons and help ensure that Firefox remains the most customizable browser.


### Campaign Goals

__Impact:__

* 125 developers are introduced to and building browser extensions either online or at regional events.
* 20 add-ons tagged with ‘#mozactivate’ in addons.mozilla.org.

__Strength:__

* 15 Mozillians organize Build Your Own Extension workshops

### Goals for Your Workshop

* Workshop is attended by five or more people
* 60% of participants from the first workshop attend at least one other event in the series
* 100% of attendees receive the event follow-up email

## Finding Participants

Your audience for this event should be __people who have written HTML and JavaScript code in the past__.

New to JavaScript and HTML? Check out these tutorials by community members [Viswaprasath Ks](https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD) and [Trishul Goel](https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS) to build your programming skills and create browser extensions!


</div>

<div class="col-md-9" markdown="1">

{: .alert .alert-info .impactbox}
<span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
Firefox is an open-source web browser that cares about user control and privacy, and extensions provide a safe, simple, and powerful way to personalize your browsing experience. From blocking ads to organizing tabs, add-ons help make Firefox your own.


It’s very easy to create extensions for Firefox using [WebExtensions APIs](https://developer.mozilla.org/en-US/Add-ons/WebExtensions). This Web-based technology framework offers a powerful way to create browser extensions that can be easily ported to Chrome, Opera, and Edge, and you only need to know HTML, JavaScript and CSS to build them.

In this series of workshops, you’ll help connect new developers with an opportunity to create extensions to solve real problems and make their lives and the web better.


## Planning Your Workshop

Read the [event guide](https://activate.mozilla.community/eventguide/) on how to set up an event page and how to organize an event. For this campaign, we recommend scheduling a series of 3 workshops and dedicating 1.5 - 3 hours for each workshop. Be sure to complete the actions listed in the Pre-Event section 2 - 3 days before hosting the event.

Attendees should bring their own laptops to the workshop, or the workshop should be held in a computer lab.

Interested in learning more about extension development or sharing additional information with workshop attendees? See the Resources section below.


## Flow of Workshops

### Pre-Event

To ensure that your participants get to focus on building extensions during the workshop

* Ask registered participants to explore addons.mozilla.org, install a few extensions, and see how they work.

* Make sure that computers being used for the workshop have the most recent version of Firefox Developer Edition (available for Windows, Linux, or Mac OS X). If attendees are bringing their own computers, ask them to install Firefox Developer Edition.

### First Meeting: Introduction to Browser Extensions

The focus of this meeting will be to introduce a general audience to browser extensions and the WebExtensions API. You can make a copy of the presentation [Introduction to Browser Extensions](https://docs.google.com/presentation/d/1SwKbcfI55DEgjQMAzNHvDY5e4ywCUgsWu-qtt2LsxeE/edit#slide=id.p) and customize it for your group.

We recommend the following agenda for this event:

* Introduce participants to browser extensions and why they are important.  Here is some sample language you can use:

    *“Welcome to the [name of event]! I am [name]. Today, we are going to customize our Firefox browsers by developing our own extensions to solve real problems in our own lives. Add-ons are a great way to add extra features to your browser, like blocking time-wasting websites during study hours, or turning images into cat pictures. With WebExtensions APIs, it’s now easier to create add-ons that are compatible with Firefox, Chrome, and Opera. Add-ons help keep users to be in control of their online experience, so your support in building them and the community around them matter.”*

* Ask participants to share their experience using browser extensions. What are their favorite extensions and what do those extensions do?
* Walk participants through the tutorial for [building the borderify extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension) on MDN web docs.
* Discuss the [anatomy of an extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
* Have participants follow the MDN tutorial for [building a more complex extension](https://github.com/mdn/webextensions-examples).

At the end of the session, tell attendees when the next event in the series will be held and encourage them to sign up for it in advance. See the ‘Event Followup’ section for more details about how to follow up after your event.

### Second Meeting: APIs in Action, Part 1

During the second event, participants will be introduced to WebExtensions APIs that can perform basic functionalities.  After reviewing the functionalities of these APIs, you will help the group put them in action to create an extension for Firefox. You can make a copy of the presentation [APIs in Action, Part One](https://docs.google.com/presentation/d/1GssoHmC0e7TArrqWz4DKBqL2f8CWel182tr5Y2RAr2k/edit#slide=id.p), and share it with your group.

We recommend the following agenda for this meeting:

* 1st half of the meeting: provide overviews and demonstrations of the following topics:

| Topic | Extension Examples | Videos |
| --------------------- |:-------------------------------------:|:-----------------------------:|
| [Content scripts](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts)               | [Borderify](https://github.com/mdn/webextensions-examples/tree/master/borderify)                    | [Content Script Tutorial](https://youtu.be/WrEgBDg56sM)       |
| [browserAction API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction)      | [Bookmark It](https://github.com/mdn/webextensions-examples/tree/master/bookmark-it)                              |   |
| [pageAction API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction)    | [Chill Out](https://github.com/mdn/webextensions-examples/tree/master/chill-out)                    | [pageAction tutorial ](https://www.youtube.com/watch?v=RBI-j8USuJs&feature=youtu.be)                      |
|                       | [Apply CSS](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction)                                  |                               |
|                       | [IP-Finder](https://github.com/tsl143/jsDemos/tree/master/ipFinder_webext)                                  |                               |
|                       | [Inshorts](https://github.com/viswanathamsantosh/inshorts/tree/page-action)                                  |                               |




* 2nd half of the meeting: ask attendees to put these APIs to use by creating an original extension or by building one of the examples listed in the table above.

💡 If your attendees need help coming up with an idea for building an original extension, ask them to visit the [repository of extension ideas](https://github.com/firefox-addons/ideas/issues) for inspiration.

⭐️ Ask attendees who build an original extension to submit it to addons.mozilla.org. Once it has been submitted, they can navigate to “Manage My Submissions” and “Edit Information” to tag their extension with ‘#mozactivate17.’ Be sure to click “Save Changes” after the tag it added!

At the end of the session, tell attendees when the next event in the series will be held and encourage them to sign up for it in advance.


### Third Meeting: APIs in Action, Part 2
During the third event, participants will explore how their extensions can use the [tabs](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs), [sidebarAction](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/sidebarAction), and [webRequest](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest) APIs to interact with the browser. You can make a copy of the presentation [APIs in Action, Part Two](https://docs.google.com/presentation/d/1_iP7TvHQxKbMynh3tjI1kHGh0gZ5ZElG-K9RYvYjbMk/edit), to customize and share with your group.

We recommend the following agenda for this meeting:

* 1st half of the meeting: provide an overview and demonstration of the following topics:

| Topic | Extension Examples | Videos |
| --------------------- |:-------------------------------------:|:-----------------------------:|
| [Tabs API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs)		| [Tabs Tabs Tabs](https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs)			| [Getting Started with Tabs](https://www.youtube.com/watch?v=GS1nM55iKZo&t=612s&list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD&index=5)	|
|			| [Contextual Identities](https://github.com/mdn/webextensions-examples/tree/master/contextual-identities)			|				|
|			| [Beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify) 				|				|
| [sidebarAction API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/sidebarAction)	| [Annotate Page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page)				| [How to create a Sidebar Menu](https://youtu.be/F6Up_yGfuJw)  |
|			| [Context Menu Demo](https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types) 			| [How to Create a Context Menu](https://www.youtube.com/watch?v=AIh47SUwAs0&feature=youtu.be)  |
|			| [Facebook Messenger as a Sidebar](https://github.com/soapdog/webextension-facebook-messenger-as-a-sidebar)	|				|
| [webRequest API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest) 	| [Stored Credentials](https://github.com/mdn/webextensions-examples/tree/master/stored-credentials)			| 			|
|			| [User Agent Rewriter](https://github.com/mdn/webextensions-examples/tree/master/user-agent-rewriter)					|				|






* 2nd half of the meeting: ask attendees to put these APIs to use by creating an original extension or by building an example from MDN web docs.

💡 If your attendees need help coming up with an idea for building an original extension, ask them to visit the [repository of extension ideas](https://github.com/firefox-addons/ideas) for inspiration.

⭐️ Ask attendees who build an original extension to submit it to addons.mozilla.org. Once it has been submitted, they can navigate to “Manage My Submissions” and “Edit Information” to tag their extension with ‘#mozactivate.’ Be sure to click “Save Changes” after the tag it added!


## Resources
Do you need help getting started with extension development or want to learn as much as possible? Check out these fantastic resources!

🎥  [Building Browser Extensions by Viswaprasanth Ks *Video Series*](https://www.youtube.com/playlist?list=PLdIyyZgtQZ7CJR5XFB5xvZH0oaBIT_gTD)

🎥  [WebExtensions Tutorials by Trishul Goel *Video Series*](https://www.youtube.com/playlist?list=PLI08QU9qtPEJiBs7rVOT4FvXJlisDgTlS)

💃🏽 [More Examples of APIs in Action](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Examples) on MDN web docs

💃🏽 [Webextensions.tech](https://webextensions.tech/) - a scaffolding tool for browser extensions by Shivam , Trishul and Tushar

💃🏽 [Extension Examples and Walkthroughs by Viswaprasanth Ks](https://github.com/iamVP7/MyExtensions/blob/master/README.md)

🔍  [Let’s Write a Web Extension by Blake Winton](https://hacks.mozilla.org/2015/09/lets_write_a_webextension/)

🔍  [Create a Simple WebExtension by David Wals](https://davidwalsh.name/web-extensions)

👍  [Browser Compatibility Table for APIs](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)


## Event Follow-Up

* Immediately after every event, share the link to the impact form with your attendees: [mzl.la/howwasit](mzl.la/howwasit). While you’re at it, why not also send a copy of your slide deck and invite the attendees to join the Telegram group [@addonchats](https://t.me/addonschat)?

* Fill out the post-event metrics on the event page you set up on the Reps portal.

* [Tell us about your event](https://discourse.mozilla.org/t/activate-build-your-own-webextension-add-on-for-firefox/13866) on Discourse. We love to hear about upcoming plans, and of course love to hear about what was achieved at the event with a picture or two!


## Acknowledgements
Thank you to Viswaprasanth Ks, Santosh Viswanatham, Trishul Goel, Karthic Keyan, Andre Garzia, Daniele Scasciafratte, Michael Kohler, Shivam Singhal and Tushar Arora.


</div>
