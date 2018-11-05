function course(num,name){
	this.num = num;
	this.name = name;
	this.print = function ()  {
		console.log(this.name + " " + this.num);
	}
}
function Student(name,id){
	this.name = name;
	this.num = id;
	this.fn = function(cb)  {
		cb.bind(this)();
  //    cb.call(this);
  //    cb.apply(this);
	}
}
var c = new course(100,"JS");
var s = new Student("liran",20);
s.fn(c.print); // undefine
