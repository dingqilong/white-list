
// 隐式类型转换
// primitive type
/**
 * Object => String
 */
// 1. 转换场景
// console.log();
// alert();
// "" + obj; //字符串拼接

// 2. 转换方法
// Object.prototype.toString() 返回一个表示该对象的字符串
// Object.prototype.valueOf() 返回指定对象的原始值

// 3. 转换规则
//   1. 设原始值为调用 ToPrimitive 的结果
//   2. 调用 toString 方法返回原始值
//   (3). 若 toString 未返回原始值，调用 valueOf 返回原始值
//   (4). 若 valueOf　仍未返回原始值，报错

// 4. 案例
var obj = {  
    toString: function() {  
        console.log('use obj.toString');  
        return {};// 返回非原始类型
    },  
    valueOf: function() {  
        console.log('use obj.valueOf')  
        return 'sun';// 返回原始类型  
    }  
}
console.log(obj);//use obj.toString //use obj.valueOf //sun
// 说明：先调用 toString 方法，如果得不到原始类型数据，继续调用 valueOf 方法
// 如果不重写 toString 方法，obj.toString() 返回 "[object Object]"，为字符串原始类型

/**
 * Object => Number
 */
// 1. 转换场景
// Number() //强制转换
// Math
// obj == 1 //比较
// obj + 1 //数值运算
// +obj

// 2. 转换方法
// Object.prototype.valueOf() 返回指定对象的原始值
// Object.prototype.toString() 返回一个表示该对象的字符串

// 3. 转换规则
//   1. 设原始值为调用 ToPrimitive 的结果
//   2. 调用 valueOf 方法返回原始值
//   (3). 若 valueOf 未返回原始值，调用 toString 返回原始值
//   (4). 若 toString 仍未返回原始值，报错

// 4. 案例
console.log(typeof(+[1])); //number
console.log(+[]); // 0
console.log(+[1,2]); // NaN
console.log(+[undefined]); // 0
console.log(+[undefined,undefined]); // NaN
console.log(+Array(0)); // 0
console.log(+Array(1)); // 0
console.log(+Array(2)); // NaN
console.log(+Array(017)); // NaN

var obj = {
    valueOf: function() {
        console.log('use valueOf');
        return {};
    },
    toString: function() {
        console.log('use toString');
        return 7;
    }
}
console.log(obj + 1);//use valueOf //use toString //8
// 说明：先调用 valueOf 方法，如果得不到原始类型数据，继续调用 toString 方法
// 如果返回的原始类型为 "7"，结果为 "71"

/**
 * => Boolean
 */
// 1. 转换场景
// if(obj) //布尔比较
// while(obj) //布尔比较

// 2. 转换规则
// 只有以下为 false，其余为 true
// undefined、null、-0、0、+0、NaN、''

// 3. 案例
if(new Object() && [0] && [] && "0"){
	console.log("true");
}else{
	console.log("false");
}
// true
// 说明：对象一定为 true


/**
 * "=="引起的类型转换
 */
// 1. 存在 NaN 必为 false
// 2. 【null】 == 【undefined】   不转换，始终为 true
// 3. 【null / undefined】 == 【其他非 null / undefined】   不转换，始终为 false
// 4. 【原始类型 string / number / boolean】 == 【Date对象】   原始类型=>number，Date对象 --> toString() / valueOf()
// 5. 【原始类型 string / number / boolean】 == 【非Date对象】   原始类型=>number，非Date对象 --> valueOf() / toString()
// 6. 【原始类型 string / number / boolean】 == 【原始类型 string / number / boolean】   原始类型 => number

console.log(NaN == NaN);//false
console.log("sunshine" == NaN);//false   存在 NaN 必为 false
console.log(1 == true);//true   true => 1
console.log(true == "sun");//false   true => 1  "sun" => NaN
console.log("" == false);//true

var a = [0];
if(a){
	console.log(a == true);//false
}else{
	console.log("sun");
}
console.log(a.valueOf());//Array[1]…
console.log(a.toString());//0

// => boolean
console.log("------Boolean------");
console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean());//false
console.log(Boolean([]));//true
console.log("------!!------");
console.log(!!0);//false
console.log(!!"");//false
console.log(!!null);//false
console.log(!!undefined);//false
console.log(!!NaN);//false
console.log(!![]);//true
console.log(!!1);//true
console.log(!!"abc");//true
var date = new Date();
console.log(!!date);//true

//转换成字符串
var bool = true;
var num = 111;
var aaa;
var bbb = null;
console.log((aaa+""));//undefined
console.log(typeof(aaa+""));//string
console.log(typeof(bool+""));//string
console.log(String(bool));//true
console.log(typeof(String(bool)));//string
console.log(typeof(bbb+""));//string
// console.log(typeof(bbb.toString()));//报错 Cannot read property 'toString' of null
console.log(typeof(num+""));//string
console.log(typeof(num.toString()));//string

//转换成数字
var str = "111";
var bool = true;
console.log(typeof (str-0));
console.log(typeof (bool-0));
console.log(typeof (str*1));
console.log(typeof (bool*1));
console.log(typeof (str/1));
console.log(typeof (bool/1));
console.log(typeof typeof (bool/1));  //数据类型是用string定义的

console.log(typeof Number(str));
console.log(typeof Number(bool));

var str2 = "12.34abc";
var str3 = "12.34";
console.log(parseInt(str2));
console.log(parseFloat(str2));
console.log(Number(str3));
console.log(Number("")); // 0

