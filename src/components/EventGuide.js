import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './EventGuide.css';

class EventGuide extends Component {
  render() {
    return (
      <section className="wrapper">
        <Localized id="eg-title">
          <h1 id="activate-event-planning-guide">Activate Event Planning Guide</h1>
        </Localized>

        <Localized id="eg-started">
          <h2 id="get-started">Get Started</h2>
        </Localized>

        <Localized id="eg-started-content">
          <p>Who you target, where you host and how you promote your event will all depend on the type of event you’re running.</p>
        </Localized>

        <ol>
          <Localized id="eg-started-content-1">
            <li>Decide which activity you will run</li>
          </Localized>
          <Localized id="eg-started-content-2">
            <li>Estimate how many people will attend</li>
          </Localized>
          <Localized id="eg-started-content-3">
            <li>Define objectives</li>
          </Localized>
        </ol>

        <Localized id="eg-venue">
          <h2 id="find-a-venue">Find a venue</h2>
        </Localized>

        <Localized id="eg-venue-content">
          <p>When considering where to hold your event, look for a comfortable, flexible space that’s appropriate for the number of
            participants you expect. Be creative – cafes, community centers, co-working spaces, libraries and hackerspaces are
            great places to start. Since your event will hopefully have more than one or two people, you’ll need tables for each
            participant and room to move around. Ensure there is reliable Internet, enough power outlets and good lighting.</p>
        </Localized>

        <Localized id="eg-experience">
          <h2 id="design-a-fun-experience">Design a fun experience</h2>
        </Localized>
        <Localized id="eg-experience-content">
          <p>Your event should feel like a party! A few simple tricks to help create a welcoming, creative atmosphere include playing
            music, bringing snacks and providing name tags. Having an intro activity or icebreaker is a great way to get everyone
            socializing.</p>
        </Localized>

        <Localized id="eg-schedule">
          <h2 id="schedule">Schedule</h2>
        </Localized>
        <Localized id="eg-schedule-content"
                   wikiLink={<a href="https://wiki.mozilla.org/ReMo/SOPs/Event_hosting">instructions</a>}
        >
          <p>Plan your schedule ahead of time but be flexible; your participants might surprise you with interesting questions or
            challenges to explore. Identify early on what materials are needed for your scheduled activities to run smoothly. A
            checklist of things you will need for set-up/during/after is very useful. Don’t forget to leave yourself adequate prep
            time and if you’re a Rep don’t forget to set up the event on the Reps Portal (
            <a href="https://wiki.mozilla.org/ReMo/SOPs/Event_hosting">instructions</a>).</p>
        </Localized>

        <Localized id="eg-promotion">
          <h2 id="promotion">Promotion</h2>
        </Localized>
        <Localized id="eg-promotion-content">
          <p>There are many ways to promote your event that will create attention and draw more attendees.</p>
        </Localized>

        <p>
          <Localized id="eg-strategy">
            <strong>Recruitment Strategy</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-strategy-content">
            <li>Decide on your attendance goal. how many will you have to invite to make sure that many people RSVP? make a list of
              people you will invite. decide when you will call/email. ask people to make a hard commitment. Email everyone who
              RSVPs during 48 hours before event to reconfirm so fewer people flake.</li>
          </Localized>
        </ul>

        <p>
          <Localized id="eg-online-promotion">
            <strong>Online Promotion and Press</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-online-promotion-content-1">
            <li>Be sure to create an event on Meetup.com or Facebook so you have a quick link you can share to invite people.</li>
          </Localized>
          <Localized id="eg-online-promotion-content-2">
            <li>Share your link on other websites, like in student press, event calendars, and among other local organizations.</li>
          </Localized>
          <Localized id="eg-online-promotion-content-3">
            <li>Your network is a powerful thing! You can also post photos on Instagram or enlist your Twitter followers to help promote
              your event (don’t forget to choose a hashtag!).</li>
          </Localized>
          <Localized id="eg-online-promotion-content-4">
            <li>Send event details to local forums or listserves that have an audience who would be interested in attending.</li>
          </Localized>
          <Localized id="eg-online-promotion-content-5">
            <li>Don’t underestimate the value of a flyer as an informal way to educate others about your event.</li>
          </Localized>
        </ul>

        <Localized id="eg-tech">
          <h2 id="tech">Tech</h2>
        </Localized>
        <Localized id="eg-tech-content">
          <p>When you’re teaching the web, having the right tech set-up and a good plan B is vital to the success of your event.</p>
        </Localized>

        <Localized id="eg-equipment">
          <h3 id="equipment">Equipment</h3>
        </Localized>

        <Localized id="eg-equipment-content">
          <p>Determine your tech needs early on and decide whether you need laptops, projectors, AV equipment, extension cords and
            power cords. Some events are BYOL (Bring Your Own Laptop) in which case it is good to send a reminder to individuals
            to not forget their laptops the day before the event. If individuals are unable to provide their own laptops, consider
            using a space where you can access a computer room or laptops. Another idea is to contact local tech organizations
            or community computer labs that have access to computers and ask them to sponsor equipment for the event in exchange
            for promotion. When deciding how many computers you need don’t forget that you can have participants working in pairs
            or bigger groups. It’s a good idea to try and have an extra laptop on hand for participants just in case of any technical
            problems.</p>
        </Localized>

        <Localized id="eg-backup">
          <h3 id="back-up-plan">Back-Up Plan</h3>
        </Localized>

        <Localized id="eg-backup-content">
          <p>Unfortunately, tech problems are an all too familiar part of events. No matter the preparation, wireless networks or
            computers can cause unexpected issues. If a few computers are malfunctioning, perhaps ask participants to buddy up
            on computers and work in groups. We suggest having a couple offline activities prepared in the case of an emergency.</p>
        </Localized>

        <Localized id="eg-running">
          <h2 id="running-your-event">Running Your event</h2>
        </Localized>

        <Localized id="eg-setup">
          <h3 id="set-up">Set-up</h3>
        </Localized>

        <Localized id="eg-setup-content">
          <p>When preparing for event, be sure to arrive early to set-up the space as needed. Doing a walkthrough before the event
            will make things much easier when it’s time to go. This will allow you plenty of time in case unexpected issues arise.
            Remind your co-leads to welcome newcomers, and make sure your co-leaders know what their jobs are.</p>
        </Localized>

        <Localized id="eg-welcome">
          <h3 id="welcome--registration">Welcome &amp; Registration</h3>
        </Localized>
        <Localized id="eg-welcome-content">
          <p>A good first impression goes a long way towards helping someone feel comfortable and happy at your event.</p>
        </Localized>

        <p>
          <Localized id="eg-welcome-welcome">
            <strong>Welcome</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-welcome-welcome-content">
            <li>Thank everyone for coming. Welcome your new and old participants and make sure to do introductions for new people.</li>
          </Localized>
        </ul>

        <p>
          <Localized id="eg-signin">
            <strong>Sign-in</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-signin-content">
            <li>Once your event gets going it may be very difficult to keep track of who is there. Setting up a sign-in table gives
              you the opportunity to catch people when they first arrive so you can get the names of attendees and contact details
              so that you can send out thank yous, links, updates, and invites to future events. You may also want to give out
              name tags so it’s easier for people to meet and start talking. You can play the name tag game and ask people to list
              their favorite technology, video game, tv show etc. under their name to help get conversations started. Don’t be
              afraid to get creative and help people break the ice!</li>
          </Localized>
        </ul>

        <Localized id="eg-documentation">
          <h3 id="documentation">Documentation</h3>
        </Localized>
        <Localized id="eg-documentation-content">
          <p>Events happen quickly and it’s often impossible to capture or get links of all the awesome things being made. Identify
            a process to capture and share makes early on and share it with volunteers, facilitators and attendees.</p>
        </Localized>

        <Localized id="eg-wrapup">
          <h3 id="wrap-up">Wrap-Up</h3>
        </Localized>
        <Localized id="eg-wrapup-content">
          <p>When it’s time to wrap-up, your attendees will be feeling inspired, energized and ready to share what they’ve learned.
            You’ll want to take advantage of this moment.</p>
        </Localized>

        <p>
          <Localized id="eg-demos">
            <strong>Demos</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-demos-content">
            <li>Set aside time for organizations to share each others’ activities and exchange ideas. At the end of the event, bring
              everyone back together in a circle. Celebrate what participants made. Invite a few people to share their work. Encourage
              the group to post their work online with your club’s hashtag.</li>
          </Localized>
        </ul>

        <p>
          <Localized id="eg-feedback">
            <strong>Get Feedback</strong>
          </Localized>
        </p>

        <ul>
          <li>
            <Localized id="eg-feedback-content-1">
              <p>Ask participants for feedback. What did they learn? What did they enjoy? If they have suggestions for improvement,
                be sure to take notes or invite them to blog about it. Be sure to ask what the participants would like to do next.
                Provide links to the campus websites where they can continue learning new skills. Later, conduct a debrief with
                participating organizations and volunteers, if you had any. Gather feedback and ask if the event was a good way
                for them to serve their communities. Discuss ways to continuing hacking together to keep the momentum going.</p>
            </Localized>
          </li>
          <li>
            <Localized id="eg-feedback-content-2"
                       feedbackLink={<a href="https://mzl.la/howwasit">feedback form</a>}
            >
              <p>Share the centralized
                <a href="https://mzl.la/howwasit">feedback form</a> link to all the participants at the end of the event for collecting feedbacks.</p>
            </Localized>
          </li>
        </ul>

        <p>
          <Localized id="eg-cleanup">
            <strong>Clean-Up</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-cleanup-content">
            <li>Build and maintain a good relationship with your venue by making sure you leave it as clean as when you arrived. That
              way, if you want to run another event next year they will be thrilled to have you back.</li>
          </Localized>
        </ul>
      </section>
    );
  }
}

export default EventGuide;
