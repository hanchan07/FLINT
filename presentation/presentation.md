
	<!--
		Note that Windows uses `\r\n` instead of `\n` as its linefeed character.
		For a regex that supports all operating systems, use `\r?\n` instead of `\n`.
	-->
	# Internationalization
	## aka I18n
	
	Tyler Hansen, Sean Duncan  
	& the Max Power & A-team Mob
	

	---
	
	## Overview
	- ["Javascript Internationalization" by Kevin Scott](https://medium.com/@thekevinscott/javascript-internationalization-8952c0538d69) <!-- .element: class="fragment" data-fragment-index="0" -->
	- i18n & i10n <!-- .element: class="fragment" data-fragment-index="1" -->
	- Interpolation <!-- .element: class="fragment" data-fragment-index="2" -->
	- Plurals <!-- .element: class="fragment" data-fragment-index="3" -->
	- Numbers <!-- .element: class="fragment" data-fragment-index="4" -->
	- Dates & Times <!-- .element: class="fragment" data-fragment-index="5" -->
	
	Notes:  
	
- Dates — Date formats change across cultures. For example, 10/4/15 means October 4th in the US, and April 10th in the UK.
- Times — Different locales require either a 24-hour clock or 12-hour clock. Also, some locales use different notations, like 5h10 in French.
- Formatting of numbers — Different locales use different digits to represent numbers. So, 3,025.23 in English would be 3.025,23 in Greman, and 3 025,23 in French.

	---
	
	## Not Considered
	- Currencies <!-- .element: class="fragment" data-fragment-index="0" -->
	- Addresses <!-- .element: class="fragment" data-fragment-index="1" -->
	- Phone Numbers <!-- .element: class="fragment" data-fragment-index="2" -->
	- Validation <!-- .element: class="fragment" data-fragment-index="3" -->
	- UI Spacing <!-- .element: class="fragment" data-fragment-index="4" -->
	- Text Sorting <!-- .element: class="fragment" data-fragment-index="5" -->
	- Punctuation <!-- .element: class="fragment" data-fragment-index="6" -->
	
	---
	
	## Libraries under consideration

	* Primary
	  * [i18next](https://www.i18next.com/)
	  * [l10ns](http://l10ns.org/)
	  * [Polyglot](http://airbnb.io/polyglot.js/)
	* Helper
	  * [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	

	----
	
	## i18next
	
	---
	
	### Strings with Interpolation
	
```js
{
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                string1: 'hello world',
                string2:
                    'My name is {{user.firstName.roman}} {{user.lastName.roman}}.',
                }
            },
        },
        es: {
            translation: {
                string1: 'hola mundo',
                string2: 'Me llamo {{user.firstName.letras}} {{user.lastName.letras}}.',
            },
        },
    },
},
```
	
	---
	
	### Pluralization
	
```
{
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                helloWorld: 'hello world',
                greeting:
                    'My name is {{user.firstName.roman}} {{user.lastName.roman}}.',
                date: "Today's date is {{date, MM/DD/YYYY}}.",
                plural: {
                    "thing":                 "item",
                    "thing_plural":          "items",
                    "thingWithCount":        "{{count}} item",
                    "thingWithCount_plural": "{{count}} items"
                }
            },
        },
        es: {
            translation: {
                helloWorld: 'hola mundo',
                greeting: 'Me llamo {{user.firstName.letras}} {{user.lastName.letras}}.',
                date: 'Hoy es {{date, MM/DD/YYYY}}',
            },
        },
    },

    plural: {
        format: function(value, format, lng) {
            if (value instanceof Date)
                return moment(value).format(format);
            return value;
        },
    },
},
function(err, t) {
    // init set content
    updateContent();
}
```
	
	---
	
	### Dates & Times w/ MomentJS
	
```
resources: {
    en: {
        translation: {
            date: 'Today\'s date is {{date, MM/DD/YYYY}}.',
        },
    },
    jp: {
        translation: {
            date: '今日は{{date, 年YYYY月MM日DD}}です。'
        },
    },
    hi: {
        translation: {
            date: 'आज तारीख है {{date, DD/MM/YYYY}}',
        },
    },
```
	----
	
	## l10ns
	
	- Couldn't get set up based off of documentation
	- Don't recommend based on horrible documentation
	
	----
	
	## PolyGlot
	- Mainly for Back End development
	- Was able to get up and running
	- It only does interpolation and pluralization

	----
	
	## Helpers
	
	---
	
	### Intl (Native to JavaScript)
```
const baseNumber = 1234567.89;
const now = new Date();

function changeLng(lng, { num = baseNumber, date = now } = {}) {
    let options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
	};
    const formattedNum = new Intl.NumberFormat(lng).format(num);
    document.getElementById('numbers').innerHTML = formattedNum;

    const formattedTime = new Intl.DateTimeFormat(lng, options).format(date);
    document.getElementById('dates').innerHTML = formattedTime;
}
```
	----
	
	## Additional Considerations
	- UI Spacing — You need to provide enough space in the UI to handle expanded lengths of words. IBM has provided design guidelines that specify an additional 200% space for short words; The W3 provides an example of a translation for Flickr requiring an additional 300% in Italian.
	- Text Sorting — Text sorting can vary by language. For instance, German has two types of sort order, phonebook and dictionary, which determine whether to sort by sounds (umlauted vowels become to character pairs: ä → ae, ö → oe, ü → ue.) or by character order.
	
	---
	## Additional Considerations Continued

	- Punctuation — Different languages use different punctuation. For instance, double quotes in English (“ “) are represented as guillemets in French (« »).
	- Images — If you have images with text, you need to make sure to provide versions for each locale.
	- Keyboard shortcuts — If you have hotkeys that map to English words, these should be updated with a mapping for each locale.
	- Outbound links — External links to documentation will need to take language into account.
	- Accessibility
	