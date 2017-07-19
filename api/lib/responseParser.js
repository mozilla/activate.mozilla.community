'use strict';

const debug = require('debug')('ResponseParser');
const dateFormat = require('dateformat');
const RemoUserHelper = require('../lib/remoUserHelper');
const remoUserHelper = new RemoUserHelper();

module.exports = class ResponseParser {
  /**
   * Creates an object from the response to make sure we assign to real properties
   * @param  {Array} responses responses from the form
   * @return {Array}           descriptive responses as objects
   */
  parse(responses) {
    debug('Creating responses..');
    const fullEventResponses = this.gatherEventDataFromResponses(responses);
    const preparedEvents = this.prepareEventsData(fullEventResponses);
    const events = this.convertEventObjectToArray(preparedEvents);
    const scoredEvents = this.scoreEvents(events);
    const allScores = this.getAllScores(scoredEvents);

    const totals = {
      totalResponses: fullEventResponses.length,
      totalEvents: scoredEvents.length,
      overallNPS: this.calculateNPS(allScores),
      typeOfEvents: this.getTypeSummary(events)
    };

    const eventsWithoutScore = this.removeScoreFromEvents(events);
    const eventsSortedByDate = eventsWithoutScore.sort((a, b) => {
      return new Date(b.eventDate) - new Date(a.eventDate);
    });

    return {
      totals,
      events: eventsSortedByDate
    };
  }

  convertEventObjectToArray(object) {
    return Object.keys(object).map((key) => {
      return object[key];
    });
  }

  sanitizeResponse(response) {
    if (!response.profession) {
      response.profession = '';
    }

    return response;
  }

  gatherEventDataFromResponses(responses) {
    return responses.map((response) => {
      const eventResponse = this.getGeneralEventInfo(response);

      if (eventResponse) {
        eventResponse.nps = response[3];
        eventResponse.profession = response[4];
      }

      return eventResponse;
    }).filter((response) => { return response; });
  }

  getGeneralEventInfo(response) {
    if (!response[1]) {
      return;
    }

    const eventDate = new Date(response[2]);
    const formattedEventDate = dateFormat(eventDate, "isoDate");

    return {
      key: response[1] + '_' + response[2],
      eventName: response[0],
      eventDate: formattedEventDate,
      organizerName: response[1],
      organizerUrl: remoUserHelper.getRepUrlByFullName(response[1])
    };
  }

  prepareEventsData(responses) {
    return responses.reduce((acc, response) => {
      response = this.sanitizeResponse(response);

      acc[response.key] = acc[response.key] || response;

      const addIndividualResponseScore = (acc, response) => {
        acc[response.key].scores = acc[response.key].scores || [];
        acc[response.key].scores.push(parseInt(response.nps, 10));

        return acc;
      };

      const addIndividualResponseProfession = (acc, response) => {
        acc[response.key].professions = acc[response.key].professions || {};
        const professionKey = response.profession;

        if (acc[response.key].professions[professionKey] !== undefined) {
          acc[response.key].professions[professionKey] += 1;
        } else {
          acc[response.key].professions[professionKey] = 1;
        }

        return acc;
      };

      const addNumberOfResponses = (acc, response) => {
        acc[response.key].numberOfResponses = acc[response.key].numberOfResponses || 0;
        acc[response.key].numberOfResponses++;

        return acc;
      };

      addIndividualResponseScore(acc, response);
      addIndividualResponseProfession(acc, response);
      addNumberOfResponses(acc, response);

      return acc;
    }, {});
  }

  getAllScores(events) {
    return events.reduce((acc, value) => {
      return acc.concat(value.scores);
    }, []);
  }

  scoreEvents(events) {
    return events.map((event) => {
      event.nps = this.calculateNPS(event.scores);
      return event;
    });
  }

  removeScoreFromEvents(events) {
    return events.map((event) => {
      delete event.scores;
      return event;
    });
  }

  calculateNPS(scores) {
    const numberOfScores = scores.length;
    let promoters = 0;
    let detractors = 0;

    for (let score of scores) {
      if (score >= 7) {
        promoters++;
      } else if (score <= 4) {
        detractors++;
      }
    }

    const promoterRatio = promoters / numberOfScores;
    const detractorRatio = detractors / numberOfScores;

    const nps = Math.round((promoterRatio - detractorRatio) * 100);
    return nps;
  }

  getTypeSummary(responses) {
    return responses.reduce((acc, response) => {
      if (acc[response.eventName] !== undefined) {
        acc[response.eventName] += 1;
      } else {
        acc[response.eventName] = 1;
      }

      return acc;
    }, {});
  }
}
