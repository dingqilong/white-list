
//计算总时间
var totaltime = timeTransAndReduce();

//格式化时间并显示
timeFormatter(totaltime);

function timeTransAndReduce(){
    var times = [];
    var oLi = document.getElementsByTagName('li');
    //构建时间数组
    for( var i = 0, len = oLi.length; i < len; i++){
      var timeItem = oLi[i].dataset['time'].split(':');
      times.push(parseInt(timeItem[0],10)*60+parseInt(timeItem[1],10));//将时间转换为秒
    }
    //累加时间并将结果返回
    return times.reduce(function(a,b){
      return a+b;
    },0);
}

//修改总时间表达式
function timeFormatter(seconds) {
    var sec = seconds % 60;
    var hour = Math.floor(seconds/3600);
    var min = (seconds - 3600*hour - sec)/60;
    document.getElementById('totaltime').innerHTML = hour+'小时'+min+'分'+sec+'秒';
}

