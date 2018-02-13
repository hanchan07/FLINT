/* global i18next moment */
/* eslint-disable indent */

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
						date: 'Today\'s date is {{date, MM/DD/YYYY}}.',
						plural: {
							'rabbit': 'rabbit',
							'rabbit_plural': 'rabbits',
							'rabbitWithCount': '{{count}} rabbit',
							'rabbitWithCount_plural': '{{count}} rabbits'
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
							'Je m\'appelle {{user.firstName.roman}} {{user.lastName.roman}}.',
						date: 'La date d\'aujourd\'hui est {{date, MM/DD/YYYY}}.',
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
				pl: {
					translation: {
						helloWorld: 'Witaj świecie',
						greeting:
							'Nazywam się {{user.firstName.roman}} {{user.lastName.roman}}.',
						date: 'Dzisiejsza data to {{date, DD/MM/YYYY}}',
						plural: {
							'rabbit_0': 'królik',
							'rabbit_1': 'królika',
							'rabbit_2': 'królików',
							'rabbitWithCount_0': '{{count}} królik',
							'rabbitWithCount_1': '{{count}} królika',
							'rabbitWithCount_2': '{{count}} królików',
						}
					}
				},
			},
			interpolation: {
				format: function (value, format, lng) {
					if (value instanceof Date)
						return moment(value).format(format)
					return value
				},
			},
			plural: {
				format: function (value, format, lng) {
					if (value instanceof Date)
						return moment(value).format(format)
					return value
				},
			},
		},
		function (err, t) {
			// init set content
			updateContent()
		}
	)
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
	}
	document.getElementById('output').innerHTML = i18next.t('helloWorld')
	document.getElementById('interpolation').innerHTML = i18next.t('greeting', {
		user,
	})
	document.getElementById('plural').innerHTML = [
		'<h4>In a sentence without an actual digit count</h4>' +
		i18next.t('plural.rabbit', { count: 0 }) +            ' <em>(0 w/o count)</em>',
		i18next.t('plural.rabbit', { count: 1 }) +            ' <em>(1 w/o count)</em>',
		i18next.t('plural.rabbit', { count: 2 }) +            ' <em>(2 w/o count)</em>',
		i18next.t('plural.rabbit', { count: 5 }) +            ' <em>(5 w/o count)</em>',
		i18next.t('plural.rabbit', { count: 12 }) +           ' <em>(12 w/o count)</em>',
		i18next.t('plural.rabbit', { count: 22 }) +           ' <em>(22 w/o count)</em>',
		i18next.t('plural.rabbit', { count: 100 }) +          ' <em>(100 w/o count)</em>',
		'<h4>In a sentence with an actual digit count</h4>' +
		i18next.t('plural.rabbitWithCount', { count: 0 }) +   ' <em>(0 w count)</em>',
		i18next.t('plural.rabbitWithCount', { count: 1 }) +   ' <em>(1 w count)</em>',
		i18next.t('plural.rabbitWithCount', { count: 2 }) +   ' <em>(2 w count)</em>',
		i18next.t('plural.rabbitWithCount', { count: 5 }) +   ' <em>(5 w count)</em>',
		i18next.t('plural.rabbitWithCount', { count: 12 }) +  ' <em>(12 w count)</em>',
		i18next.t('plural.rabbitWithCount', { count: 22 }) +  ' <em>(22 w count)</em>',
		i18next.t('plural.rabbitWithCount', { count: 100 }) + ' <em>(100 w count)</em>',
	].join('<br>')
	//Put this back in when we figure out how to implement moment.js on the front-end
	document.getElementById('formatting').innerHTML = i18next.t('date', {
		date: new Date(),
	})
}

function changeLng(lng) {
	i18next.changeLanguage(lng)
}

i18next.on('languageChanged', () => {
	updateContent()
})
