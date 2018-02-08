// import i18next from "i18next";
//import moment from "moment";
//var moment = require('moment');
function i18nextInit() {
	i18next.init(
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
				jp: {
					translation: {
						helloWorld: 'ハローワールド',
						greeting:
							'私の名前は{{user.lastName.kana}} {{user.firstName.kana}}です。',
						date: '今日は{{date, 年YYYY月MM日DD}}です。'					
					},
				},
				fr: {
					translation: {
						helloWorld: 'bonjour monde',
						greeting:
							"Je m'appelle {{user.firstName.roman}} {{user.lastName.roman}}.",
						date: "La date d'aujourd'hui est {{date, MM/DD/YYYY}}.",
					},
				},
				hi: {
					translation: {
						helloWorld: 'नमस्ते दुनिया',
						greeting:
							'मेरा नाम है {{user.firstName.akshar}} {{user.lastName.akshar}}.',
						date: 'आज तारीख है {{date, DD/MM/YYYY}}',
					},
				},
				eo: {
					translation: {
						helloWorld: 'saluton mondo',
						greeting:
							'Mia nomo estas {{user.firstName.roman}} {{user.lastName.roman}}.',
						date: 'Hodiaŭa dato estas {{date, DD/MM/YYYY}}',
					},
				},
			},
			interpolation: {
				format: function(value, format, lng) {
					if (value instanceof Date)
						return moment(value).format(format);
					return value;
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
	);
}

function updateContent() {
	const user = {
		firstName: {
			roman: 'Tyler',
			kana: 'タイラー',
			akshar: 'टायलर',
			letras: 'Tyler',
		},
		lastName: {
			roman: 'Hansen',
			kana: 'ハンセン',
			akshar: 'हैनसेन',
			letras: 'Hansen',
		},
	};
	document.getElementById('output').innerHTML = i18next.t('helloWorld');
	document.getElementById('interpolation').innerHTML = i18next.t('greeting', {
		user,
	});
	document.getElementById('plural').innerHTML = [
		i18next.t('plural.thing', {count: 0}),
		i18next.t('plural.thing', {count: 1}),
		i18next.t('plural.thing', {count: 5}),
		i18next.t('plural.thing', {count: 100}),
		i18next.t('plural.thingWithCount', {count: 0}),
		i18next.t('plural.thingWithCount', {count: 1}),
		i18next.t('plural.thingWithCount', {count: 5}),
		i18next.t('plural.thingWithCount', {count: 100})
	].join( '<br>' );
	//Put this back in when we figure out how to implement moment.js on the front-end
	document.getElementById('formatting').innerHTML = i18next.t('date', {
		date: new Date(),
	});
}

function changeLng(lng) {
	i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
	updateContent();
});
