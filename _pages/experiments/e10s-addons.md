---
layout: page
title:  "e10s and Featured Add-ons"
permalink: /experiments/e10s-addons/
lang: en
ref: e10s-addons
parent: experiments
---

* TOC
{:toc}

Featured add-ons receive enhanced promotion on AMO, which results in greatly increased installs for this recommended content. With the emergence of multiprocess Firefox (e10s), we need to ensure these spotlighted add-ons meet the highest levels of browser compatibility and functionality.

__NOTE: This activity is running only until November 4th, 2016__.

## Impact and Metrics

Millions of Firefox users have installed add-ons directly from the [Featured Add-ons collection](https://addons.mozilla.org/firefox/extensions/?sort=featured). They expect and trust Mozilla to guide them to the very best add-ons content. Ensuring compatibility with the latest browser technology, in this case e10s—which will be turned on for Firefox with Firefox 50 (November 8) who have compatible add-ons—is critical to the claim that these featured add-ons deserve their attention.

### Goals for this area

__Impact:__

* 55 featured add-ons, with <100k users, are tested
* 400 individual add-on tests

__Strength:__

* 15 Mobilizers activated
* 200 add-on testers at events

## Audience for this activity

This is for participants with an interest or passion for add-ons content from a user experience perspective. You do not need any particular technical skills, but rather an ability to install add-ons and test their features to ensure the content works as expected with multiprocess Firefox.

## Activity Format

While this activity can be run solo, we encourage you to run an event in your community to get together people who care about the Web. The goal is to test sites, diagnose problems, and discuss how to evangelise locally to developers about a Web that works for everyone.

1. Put an event team together
2. Choose a date and secure a venue
3. Setup the event on Reps Portal ([instructions](https://wiki.mozilla.org/ReMo/SOPs/Event_hosting)). [Find a Rep](https://reps.mozilla.org/people/) closeby to do this if you are not one.

For duration, we recommend 2-3 hours with 10-15 attendees.

## Event Flow

### Introduction

* Give a quick introduction to attendees about what we are doing and why it is important. The main point is that with more compatible add-ons, e10s will roll out faster to potentially millions more Firefox users.
* Ask attendees to tweet about their attendance. Here is a suggested message:
    * I’m helping more @Firefox add-ons to become compatible with new cutting edge technology <link of this page> #MozActivate

### Steps to test...

All test reporting takes place on the [Featured Add-ons Compatibility Test page](https://featured-addons-test.herokuapp.com/). You should see a link to an add-on near the top of the page.
To make sure multiprocess Firefox is enabled, you'll need to use [Firefox 50 (Beta)](https://www.mozilla.org/firefox/channel/) when testing an add-on. For every add-on you want to test, you’ll need to do the following:

1. Create a new Firefox profile by going to __about:profiles__ => “Create new profile”. Enter a name and click “Done”. Then click “Launch profile in new browser” to launch it.
2. Install the ["Add-on Compatibility Reporter"](https://addons.mozilla.org/addon/add-on-compatibility-reporter?src=external-activatee10s1) (ACR) add-on in the new profile.
3. Install the add-on you want to test in the new profile. 
4. Go to __about:addons__ and make sure that it says “Multiprocess is enabled” in the top right corner and “Compatible to multiprocess” for the add-on you are testing. 
5. Test the main functionality of the add-on. Does it perform as expected? (Testing typically takes 15 - 30 minutes)
6. Once testing is complete, go back to the Featured Add-on Test page in your main profile and select YES or NO to reflect its test results, then click “Submit”.
    1. Feel free to leave comments (optional) if you care to detail issues you may have encountered.
    2. Clicking Submit will also refresh the page, and serve up a new add-on to test. Test as many as you like!

## Output

Additional to the recommended event flow here are some things we’d like you, the event organizer, to do.

* Fill out the post-event metrics on the event page you setup on the Reps portal
* Tell us about your event. This can be before and after. We love to hear about upcoming plans, and of course love to hear about what was achieved at the event with a picture or two!
    * [Here is the Discourse post to write to](https://discourse.mozilla-community.org/t/activate-mozilla-e10s-compatibility-and-featured-add-ons/11193)

## Extra

If you’re interested in add-ons and want to learn more about ways you can get involved with addons.mozilla.org, please visit: [https://wiki.mozilla.org/Add-ons/Contribute](https://wiki.mozilla.org/Add-ons/Contribute)
