# Activity Campaign site

You can see this site live at [https://activate.mozilla.community/](https://activate.mozilla.community/)

## How to add or update content

All content can be edited using [Markdown](https://en.wikipedia.org/wiki/Markdown) files.

* Front page (in English) can be modified editing [index.md](/_includes/index.md).
* Pages can be added/edited from the [_pages](/_pages) folder, including subfolders for localized content (front page included).
* Some parts are used multiple times and therefore are in a separate file, please also check the subfolders in [_includes](/_includes) for translations.
* General parts of the website such as the menu are configured in [_data/l10n](_data/l10n). Please translate those strings there as well.

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
* The **title:** (Localizable) Main title for the page.
* **permalink:** (Unique, Localizable) URL for the page, can include lang code for localized pages.
* **lang:** (Localizable) Language code for this page, usually ``en``.
* **ref:** Reference for this page. Just use the permalink in English, all localized pages should have the same one.
* **parent** (Optional) For subpages this defines the parent page ref.

## Submit a new localization

1. In order to request a new localization, please [create a new issue](https://github.com/mozilla/activate.mozilla.community/issues) with the title "LanguageName (LanguageCode) localization"
2. The locale will be evaluated by the program manager, along with members of that community.
3. If it gets the green light, we will notify the localization team and create the folder structure.
4. Then the localization team can translate the markdown files in their Language.
5. Once the localization team signs off on the translations, we will enable the language on the website.

## Localize the impact form
1. Create a new issue using the following format on the title "Impact form localization (languageCode)"
2. To be able to localize the impact form, you need to create a new folder (using your languageCode in the title) in the _include and _pages folder. 
3. Once you create it, you need copy formcontent.html (from _include folder) into your new folder. You need to copy the impactform.md file (from the _pages folder) as well into your new folder. 
4. Localize the new file you've just copied. 
5. Send a PR and it will be evaluated before it goes online on the website. 


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

Clone this repo, create an issue first and then a pull request to submit changes.
