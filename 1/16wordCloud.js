
    var list=[];  //list必须是二维数组[[],[]]形式  源码333行开始是控制颜色的代码  父元素的css必须加相对定位，因为字符云是绝对定位的
    for(var i=0;i<20;i++){
        list.push(
                ['test',parseInt(Math.random()*40+20)]  //控制字符大小
        )
    }
    WordCloud(document.getElementById('test'),{list:list});
