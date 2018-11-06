
        //对象是无序的键值对的集合
        
        //【封装】
        var obj = {
            name : "csxiaoyao",
            age : 50,
            sayHello : function () {
                //.....
            }
        }

        //【继承】
        //javaScript当中的继承是指 一个对象没有一些方法和属性，但是另外一个对象有
        //把另外一个对象的属性和方法拿过来使用，就是继承
        var obj1 = {
            name : "sunshine",
            sayHello: function () {
                console.log("hello world");
            }
        }
        //混入式继承（mix-in）  for in
        for(var k in obj1){
            //k可以获取到对象的每一个属性
            //obj1[k]可以获取到对象的每一个属性的值
            //使用k给对象新增属性的时候，不可以使用点语法
            obj[k] = obj1[k];
        }
        obj.sayHello();//hello world
        console.log(obj.name);//sunshine

        //【多态】
        //JavaScript中没有多态的体现
        //Animal  父类  父类的属性和方法供所有的子类共享 但是父类不能访问子类的属性和方法
        //Animal an = new Dog();
        //使用父类的引用（指针）指向子类的对象 就叫做多态
        //使用多态来隐藏不同
    