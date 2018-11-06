
/**
 * 【正则表达式】
 */
/**
 * 【1 正则定义】
 */
//1.内置对象法 new RegExp("正则表达式",模式);
// new RegExp(pattern, attributes);
var reg1 = new RegExp(/abc/);
var reg3 = new RegExp("abc","g");
//2.字面量[]{}/a/
var reg2 = /def/;
var reg4 = /abc/g;
console.log(reg2);
console.log(typeof reg2);

/**
 * 【2 常用方法】
 */
//test() 使用正则对象去匹配字符串，如果匹配成功返回ture，否则返回false
console.log(reg1.test("abc"));//true
console.log(/abc/.test("sun"));//false
//exec() 根据正则表达式去查找字符串符合规则的内容，返回数组，没有匹配项返回null
//查找出三到四个字符组成的单词。
var str  ="sun jian feng sunshine studio";
var reg = /\b[a-z]{3,4}\b/gi;
var line ="";
while((line = reg.exec(str))!=null){
    document.write(line+"<br/>");//sun jian feng
}
console.log(reg.exec(str));// ["sun", index: 0, input: "sun jian feng sunshine studio"]
//compile() 在脚本执行过程中编译正则表达式
reg=/abc/g;
reg.compile(reg);

// 【字符串方法】
// match() 根据正则表达式去查找字符串符合规则的内容，返回数组，没有匹配项返回null
console.log(str.match(reg));// ["sun", "jian", "feng"]
// replace()
console.log("sunjianfeng".replace(/jianfeng/,"shine"));//sunshine
// search()
console.log("sunjianfeng".search(/jianfeng/));//3
// split()  stringObject.split(separator,howmany) separator为字符串或正则表达式，howmany可选，可指定返回数组的最大长度
console.log("sunjianfeng".split(/n/,3));//["su", "jia", "fe"]

// 比较exec和match
// 1. exec是正则表达式方法，参数为字符串；match是字符串方法，参数为正则表达式
// 2. 正则表达式有无子表达式(如/abc(\s*)/中(\s*))，是否定义为非全局匹配
//  2.1. 无子表达式，非全局匹配，二者相同，返回第一个匹配的字符串内容
//  2.2. 无子表达式，全局匹配，若存在多处匹配，exec返回第一处匹配的单元素数组，match返回多元素数组
console.log(reg.exec(str));// ["sun", index: 0, input: "sun jian feng sunshine studio"] 只返回第一处匹配项
console.log(str.match(reg));// ["sun", "jian", "feng"]
// 3. 有子表达式，非全局匹配，二者相同
var reg = new RegExp("a(b(c))");//模式0:abc，模式1:bc，模式2:c
var str = "1abc2,3abc4";
console.log(reg.exec(str));//["abc", "bc", "c", index: 1, input: "1abc2,3abc4"]
console.log(str.match(reg));//["abc", "bc", "c", index: 1, input: "1abc2,3abc4"]
// 4. 有子表达式，全局匹配，match忽略子表达式，只查找模式0并返回所有内容
var reg = new RegExp("a(b(c))","g");//模式0:abc，模式1:bc，模式2:c
var str = "1abc2,3abc4";
console.log(reg.exec(str));//["abc", "bc", "c", index: 1, input: "1abc2,3abc4"]
console.log(str.match(reg));//["abc", "abc"]

/**
 * 【3 模式】
 */
// g 全局模式（global）（全文查找出现的所有pattern）
// i 不区分大小写（ease-insensitive）（忽略大小写）
// m 执行多行匹配

/**
 * 【4 使用一：五大内部类】
 */
console.log("-------------预定义类-------------");
console.log(/./.test("\n\r"));              //false [^\n\r] 除换行和回车外的任意字符
console.log(/./.test("sunshine"));          //true
console.log(/\d/.test(123));                //true  [0-9] 数字字符
console.log(/\d/.test("123"));              //true
console.log(/\d/.test("sunshine"));         //false
console.log(/\D/.test("sunshine"));         //true  [^0-9] 非数字字符
console.log(/\s/.test("     "));            //true  [ \t\n\x0B\f\r] 空白字符
console.log(/\S/.test("sunshine"));         //true  [^ \t\n\x0B\f\r] 非空白字符
console.log(/\w/.test("_"));                //true  [a-zA-Z_0-9] 单词字符
console.log(/\W/.test("$"));                //true  [^a-zA-Z_0-9] 非单词字符  

console.log("-------------简单类-------------");
console.log(/sunshine/.test("sunshine"));   //true  //必须完整，只多不少
console.log(/shine/.test("sunshinestudio"));//true
console.log(/sunshine/.test("sun-shine"));  //false
console.log(/[sunshine]/.test("cs"));       //true  []只要包含其中任何一个即可
console.log(/[sunshine]/.test("abc"));      //false

console.log("-------------负向类-------------");
// ^必须写[]中，不够或正好返回false，没有或只有部分或多出返回true
// 简单来说，只要含有[]中没有的即可
console.log(/[^abc]/.test("ddd"));          //true  没有
console.log(/[^abc]/.test("add"));          //true  只有部分
console.log(/[^abc]/.test("abc"));          //false 正好
console.log(/[^abc]/.test("b"));            //false 不够

console.log("-------------范围类-------------");
console.log(/[a-c]/.test("b"));             //true
console.log(/[a-c]/.test("bd"));            //true  包含一个即可
console.log(/[a-c]/.test("def"));           //false

console.log("-------------组合类-------------");
console.log(/[a-c1-6]/.test("b"));          //true
console.log(/[a-c1-6]/.test(33));           //true
console.log(/[a-c1-6]/.test("bd"));         //false
console.log(/[a-c1-6]/.test("sun"));        //true

/**
 * 【5 使用二：边界】
 */
// ^  匹配行或字符串起始位置，注：^在[]中才表示非
// $  匹配行或字符串结尾位置
// ^$ 一起使用表示精确匹配
console.log("-------------边界 ^ $-------------");
console.log(/^abc$/.test("abc"));           //true
console.log(/^abc$/.test("a"));             //false

/**
 * 【6 使用三：量词】
 */
// 
console.log("------------- * ( >=0 ) {0,}-------------");
console.log(/^a*$/.test(""));               //true
console.log(/^a*$/.test("aa"));             //true
console.log("------------- + ( >=1 ) {1,}-------------");
console.log(/^a+$/.test(""));               //false
console.log(/^a+$/.test("aa"));             //true
console.log("------------- ? ( 0||1 ) {0,1}-------------");
console.log(/^a?$/.test(""));               //true
console.log(/^a?$/.test("a"));              //true
console.log(/^a?$/.test("aa"));             //false
console.log("------------- {} -------------");
//{n} 一个参数，循环n次。
//{n,} 一个参数，循环>=n次。
//{n,m} 一个参数，循环n次到m次。
console.log(/^a{1}$/.test("a"));            //true
console.log(/^a{1,}$/.test("aa"));          //true
console.log(/^a{1,4}$/.test("aaa"));        //true
console.log("------------- x|y -------------");
//()括号提高运算优先级
console.log(/(abc)|(xyz)/.test("xy"));      //false
console.log(/(abc)|(xyz)/.test("abcd"));    //true
console.log("------------- 贪婪匹配/懒惰匹配 -------------");
// 量词默认为贪婪匹配(匹配最长串)，量词+"?"可转化为懒惰匹配模式(匹配最短串)
// a.*?b匹配最短的以a开始b结束的字符串
console.log("aabab".match(/a.*?b/g));       //["aab", "ab"] 懒惰匹配
console.log("aabab".match(/a.*b/g));        //["aabab"] 贪婪匹配

