

var num1 = new Number(111);
console.log(num1);//Number {[[PrimitiveValue]]: 111}
var num2 = Number("111");
console.log(num2);//111

var aaa = new Strings(222);
console.log(aaa);//Strings {[[PrimitiveValue]]: 222}
var bbb = Strings("333");
console.log(bbb);//333

function Strings(num){
    this["[[PrimitiveValue]]"] = num;
    return num/1;
}

