


var html = '';


var data = {
	a: 'hello',
	b: '--world',
	c: '--!!!'
};

html = template('test', data);
document.write(html);
