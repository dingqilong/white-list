
        /*
        window 窗口对象，通常可以省略
            - DOM 
                -- document
            - BOM  
                -- frames[]
                -- history
                -- location  地址栏对象
                -- navigator
                -- screen  屏幕对象
        */

        /*
        【window对象】常用方法
            open() 打开一个新的窗口。
            close() 关闭当前窗口。
            resizeTo() 将窗口的大小更改为指定的宽度和高度值。
            moveBy() 相对于原来的窗口移动指定的x、y值。
            moveTo() 将窗口左上角的屏幕位置移动到指定的 x 和 y 位置。
            setInterval() 每经过指定毫秒值后就会执行指定的代码。
            clearInterval() 根据一个任务的ID取消的定时任务。
            setTimeout() 经过指定毫秒值后执行指定的代码一次。
            注意:使用window对象的任何属性与方法都可以省略window对象不写
        */

        // 定时器
        // setTimeout()、setInterval()、clearInterval()
        // setInterval 的返回值就是定时器的名字，执行函数可以单独抽出
        var num = 1;
        var timer = setInterval(function () {
            console.log(num);
            num++;
            if(num===10){
                //清除定时器
                clearInterval(timer);
            }
        },1000);

        // window.open  新窗口 = window.open(地址,是否开新窗口,新窗口的参数);
        var a1 = document.getElementsByTagName("a")[0];
        a1.onclick = function () {
            // window.open("http://www.csxiaoyao.com","_blank");
            var json = {"name":"helloworld","fullscreen":"no","location":"no","width":"100px","height":"100px","top":"100px","left":"100px"};
            /* 参数列表
                name：新窗口的名称，可以为空
                featurse：属性控制字符串，在此控制窗口的各种属性，属性之间以逗号隔开。
                fullscreen= { yes/no/1/0 } 是否全屏，默认no
                channelmode= { yes/no/1/0 } 是否显示频道栏，默认no
                toolbar= { yes/no/1/0 } 是否显示工具条，默认no
                location= { yes/no/1/0 } 是否显示地址栏，默认no
                directories = { yes/no/1/0 } 是否显示转向按钮，默认no
                status= { yes/no/1/0 } 是否显示窗口状态条，默认no
                menubar= { yes/no/1/0 } 是否显示菜单，默认no
                scrollbars= { yes/no/1/0 } 是否显示滚动条，默认yes
                resizable= { yes/no/1/0 } 是否窗口可调整大小，默认no
                width=number 窗口宽度（像素单位）
                height=number 窗口高度（像素单位）
                top=number 窗口离屏幕顶部距离（像素单位）
                left=number 窗口离屏幕左边距离（像素单位）
            */            
            // var newWin = window.open("http://www.csxiaoyao.com","_self",json);
            var newWin = window.open("http://www.csxiaoyao.com","_blank",json);
            newWin.moveTo(500,500);
        }

        /*
        【location对象】常用方法
            href:设置及获取地址栏对象
        */
        var div = document.getElementsByTagName("div")[0];
        div.onclick = function () {
            //跳转地址
            location.href = "http://www.csxiaoyao.com";
            //刷新当前页面
            location.reload();
        }
        console.log(location.href    )    // 当前地址
        console.log(location.hash    )    // 返回url中#后面的内容，包含#
        console.log(location.host    )    // 主机名，包括端口
        console.log(location.hostname)    // 主机名
        console.log(location.pathname)    // url中的路径部分
        console.log(location.protocol)    // 协议 一般是http、https
        console.log(location.search  )    // 查询字符串

        /*
        【screen对象】常用方法
            availHeight 获取系统屏幕的工作区域高度，排除 Microsoft Windows 任务栏
            availWidth 获取系统屏幕的工作区域宽度，排除 Windows 任务栏
            height 获取屏幕的垂直分辨率
            width 获取屏幕的水平分辨率
        */
        document.write("获取系统屏幕的工作区域高度："+screen.availHeight+"<br/>");
        document.write("获取系统屏幕的工作区域宽度："+screen.availWidth+"<br/>");
        document.write("获取屏幕的垂直分辨率："+screen.height+"<br/>");
        document.write("获取屏幕的水平分辨率："+screen.width+"<br/>");

        /*
        【navigator对象】常用方法
        */
        console.log(navigator.userAgent);//客户端信息
        console.log(navigator.platform);//系统平台

        /*
        【history对象】常用方法
        */
        //history.go(-1);//回退
        //history.back();//回退

    