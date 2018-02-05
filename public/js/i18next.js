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
					},
				},
				jp: {
					translation: {
						helloWorld: 'ハローワールド',
						greeting:
							'私の名前は{{user.lastName.kana}} {{user.firstName.kana}}です。',
						date: '今日は{{date, 年YYYY月MM日DD}}です。',
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
			},
			interpolation: {
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
		},
		lastName: {
			roman: 'Hansen',
			kana: 'ハンセン',
			akshar: 'हैनसेन',
		},
	};
	document.getElementById('output').innerHTML = i18next.t('helloWorld');
	document.getElementById('interpolation').innerHTML = i18next.t('greeting', {
		user,
	});
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
