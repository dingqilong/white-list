
/**
 * javascript的数据类型
 */

// number    小数与整数
// string    字符串(无字符类型)
// boolean   布尔数据类型
// undefined 未定义

//【typeof】【isNaN】(is not a muber)
console.log(typeof 10);             //number
console.log(typeof 3.14);           //number
console.log(typeof 's');            //【string】，没有char类型
console.log(typeof "sunshine");     //string
console.log(typeof true);           //boolean
console.log(typeof sun);            //undefined
console.log(typeof document);       //object
console.log(isNaN(10));             //false
console.log(isNaN(3.14));           //false
console.log(isNaN(true));           //【false】
console.log(isNaN("sun"));          //true

isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN(true); // false
isNaN(null); // false
isNaN(37); // false
// strings
isNaN("37"); // false: 可以被转换成数值37
isNaN("37.37"); // false: 可以被转换成数值37.37
isNaN(""); // false: 空字符串被转换成0
isNaN(" "); // false: 包含空格的字符串被转换成0
// dates
isNaN(new Date()); // false
isNaN(new Date().toString()); // true

/**
 * 数据类型转换
 */
//【string -> number】
// parseInt()  
console.log(parseInt("123abc123")); //123 含非数字字符,将前面的数字字符转换成数字
console.log(parseInt("a123"));      //NaN
console.log(parseInt("012"));       //12 去首部0
console.log(parseInt("0x10"));      //16 以十六进制计算

// parseFloat()  整数字符串仍转换为整数
console.log(parseFloat("3.14"));    //3.14
console.log(parseFloat("3"));       //3
console.log(parseFloat("sun"));     //NaN

//【number -> string】
// toString()  把数字转换成指定进制形式的字符串，默认十进制
var num = 10;                       // 十进制	
var str = num.toString(2);          // 二进制
console.log(str);                   //1010
console.log(typeof str);            //string

/**
 * 其他
 */
// toFixed()   指定保留小数位(四舍五入)
var num = 3.14159;
num = num.toFixed(2);               //保留两位小数
console.log(num);                   //3.14


	