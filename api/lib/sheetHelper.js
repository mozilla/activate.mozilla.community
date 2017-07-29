'use strict';

const debug = require('debug')('SheetHelper');
const fs = require('fs');
const readline = require('readline');
const google = require('googleapis');
const googleAuth = require('google-auth-library');
const config = require('../config.json');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_DIR = '.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'sheets.json';

module.exports = class SheetHelper {
  /**
   * Initialize the authorization for Google Sheets as we are dealing with
   * documents that need authorizations.
   *
   * @return {Promise} authorization promise
   */
  init() {
    // We need to overwrite the locally saved credential files if they
    // were passed in through ENV variables. This allows us to run it
    // in a docker image without building the image with credentials.
    this.writeCredentialsIfNecessary();

    debug('Authorizing..');
    return this.authorize()
      .catch((err) => {
        debug('Authorization failed', err);
        return new Error('AUTHORIZATION_FAILED');
      });
  }

  writeCredentialsIfNecessary() {
    const credentials = process.env.CREDENTIALS;
    const secret = process.env.SECRET;
    const credentialsDir = '.credentials';

    if (credentials && secret) {
      if (!fs.existsSync(credentialsDir)) {
          fs.mkdirSync(credentialsDir);
      }

      fs.writeFileSync(credentialsDir + '/sheets.json', credentials);
      fs.writeFileSync('client_secret.json', secret);
    }
  }

  /**
   * Authorize the user with Google Sheets.
   *
   * @return {Promise} authorization promise
   */
  authorize() {
    return this.loadToken()
      .then(this.authorizeRemote)
      .then(this.storeToken)
      .then((oauth2Client) => {
        this.oauth2Client = oauth2Client;
      });
  }

  /**
   * Load the token from the secret file. This needs to be saved from Google
   * API beforehand.
   *
   * @return {Promise} loading promise
   */
  loadToken() {
    return new Promise((resolve, reject) => {
      fs.readFile('client_secret.json', (err, content) => {
        if (err) {
          debug('Error loading client secret file: ' + err);
          return reject(new Error('LOADING_CLIENT_SECRET_FAILED'));
        }

        return resolve(JSON.parse(content));
      });
    });
  }

  /**
   * Authorize the User remotely with Google Sheets. This will show an url
   * to the user they need to visit. After authorizing, we expect the token
   * code to be entered.
   *
   * @param  {Object} credentials existing credentials object
   * @return {Promise}            authorization promise
   */
  authorizeRemote(credentials) {
    return new Promise((resolve, reject) => {
      const clientSecret = credentials.installed.client_secret;
      const clientId = credentials.installed.client_id;
      const redirectUrl = credentials.installed.redirect_uris[0];
      const auth = new googleAuth();
      const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

      fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) {
          const authUrl = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES
          });

          console.log('Authorize this app by visiting this url: ', authUrl);

          const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });

          rl.question('Enter the code from that page here: ', (code) => {
            rl.close();
            oauth2Client.getToken(code, (err, token) => {
              if (err) {
                debug('Error while trying to retrieve access token', err);
                return;
              }

              oauth2Client.credentials = token;
              resolve(oauth2Client);
            });
          });
        } else {
          oauth2Client.credentials = JSON.parse(token);
          resolve(oauth2Client);
        }
      });
    })
  }

  /**
   * Store the received credentials locally so we don't need to ask the user
   * to authenticate every single time the script runs.
   *
   * @param  {Object} oauth2Client existing client we need to pass to extend
   * @return {Promise}             file writing promise
   */
  storeToken(oauth2Client) {
    const token = oauth2Client.credentials;

    return new Promise((resolve, reject) => {
      try {
        fs.mkdirSync(TOKEN_DIR);
      } catch (err) {
        if (err.code != 'EEXIST') {
          throw err;
        }
      }

      fs.writeFile(TOKEN_PATH, JSON.stringify(token));
      debug('Token stored to ' + TOKEN_PATH);
      resolve(oauth2Client);
    });
  }

  /**
   * Fetch the responses from a google sheet according to the configured values.
   * The values can be configured in a seperate config.json.
   *
   * @return {Promise} fetching promise
   */
  fetch() {
    return new Promise((resolve, reject) => {
      const sheets = google.sheets('v4');
      sheets.spreadsheets.values.get({
        auth: this.oauth2Client,
        spreadsheetId: config.sheetId,
        range: config.range,
      }, (err, response) => {
        if (err) {
          debug('The API returned an error: ' + err);
          return reject(new Error('API_ERROR'));
        }

        const rows = response.values;
        if (!rows || rows.length == 0) {
          debug('No data found.');
        }

        resolve(rows);
      });
    });
  }
}
