// american english
// canadian
// german
// norwegian
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
