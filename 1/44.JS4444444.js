
            //ECMAScript部分
            var jd="京东商城";//"京东商城"这是String的一个实例；
            //为什么不能这么写：zhiling jd -> "京东商城"
        //    alert(jd);
            console.log(jd);
            //定义了javascript这门语言的书写方式；
            //浏览器只是js的一个宿主环境；一个媒介；
            //对语法、类型，语句、关键字，保留字，对象，这些都是通过ES来实现的；

            //DOM部分；
            var oDiv=document.getElementById('div1');
            oDiv.innerText=jd;

            var oBtn=document.getElementById('btn1');
            oBtn.onclick=function () {
                //console.log('你点击了click me 这个按钮');
//                alert('你点击了click me 这个按钮');
//                window.close();
//                console.log(window.location.href);
                alert("alert");
                window.alert("window.alert");
            }

            //BOM部分；
            //浏览器的默认弹窗实现差异；alert
            //coockies
            //ajax - > XMLHttpRequest || ActiveXObject


            console.dir(window);

        