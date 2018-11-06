

//【 cache = [] 】
//定义一个缓存数组，存储已经计算出来的斐波那契数
//1.计算的步骤
    //1.先从cache数组中去取想要获取的数字
    //2.如果获取到了，直接使用
    //3.如果没有获取到，就去计算，计算完之后，把计算结果存入cache，然后将结果返回
var count =0;//统计迭代次数
function createFib1(){
    var cache = [];
    function fib(n){
        count ++;
        if(cache[n] !== undefined){
            return cache[n];
        }
        if(n <= 2){
            cache[n] = 1;
            return 1;
        }
        var temp = fib(n - 1) + fib(n - 2);
        cache[n] = temp;
        return temp;
    }
    return fib;
}
var fib = createFib1();
console.log(fib(6));//8
console.log(count);//9
count = 0;
console.log(fib(20));//6765
console.log(count);//29

// 【 cache = {} 】
// 创建缓存容器
function createCache(){
    var cache = {};
    return function (key, value) {
        //value不为空，set
        if(value !== undefined){
            cache[key] = value;
            return cache[key];
        }
        //value为空，get
        else{
            return cache[key];
        }
    }
}
var count =0 ;
function createFib2(){
    var fibCache = createCache();
    function fib(n){
        count ++;
        if(fibCache(n) !== undefined){
            return fibCache(n) ;
        }
        if(n <= 2){
            fibCache(n , 1) ;
            return 1;
        }
        var temp = fib(n - 1) + fib(n - 2);
        fibCache(n, temp) ;
        return temp;
    }
    return fib;
}
var fib2 = createFib2();
console.log(fib2(6));//8
console.log(count);//9
count = 0;
console.log(fib2(20));//6765
console.log(count);//29

