# Activity Campaign site

This is a rewrite for the Activate campaign site. You can see the current site live at [https://activate.mozilla.community/](https://activate.mozilla.community/). This project here will include the branding update as well as the rewrite to React. The benefits are:

* Modernized architecture
* Way easier l10n (we will be able to integrate with Pontoon)
* No more copy/pasting activities to all language folders

## How to add or update content

tbd

## Submit a new localization

tbd

## Hack the site

First you need to install the dependencies. Make sure you have node/npm installed first.

```
$ npm install
```

Run the site using

```
$ npm start
```

You will be able to access the site at [http://127.0.0.1:3000/](http://127.0.0.1:3000/)

If you want to develop pages requiring the API locally, follow the steps in the ```api/README.md``` to install and start the API locally.

### Building the site for production

To build the site like it is in production, you can run the following npm script:

```
$ npm run build
```

### How deployment works

tbd