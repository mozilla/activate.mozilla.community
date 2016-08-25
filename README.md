# Activity Campaign site

You can see this site live at [https://activate.mozilla.community/](https://activate.mozilla.community/)

## How to add or update content

All content can be edited using just [Markdown](https://en.wikipedia.org/wiki/Markdown) files.

* Front page (in English) can be modified editing [index.md](/_includes/index.md).
* Pages can be added/edited from the [_pages](/_pages) folder, including subfolders for localized content (front page included).
* User interface strings for all languages are in [_data/l10n](/_data/l10n/).

Each page has a top section with some variables:

```
---
layout: page
title:  "Developer Engagement"
permalink: /developer-engagement/
lang: en
ref: developer-engagement
---
```

* **layout:** Layout for the page. This has to be ``page``.
* **title:** (Localizable) Main title for the page.
* **permalink:** (Unique, Localizable) URL for the page, can include lang code for localized pages.
* **lang:** (Localizable) Language code for this page, usually ``en``.
* **ref:** Reference for this page. Just use the permalink in English, all localized pages should have the same one.
* **parent** (Optional) For subpages this defines the parent page ref.

## Submit a new localization

**NOTE: Currently we are not accepting any new localizations until we improve the system to be able to scale**

In order to request a new localization, please [create a new issue](https://github.com/mozilla/activate.mozilla.community/issues) with the title "LanguageName (LanguageCode) localization" and we will create the folder structure for it.

Once this is created you will need to:
* [Fork this repository](https://help.github.com/articles/fork-a-repo/).
* Localize all files inside ``_pages/yourlangcode/`` and ``_data/l10n/yourlangcode.yml``.
* [Send a pull request](https://help.github.com/articles/using-pull-requests/) to have these changes reviewed and incorporated.

**Important:** Make sure you check [how to update content](https://github.com/mozilla/activate.mozilla.community#how-to-add-or-update-content) from the pages in this site first.

## Hack the site

If you want to hack the site you need to download it and install Jekyll.

``$ git clone https://github.com/mozilla/activate.mozilla.community.git``

Now [install Jekyll in your system](https://jekyllrb.com/docs/installation/)

Install the dependencies

``$ bundle install``

Run the site using the developer config

``$ bundle exec jekyll serve --config ./_config-dev.yml``

You will be able to access the site at [http://127.0.0.1:4000/
](http://127.0.0.1:4000/
)

Clone this repo, create a issue first and then a pull request to submit changes.
