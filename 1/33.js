function course(num,name){
	this.num = num;
	this.name = name;
  this.num = 0;
	this.print = function ()  {
		console.log(this.name + " " + this.num);
	 }
}
var c = new course(100,"JS");
c.print();
course.prototype.addStudent = function(){
  	console.log("add student");
    this.num++;
}
c.addStudent();
console.log(c.num);
