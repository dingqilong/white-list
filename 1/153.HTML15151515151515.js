
    var oDiv1=document.getElementById("div1");
    var oDiv2=document.getElementById("div2");
    oDiv1.innerText="我已经被JS改变了";//通过JS来改变html
    oDiv2.style.color="red";//通过JS来改变CSS；
    console.log("ID",oDiv1);

    var oDivClass=document.getElementsByClassName("div-class");//这是一对标签的集合
    console.log(oDivClass);
    console.log(oDivClass[0]);
