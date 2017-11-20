const SheetHelper = require('./sheetHelper');
const sheetHelper = new SheetHelper();

const ResponseParser = require('./responseParser');
const responseParser = new ResponseParser();

module.exports = {
  fetch: () => {
    return sheetHelper.fetch()
      .then((result) => {
        return responseParser.parse(result);
      });
  }
};
