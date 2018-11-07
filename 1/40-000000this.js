
// this 访问对象中的元素
var o = {
    name:"sunshine",
    sayHello:function () {
        this.sayHi();
    },
    sayHi:function(){
        console.log("Hello:" + this.name);
    }
}
console.log(o.name);//sunshine
o.sayHello(); //Hello:sunshine

