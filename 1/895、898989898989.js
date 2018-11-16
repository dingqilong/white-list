
    //JS事件驱动型的，是异步的，回调的；
    /*
    1、烧水之前要做计划；
    2、开始烧水
    3、水烧开的时候我被通知了 --加报警器
    4、火好了以后，我就可以做我的计划；
    * */



    //1、以下是做计划，就是在烧水之前，就明确水开之后干什么;
    var flagValue={};
    function on(type,fn){
        //type是约定好的字符串；
        if(!flagValue[type]){
            flagValue[type]=[];
        }
        flagValue[type].push(fn);
    }
    /*A模块:水*/
     function water(){
        console.log("水烧好了;");
         fire();//把报警器撞到水壶上,当水好了，就通知计划on；
    }


    /*下面的执行代码要放在计划的代码之后*/
    on("selfWater",wachFace);//执行计划；这个要放在water之前；属于观察者
    on("selfWater",wachFoot);//执行计划；这个要放在water之前；属于观察者
    water();//这个是开始烧水；属于被观察者,在方法里加fire这个报警器；


    /*报警器*/
    function fire(){
        var ary=flagValue["selfWater"];
        if(ary){
            for(var i=0;i< ary.length;i++){
                ary[i]();//oEvent["selfWater"]();
            }
        }
    }
    /*B模块：洗脸*/
    function wachFace(){console.log("那就开始洗脸吧！")}
    function wachFoot(){console.log("那顺便再洗一次脚吧！")}


    /*写一段代码。用来模拟红绿灯控制车辆行驶
    * 停车订阅红灯
    * 开车订阅绿灯
    * */


 