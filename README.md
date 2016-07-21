# Activity Campaign site

You can see this site live at [https://activate.mozilla.community/](https://activate.mozilla.community/)

## How to add or update content

All content can be edited using just [Markdown](https://en.wikipedia.org/wiki/Markdown) files.

* Front page can be modified editing [index.md](/_includes/index.md).
* Pages can be added/edited from the [_pages](/_pages) folder, including subfolders for localized content (front page included).
* User interface strings for all languages are in [_data/l10n](/_data/l10n/).

Each page has a top section with some variables:

```
---
layout: page
title:  "Developer Engagement"
permalink: /area/developer-engagement
lang: en
ref: developer-engagement
---
```

* **layout:** Layout for the page, this has to be ``page``.
* **title:** Main title for the page.
* **permalink:** Unique, can include lang code for localized pages.
* **lang:** Language code for this page, usually ``en``.
* **ref:** Unique reference for this page, just use the permalink in English, it's used to match localized pages.

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
