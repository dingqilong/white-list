
//死循环
// for(;;){
// 	console.log(1);
// }

// 循环命名，跳出多重循环

//需求：打印宽9，长9的正方形
for(var j=1;j<=9;j++){
    for(var i=1;i<=9;i++){
        document.write("☆");
    }
    document.write("<br>");
}

document.write("<br>");

//需求：打印三角形(外循环控制行，内循环控制列)
for(var j=1;j<=9;j++){
    for(var i=1;i<=j;i++){
        document.write("☆");
    }
    document.write("<br>");
}

//需求：利用table标签输入99乘法表
//步骤：
//1.table标签只需要输出一遍所以不需要for循环
document.write("<table border='1'>");
//2.tr标签需要输出9遍所以放入for循环
for(var i=1;i<=9;i++){
    document.write("<tr>");
    //3.td标签需要45遍，而且还是三角形，所以利用双重for循环
    for(var j=1;j<=i;j++){
       document.write("<td>");
       document.write(j+"*"+i+"="+j*i);
       document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

