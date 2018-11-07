
// typeof、instanceof、constructor、prototype、$.type()/jquery.type()
var a = "csxiaoyao";
var b = 1993;
var c = true;
var d = undefined;
var e = null;
var f = new Date();
var g= [1,2,3];
var h = function(){alert("sunshine");};

// 1. typeof (返回的类型为字符串形式)
console.log(typeof a);  // string
console.log(typeof b);  // number
console.log(typeof c);  // boolean
console.log(typeof d);  // undefined
console.log(typeof e);  // object
console.log(typeof f);  // object
console.log(typeof g);  // object
console.log(typeof h);  // function
console.log(typeof a == "string");  // true
console.log(typeof a == String);  // false　

// 2. instanceof (判断已知对象类型的方法)
// console.log(e instanceof null); // Right-hand side of 'instanceof' is not an object
console.log(f instanceof Date); // true
console.log(g instanceof Array); // true
console.log(h instanceof Function); // true

// 3. constructor (根据对象的constructor判断)
console.log(f.constructor === Date); // true
console.log(g.constructor === Array); // true
console.log(h.constructor === Function); // true
// 注意：constructor 在类继承时会出错
function A(){};
function B(){};
A.prototype = new B(); //A继承自B
var aObj = new A();
console.log(aObj.constructor === A);// false
console.log(aObj.constructor === B);// true
// instanceof没有问题
console.log(aObj instanceof A);// true
console.log(aObj instanceof B);// true
// 解决construtor的问题通常让对象的constructor手动指向自己
aObj.constructor = A; //将自己的类赋值给对象的constructor属性
console.log(aObj.constructor === A);// true
console.log(aObj.constructor === B);// false

// 4. prototype(通用但很繁琐的方法)
console.log(Object.prototype.toString.call(a) === '[object String]')// true
console.log(Object.prototype.toString.call(b) === '[object Number]')// true
console.log(Object.prototype.toString.call(c) === '[object Boolean]')// true
console.log(Object.prototype.toString.call(d) === '[object Undefined]')// true
console.log(Object.prototype.toString.call(e) === '[object Null]')// true
console.log(Object.prototype.toString.call(f) === '[object Date]')// true
console.log(Object.prototype.toString.call(g) === '[object Array]')// true
console.log(Object.prototype.toString.call(h) === '[object Function]')// true
// 大小写不能写错，比较麻烦，但胜在通用

// 5. jquery.type() (万能方法)
// 如果对象是undefined或null，则返回相应的“undefined”或“null”
jQuery.type( undefined ) === "undefined"
jQuery.type() === "undefined"
jQuery.type( window.notDefined ) === "undefined"
jQuery.type( null ) === "null"
// 如果对象有一个内部的[[Class]]和一个浏览器的内置对象的 [[Class]] 相同，返回相应的 [[Class]] 名字
jQuery.type( true ) === "boolean"
jQuery.type( 3 ) === "number"
jQuery.type( "test" ) === "string"
jQuery.type( function(){} ) === "function"
jQuery.type( [] ) === "array"
jQuery.type( new Date() ) === "date"
jQuery.type( new Error() ) === "error" // as of jQuery 1.9
jQuery.type( /test/ ) === "regexp"
// 其他一切都将返回类型“object”

// 总结：通常情况下用typeof判断，遇到预知Object类型的情况可以选用instanceof或constructor方法

