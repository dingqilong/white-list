
var by = function(name,minor){
    return function(o,p){
        var a,b;
        if(o && p && typeof o === 'object' && typeof p ==='object'){
            a = o[name];
            b = p[name];
            if(a === b){
                return typeof minor === 'function' ? minor(o,p):0;
            }
            if(typeof a === typeof b){
                return a < b ? -1:1;
            }
            return typeof a < typeof b ? -1 : 1;
        }else{
            thro("error");
        }
    }
}
	var employees=[];

	employees[0]={name:"George", age:32, retiredate:"March 12, 2014"};

	employees[1]={name:"Edward", age:24, retiredate:"June 2, 2023"};

	employees[2]={name:"Ehristine", age:24, retiredate:"December 20, 2036"};

	employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"};

//直接调用函数：


employees.sort(by('age',by('name')));
	console.log(employees); 

