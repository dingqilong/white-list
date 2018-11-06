

// 实现一个函数，运算结果满足如下预期结果：
// add(1)(2) // 3  
// add(1, 2, 3)(10) // 16  
// add(1)(2)(3)(4)(5) // 15


function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var adder = function () {
        var _adder = function() {
            [].push.apply(_args, [].slice.call(arguments));
            return _adder;
        };
        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        return _adder;
    }
    return adder.apply(null, [].slice.call(arguments));
}
// 输出结果，可自由组合的参数
// console.log(add(1, 2, 3, 4, 5));  // 15
// console.log(add(1, 2, 3, 4)(5));  // 15
// console.log(add(1)(2)(3)(4)(5));  // 15


function add () {
    console.log('进入add');
    var args = Array.prototype.slice.call(arguments); 
    var fn = function () {
        console.log('调用fn');
        var arg_fn = Array.prototype.slice.call(arguments);
        return add.apply(null, args.concat(arg_fn));
    }
    fn.valueOf = function () {
        console.log('调用valueOf');
        return args.reduce(function(a, b) {
            return a + b;
        })
    }
    return fn;
}
console.log(add(1)(2,3));// 进入add 调用fn 进入add 6 调用valueOf
console.log(add(1)(2)(3));// 进入add 调用fn 进入add 调用fn 进入add 6 调用valueOf

// 每次循环合并参数，递归调用本身返回 fn 函数，最后一次调用 valueOf，利用 reduce 对所有参数求和
// apply 第一个参数为 null/undefined，指向 window
// 此处也可改写 toString()
// 如果只改写 valueOf() 或 toString() 中一个，会优先调用被改写了的方法
// 如果两个同时改写，遵循 Number 类型转换规则，优先查询 valueOf() 方法


