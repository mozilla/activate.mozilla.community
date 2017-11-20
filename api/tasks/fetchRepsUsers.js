'use strict';

const debug = require('debug')('Activate:Tasks:ReMo:UserFetcher');
const config = require('../config.json');
const remoUserHelper = require('../lib/remoUserHelper');

remoUserHelper.getAll()
  .then((reps) => {
    const storageHelper = remoUserHelper.getStorage();
    return storageHelper.saveStorageItem(config.repsUserStorageKey, reps);
  })
  .catch((err) => {
    debug('REPS_FETCH_FAILED', err);
  });
