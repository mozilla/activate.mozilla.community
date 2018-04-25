'use strict';

const debug = require('debug')('Activate:Storage');
const Storage = require('dom-storage');

module.exports = class StorageHandler {
  constructor() {
    debug('initializing..');

    this.storage = new Storage('./db.json', { strict: false, ws: '' });
  }

  /**
   * Clears the storage
   */
  clear(key, data) {
    debug('start save..');

    this.storage.clear();
  }

  /**
   * Saves the data to local storage
   *
   * @param  {String}  key         key to save
   * @param  {Object}  data        data to save
   * @return {Object}              data
   */
  saveStorageItem(key, data) {
    debug('start save..');

    this.storage.setItem(key, data);
    debug('finished saving latest data');
    return data;
  }

  /**
   * Returns an item from the storage with a given key
   *
   * @param {String} key  key to fetch from storage
   * @return {Object}     object from storage
   */
  getStorageItem(key) {
    return this.storage.getItem(key);
  }
}
