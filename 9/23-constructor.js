
function Person(name, age, gender, car){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.car = car;
}
var x = {
    brand:"byd"
};
var p1 = new Person("csxiaoyao","18","male",x);
var p2 = new p1.constructor("sunshine","19","male",x);//相当于直接使用 new Person()
console.log(p2);

//原型对象在创建出来的时候，会默认的有一个constructor属性指向对应的构造函数
//Person.prototype.constructor
//使用新的对象替换默认的原型对象之后,原型对象中的constructor属性会变成 Object
//为保证 构造函数---原型---对象 间关系的合理性,替换原型对象时,在新原型对象中手动添加 constructor
function Person(){

}
console.log(Person.prototype.constructor);//function Person(){}

Person.prototype = {
    constructor : Person
};
console.log(Person.prototype.constructor);//function Person(){}

