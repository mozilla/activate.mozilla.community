'use strict';

const debug = require('debug')('Activate:SheetHelper');
const GoogleSpeadsheet = require('google-spreadsheet');
const config = require('../config.json');

module.exports = class SheetHelper {
  /**
   * Fetch the responses from a google sheet according to the configured values.
   * The values can be configured in a seperate config.json.
   *
   * @return {Promise} fetching promise
   */
  fetch() {
    return new Promise((resolve, reject) => {
      const doc = new GoogleSpeadsheet(config.sheetId);
      let sheet;

      doc.getInfo((err, info) => {
        if (err) {
          return reject(new Error('SHEET_COULD_NOT_BE_FETCHED'));
        }

        sheet = info.worksheets[0];
        const rowsOption = {
          offset: 1
        };

        sheet.getRows(rowsOption, (err, rows) => {
          const preparedRows = rows.map((row) => {
            return {
              eventName: row.eventname,
              eventDate: row.eventdate,
              organizerName: row.organizername,
              nps: row.nps,
              profession: row.profession
            };
          });

          resolve(preparedRows);
        });
      });
    });
  }
}
