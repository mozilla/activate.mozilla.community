---
layout: impact
title:  "Impact"
permalink: /impact/
lang: en
ref: impact
---

# Impact

This lists all events that have gotten a response through the [Impact Form](/impactform). We don't list any single responses, as this would violate the privacy of the attendees that filled the form.

{: #loading }
<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> loading...

<div class="impact-totals">
  <div class="dashboard">
    <div class="column">
      <h2>Total responses</h2>
      <span class="total-responses"></span>
    </div>
    <div class="column">
      <h2>Total events</h2>
      <span class="total-events"></span>
    </div>
    <div class="column">
      <h2>Overall NPS</h2>
      <span class="overall-nps"></span>
    </div>
  </div>

  <h2>Type of Events:</h2>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Total of events</th>
      </tr>
    </thead>
    <tbody class="total-event-types">
    </tbody>
  </table>

  <h2>Search</h2>
  <form id="impact-event-search">
    <select id="search-name"></select>
    <input class="form-control" id="date" name="date" placeholder="2017-07-19" data-toggle="datepicker" data-date-format="yyyy-mm-dd" />
    <input class="submit" type="submit" />
  </form>

  <h2>Overview of all Events</h2>
  <table>
    <thead>
      <tr>
        <th>Event name</th>
        <th>Event date</th>
        <th>Organizer</th>
        <th>NPS</th>
        <th>Number of responses</th>
      </tr>
    </thead>
    <tbody class="events-table">
    </tbody>
  </table>
</div>
