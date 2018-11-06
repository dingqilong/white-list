
//动物--->人---->老师---->坏老师
function Animal(){
    this.gender = "male";
}
function Human(){
    this.actionWay = "走路";
}
function Teacher(){
    this.skill = "教书";
}
function BadTeacher(){
    this.name = "吕超";
}
Human.prototype = new Animal();
Human.prototype.constructor = Human;

Teacher.prototype = new Human();
Teacher.prototype.constructor = Teacher;

BadTeacher.prototype = new Teacher();
BadTeacher.prototype.constructor = BadTeacher;

var t = new BadTeacher();
console.log(t);
