

var bool = ((4 >= 6) || ("人" != "people")) && !(((12 * 2) == 144) && true);
// (false || true) && !(false && true);
console.log(bool);//true

var num  = 10;
if(5 == num / 2 && (2 + 2 * num).toString() === "22") {
	// 5 == num / 2 && (2 + 2 * num).toString() === "22"
	// 5 == 5 && "22"==="22"
	console.log(true);//true
}

var a = 1;
var b = 2;
a++;//2
var num = ++a + (a++) + a + (++b) + b++;
// 3 + 3 + 4 + 3 + 3;
console.log(num);//16

//返回的是表达式结果
console.log(0&&1);//0
console.log(1&&0);//0
console.log(1&&10);//10

console.log(0||1);//1
console.log(1||0);//1
console.log(1||5);//1
console.log(5||1);//5

console.log(1 && 2 && 3);//3
console.log(0 && 1 && 2);//0
console.log(1 && 0  && 2);//0

var a = 0 || 1 || 2;
var b = 1 || 0 || 3;
console.log(a),console.log(b);// 1 1

// &&的优先级要高与||
var a = 3 && 0 || 2;
var b = 3 || 0 && 2;
var c = 0 || 2 && 3;
console.log(a),console.log(b),console.log(c);// 2 3 3

var a = 1 + 1 && 3;
var b = 0 && 1+1;
var c = 1 || 2 && 3-1;
console.log(a);console.log(b);console.log(c);// 3 0 1

