
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
	- Dates & Times <!-- .element: class="fragment" data-fragment-index="2" -->
	- UI Spacing <!-- .element: class="fragment" data-fragment-index="3" -->
	- Text Sorting <!-- .element: class="fragment" data-fragment-index="4" -->
	- Punctuation <!-- .element: class="fragment" data-fragment-index="5" -->
	
	Notes:  
	
- Dates — Date formats change across cultures. For example, 10/4/15 means October 4th in the US, and April 10th in the UK.
- Times — Different locales require either a 24-hour clock or 12-hour clock. Also, some locales use different notations, like 5h10 in French.
- Formatting of numbers — Different locales use different digits to represent numbers. So, 3,025.23 in English would be 3.025,23 in Greman, and 3 025,23 in French.
- UI Spacing — You need to provide enough space in the UI to handle expanded lengths of words. IBM has provided design guidelines that specify an additional 200% space for short words; The W3 provides an example of a translation for Flickr requiring an additional 300% in Italian.
- Text Sorting — Text sorting can vary by language. For instance, German has two types of sort order, phonebook and dictionary, which determine whether to sort by sounds (umlauted vowels become to character pairs: ä → ae, ö → oe, ü → ue.) or by character order.
- Punctuation — Different languages use different punctuation. For instance, double quotes in English (“ “) are represented as guillemets in French (« »).
	---
	
	## Not Considered
	- Currencies <!-- .element: class="fragment" data-fragment-index="0" -->
	- Addresses <!-- .element: class="fragment" data-fragment-index="1" -->
	- Phone Numbers <!-- .element: class="fragment" data-fragment-index="2" -->
	- Validation <!-- .element: class="fragment" data-fragment-index="3" -->
	
	---
	
	## Libraries under consideration

	* Primary
	  * [i18next](https://www.i18next.com/)
	  * [l10ns](http://l10ns.org/)
	  * [Polyglot](http://airbnb.io/polyglot.js/)
	* Helpers
	  * [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	  * [messageformat.js](https://github.com/messageformat/messageformat.js)
	  * [sprintf.js](https://github.com/alexei/sprintf.js)
	  * [118njs](http://i18njs.com/)
	  * [formatparse](http://userguide.icu-project.org/formatparse/messages)
	
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
	
	### Dates & Times
	
	summary
	
	---
	
	### UI Spacing
	
	summary
	
	---
	
	### Text Sorting
	
	summary
	
	---
	
	### Punctuation
	
	summary
	

	----
	
	## l10ns
	
	summary
	
	---
	
	### Strings with Interpolation
	
	summary
	
	---
	
	### Pluralization
	
	summary
	
	---
	
	### Dates & Times
	
	summary
	
	---
	
	### UI Spacing
	
	summary
	
	---
	
	### Text Sorting
	
	summary
	
	---
	
	### Punctuation
	
	summary
	

	----
	
	## PolyGlot
	
	---
	
	### Strings with Interpolation
	
	summary
	
	---
	
	### Pluralization
	
	summary
	
	---
	
	### Dates & Times
	
	summary
	
	---
	
	### UI Spacing
	
	summary
	
	---
	
	### Text Sorting
	
	summary
	
	---
	
	### Punctuation
	
	summary
	

	----
	
	## Helpers
	
	---
	
	### Intl
	
	---
	
	### messageformat.js
	
	---
	
	### sprintf.js
	
	---
	
	### i18njs
	
	---
	
	### formatparse
	
	
	----
	
	## Additional Considerations
	
	- Images — If you have images with text, you need to make sure to provide versions for each locale.
	- Keyboard shortcuts — If you have hotkeys that map to English words, these should be updated with a mapping for each locale.
	- Outbound links — External links to documentation will need to take language into account.
	- Accessibility
	