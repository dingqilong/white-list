
    var oDiv=document.getElementById("div1");
    oDiv.onclick = move;

    /*    动画需要的参数
        - 起始位置：begin；
        - 一共需要移动的juice：change
        - 当前走的时间：times
        - 所需的总时间：duration
          步长：interval:运动是一步一步走的，也就是单步时间，可以通过控制单步的时间，来控制运动的效果；时间要求的短，步子就要迈大点，时间要求的长，就走小碎步
        */

    /*动画的初始条件*/
    var begin=oDiv.offsetLeft;//起点
    var target=600;//重点
    var change=target-begin;//总的移动距离=目的地-其实的位置;
    var times=0;
    var duration=1000;//总的时间；
    var nInterval=13;//一步走多少；步长；


    function move(){
        var timer=window.setTimeout(move,nInterval);
        if(times<duration){//时间到，就停止
            times+=nInterval;
            oDiv.style.left=linear(begin,change,times,duration)+"px";
        }else{
            oDiv.style.left=target+"px";
            clearTimeout(timer);
        }
    }
    /* 匀速运动公式：当前的位置=起始位置+总距离*（当前走的时间/所需要走的时间）*/
    function linear(begin,change,times,duration){
        return begin+change*(times/duration);
    }










