var course = {
	num: 902,
	name: 'JavaScript',
	part: 20,
	instructor: {
		name: 'liran',
		id: 1000,
	},
	print : function ()  {
		console.log(this.name);
	}
};
course.print();

console.log(course.instructor.name);
