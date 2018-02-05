# FLINT (FrontLine INTernationaliation)

This project is to get a feel for the various options on internationalization

## Installation

```javascript
npm install
```

## Start up

```javascript
node index.js
```

navigate to localhost:3000

## Background and factors to consider

First things first, go read ["Javascript Internationalization" by Kevin Scott](https://medium.com/@thekevinscott/javascript-internationalization-8952c0538d69) he did a phenomenal job of summarizing a lot of terminology and situations that need to be accounted for within internationalization and localization, and he did so in an easy to read way.

The article and therefore Kevin's review of frameworks is dated, he didn't cover how to switch between locales, and he didn't cover a few specific items (numbers, dates, language specific comparisons, addresses, phone numbers, validation). So this repo will cover some of the topics that he didn't cove (names, dates, & language specific comparisons), as well as a more up-to-date review of relevant frameworks.


## Libraries to look at

* https://www.i18next.com/
    * https://www.gitbook.com/book/i18next/i18next/details
* http://l10ns.org/
    * https://github.com/tinganho/l10ns
* http://airbnb.io/polyglot.js/
    * https://github.com/airbnb/polyglot.js
* https://github.com/messageformat/messageformat.js
* https://github.com/alexei/sprintf.js
* http://i18njs.com/
* http://userguide.icu-project.org/formatparse/messages

## Todo:

Figure out how implement moment.js if possible
