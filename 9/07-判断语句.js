

if(false){
    alert(1);
}else if(false){
    alert(2);
}else{
    alert(3);//3
}

//switch底层用===比较
switch ("222"){
    case 111:
        alert(111);
        break;
    case "222":
        alert(222);//222
        break;
    case "222":
        alert(333);//不执行
        break;
    default :
        alert("无");
}

//需求：百分制转换成优良中可差
var num = prompt("输入成绩：");
num = parseInt(num/10);
switch (num){
    case 10:
        alert("满分");
        break;
    case 9:
        alert("优");
        break;
    case 8:
        alert("良");
        break;
    case 7:
        alert("中");
        break;
    case 6:
        alert("可");
        break;
    default :
        alert("差");
}

