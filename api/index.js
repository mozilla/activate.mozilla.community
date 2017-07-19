const debug = require('debug')('index');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const RemoUserHelper = require('./lib/remoUserHelper');
const remoUserHelper = new RemoUserHelper();

const responses = require('./lib/responses');

const app = express();

const port = process.env.PORT || 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/reps', (req, res) => {
  const repsNames = remoUserHelper.getAllRepsNames()
  res.json(repsNames);
});

app.get('/search', (req, res) => {
  responses.fetch()
    .then((responses) => {
      // A poor man's search algo
      if (req.query.name) {
        responses.events = responses.events.filter((event) => {
          return event.organizerName === req.query.name;
        });
      }

      if (req.query.eventDate) {
        responses.events = responses.events.filter((event) => {
          return event.eventDate === req.query.eventDate;
        });
      }

      return responses.events;
    })
    .then((responses) => {
      res.json(responses);
    })
    .catch((err) => {
      debug('FAILED_TO_FETCH_RESPONSES', err);
      res.status(500);
      res.json({ error: { message: err.message }});
    });
});

app.get('/', (req, res) => {
  responses.fetch()
    .then((responses) => {
      res.json(responses);
    })
    .catch((err) => {
      debug('FAILED_TO_FETCH_RESPONSES', err);
      res.status(500);
      res.json({ error: { message: err.message }});
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  const error = {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  };

  res.status(error.error.status || 500);
  res.json(error);
});

const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
  debug('listening on port ' + server.address().port);
});

module.exports = app;
