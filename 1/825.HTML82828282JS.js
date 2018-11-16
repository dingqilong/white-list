
        //嵌入式的写法，直接放在上面，获取不到ID；
        /*var oDiv3=document.getElementById("btn2");
        console.log(oDiv3);//null*/

        window.onload=function () {
            var oDiv3=document.getElementById("btn2");
            console.log(oDiv3,"window.onload");//null
        }
    