
    var oDiv=document.getElementById("div1");
    //HTMLDivElement--HTMLElement--Element--Node--EventTarget--Object
    //其中DOM二级事件是定义在EventTarget上的；
//    oDiv.addEventListener("click",fn1,false);
    oDiv.addEventListener("click",fn1);//和上面一样的，不写和写false一样的；
    oDiv.addEventListener("click",fn2);//和上面一样的，不写和写false一样的；
    oDiv.addEventListener("click",fn3);//和上面一样的，不写和写false一样的；
    oDiv.addEventListener("click",fn4,false);//和上面一样的，不写和写false一样的；

    function fn1(){console.log("1");};
    function fn2(){console.log("2");};
    function fn3(){console.log("3");};
    var num=0;
    function fn4(){
        num+=1;
        if(num==3){
            this.removeEventListener("click",fn1,false);//移除
            this.removeEventListener("click",fn2,false);
        }
        console.log("4");
    };
