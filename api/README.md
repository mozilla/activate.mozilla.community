# MozActivate Impact Form API
API for the view on how well activities from activate.mozilla.community were perceived to give organizers feedback on their event.

This reads from the impact form which is presented at the end of all activities to participants. The frontend code will be implemented on [MozActivate](https://activate.mozilla.community).

## Configuration

By default you will get the standard configuration. If you would like to change those, follow the rest of this step. Otherwise you can skip this step.

```
$ cp config-sample.json config.json
```

The ```config.json``` script holds the configuration values. Please adapt it to your needs. The spreadsheet ID is the cryptic sequence of numbers and letters in the URL of your spreadsheet.

Example config:

```
{
  "sheetId": "1RT17Uar51jsm3g9tO3vhYu3euTsPl11Xq-Aswt34Q1b",
  "repsUserStorageKey": "REPS_USERS"
}
```

## Run the API
Now you can continue with your installation.

```
$ npm install
$ npm start
```

You can now find the API on ```localhost:6500```.

## Update the Reps DB
The Reps links are fetched from the Reps portal. This is not done on every request, as this would take way too long. All the Reps info (public only) is stored in a json database. To update the database, run

```
$ npm run fetch:users
```

## The following endpoints are available
```/```: list all response summaries grouped by event as well as totals

```/search```: list all response summaries filtered by the search term. Example: ```/search?name=Michael Kohler&eventDate=2017-07-22```

```/reps```: returns an array with all Rep names

## Docker

Once the app is set up as explained above, you can create a docker image with all the necessary data. The docker container will update itself regularly.

```
$ docker build -t activateapi .
$ docker run -d -p 6500:6500 --name activate activateapi
```