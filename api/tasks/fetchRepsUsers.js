'use strict';

const debug = require('debug')('Tasks:ReMo:UserFetcher');
const config = require('../config.json');
const RemoUserHelper = require('../lib/remoUserHelper');
const remoUserHelper = new RemoUserHelper();
const StorageHelper = require('../lib/storageHelper');
const storageHelper = new StorageHelper();

remoUserHelper.getAll()
  .then((reps) => {
    return storageHelper.saveStorageItem(config.repsUserStorageKey, reps);
  })
  .catch((err) => {
    debug('REPS_FETCH_FAILED', err);
  });
