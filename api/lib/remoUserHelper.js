'use strict';

const debug = require('debug')('ReMo:UserHelper');
const fetch = require('node-fetch');
const mapSeries = require('promise-map-series')
const config = require('../config.json');
const StorageHelper = require('../lib/storageHelper');
const storageHelper = new StorageHelper();

module.exports = class RemoUserHelper {
  constructor() {
    this.url = 'https://reps.mozilla.org/api/remo/v1/users/?format=json';
    this.reps = [];
    this.fetchLength = 20;
  }

  /**
   * Returns the first Rep with the given fullname
   *
   * @return {Object} Rep with given full name
   */
  getRepUrlByFullName(fullName) {
    const reps = storageHelper.getStorageItem(config.repsUserStorageKey);
    const rep = reps.find((rep) => {
      const name = rep.first_name + ' ' + rep.last_name;
      return name === fullName;
    });

    if (!rep) {
      return '';
    }

    return rep.remo_url;
  }

  getAllRepsNames() {
    const reps = storageHelper.getStorageItem(config.repsUserStorageKey);
    return reps.map((rep) => {
      return rep.first_name + ' ' + rep.last_name;
    }).sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  }

  /**
   * Initializes a query for all Reps.
   *
   * @return {Promise} Promise which resolves with all repositories found
   */
  getAll() {
    return new Promise((resolve, reject) => {
      return this.fetchPagesRecursively(this.url, resolve, reject);
    })
    .then((reps) => {
      return mapSeries(reps, (rep) => {
        return this.fetchRepsProfile(rep._url);
      });
    })
    .then((extendedReps) => {
      return extendedReps;
    });
  }

  /**
   * Fetches Reps
   *
   * @param  {String}  url           page of the current iteration
   * @param  {Function} resolve      Promise resolve function
   * @param  {Function} reject       Promise reject function
   */
  fetchPagesRecursively(url, resolve, reject) {
    debug(`getting next page ${url}`);

    fetch(url).then((res) => {
      return res.json();
    }).then((response) => {
      const results = response.results;
      if (!response || results.length === 0) {
        return reject(new Error(`we did not get any more Reps from the API`))
      }

      debug(`got ${results.length} Reps`);

      this.reps = this.reps.concat(results);

      if (results && results.length === this.fetchLength) {
        debug(`we need to get more!`);
        this.fetchPagesRecursively(response.next, resolve, reject);
      } else {
        resolve(this.reps);
      }
    }).catch((err) => {
      reject(err);
    });
  }

  /**
   * Fetches a Reps profile
   */
  fetchRepsProfile(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        debug('Successfully fetched', url);
        return res.json();
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        debug('We had an error fetching a profile', url, err);
      });
    });
  }
}
