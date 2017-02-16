# Activity Campaign site

You can see this site live at [https://activate.mozilla.community/](https://activate.mozilla.community/)

## How to add or update content

All content can be edited using just [Markdown](https://en.wikipedia.org/wiki/Markdown) files.

* Front page (in English) can be modified editing [index.md](/_includes/index.md).
* Pages can be added/edited from the [_pages](/_pages) folder, including subfolders for localized content (front page included).
* Translations are managed through [Pontoon](http://pontoon.mozilla.org/)

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

1. In order to request a new localization, please [create a new issue](https://github.com/mozilla/activate.mozilla.community/issues) with the title "LanguageName (LanguageCode) localization"
2. The locale will be evaluated by the program manager, along with members of that community.
3. If it gets the green light, we will move the strings into [Pontoon](http://pontoon.mozilla.org/) and notify the localization team
4. At regular intervals, we will monitor Pontoon and once a particular locale is finished, we will merge back into Github and turn on the locale on the site. You can file an issue on Github to make us aware of the final strings as well, so we can add the new locale within a few days.
5. Once the product goes live, updates and corrections won’t happen automatically through Pontoon. For changes, we will merge back into the site at regular intervals. Again, if you think your change is still not on the production site, you can create an issue here and we will have a look.

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
