
//by函数接受一个成员名字符串做为参数
//并返回一个可以用来对包含该成员的对象数组进行排序的比较函数
var by = function(name){
    return function(o,p){
	console.log(o);
	console.log(p);
        var a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
			else{
			return typeof a < typeof b ? -1 : 1;
			}
            
        }
        else {
            throw ("error");
        }
    }
}

	var employees=[];

	employees[0]={name:"George", age:32, retiredate:"March 12, 2014"};

	employees[1]={name:"Edward", age:17, retiredate:"June 2, 2023"};

	employees[2]={name:"Christine", age:24, retiredate:"December 20, 2036"};

	employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"};

//直接调用函数：

	employees.sort(by("age"));
	console.log(employees);
