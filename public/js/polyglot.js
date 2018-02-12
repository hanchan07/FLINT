function test() {
	const Polyglot = libraries.polyglot;
	const polyglot = new Polyglot();
	polyglot.extend({ hello: 'Sup Dude' });

	console.log('polyglot: ', polyglot.t('hello'));
	console.log(libraries.moment().format('dddd'));
}
