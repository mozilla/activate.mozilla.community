# Activity Campaign site

You can see the current site live at [https://activate.mozilla.community/](https://activate.mozilla.community/).

## How to add or update content

To update content, please change the respective file and make sure you use `<Localized>` with an `id` atrribute that is not yet used. Then add a line to the `public/locales/en-US/activate.ftl` file with the key and your new content. Please use a `Localized` element per HTML tag you are adding. It's best to have a quick look at existing content to make sure you understand the logic. It's not needed to add the new strings to any other language, this will be done through Pontoon.

**Example:**

in your content:

```
<Localized id="some-key">
  <p>This is my paragraph</p> <!-- this text here will only be used if the translation file can't be fetched -->
</Localized>
```

in `public/locales/en-US/activate.ftl`:

```
some-key = This is my paragraph that can be localized
```

will result in:

```
<p>This is my paragraph that can be localized</p>
```

**Warning:** if you change a string in the `public/locales/en-US/activate.ftl` file and want to make sure that it will be shown as "needs re-translation" in Pontoon, please change the `id` of the `<Localized>` element to new key and use that key for your updated sentence. Fixing typos in the en-US strings does not require a new key as it doesn't need to re-trigger a translation. If this is not done, the new string will not show up as "untranslated" in Pontoon and localizers won't know that it has changed.

**Example:**

existing content:

```
<Localized id="existing-content">
  <p>Existing content</p>
</Localized>
```

should be changed to

```
<Localized id="new-key">
  <p>Completely new text</p>
</Localized>
```

and then in `public/locales/en-US/activate.ftl` remove the `existing-content` key if it's not used anywhere else and add your new key:

```
new-key = This is my completely new text that needs re-translation
```

## Submit a new localization

To submit a new localization:

1) Check on [Pontoon](https://pontoon.mozilla.org/) if the language is already being translated
2) If not, open an issue in this repository to add the new language to Pontoon
3) Somebody with access will add the new language to Pontoon to be translated
4) Once the language translation is at >95% we will activate it on the website

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

### Building the site for production

To build the site like it is in production, you can run the following npm script:

```
$ npm run build
```

### How deployment works

This website is hosted on GitHub Pages. There are automated builds and deployments by Travis CI:

* whenever there is a push to the `master` branch
* every 24 hours

To make sure there are not too many concurrent builds, Travis CI is set to:

* cancel builds if it deems necessary
* no parallel builds to make sure we keep order

To deploy manually if needed, you can simply run

```
$ npm run deploy
```

if you have write access to the repository. This will build the production version and commit it to GitHub pages. You will then see your changes live at [https://activate.mozilla.community/](https://activate.mozilla.community/). Please note that currently the github.io link would not work as there are static / dependent links.