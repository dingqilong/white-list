
/*
    By CS逍遥剑仙

1.【string & String】

2.【字符串常用的方法】
    【anchor(str);】锚点
    【big();】大字体
    【blink();】闪动字符串
    【bold();】粗体
    ★【charAt(index);】返回指定索引位置处的字符
    ★【concat();】字符串拼接
    【fontcolor("color");】字符串设置颜色
    ★【indexOf(str);】给定字符串的第一次索引值
    【italics();】斜体
    ★【lastIndexOf(str);】给定字符串的最后一次索引值
    ★【length】字符串长度
    【link("link");】链接
    ★【replace(RegExp,str);】根据正则表达式进行文字替换
    ★【slice(index);slice(index,index);】根据索引值截取字符串
    ★【split();】字符串切割变数组
    【sub();】转下标
    ★【substr(index);substr(index,length);】根据索引值和长度截取字符串
    【substring(index);substring(index,index);】根据索引值和索引值截取字符串
    【sub();】转上标
    【toLowerCase();】转小写
    【toString();】输出
    【toUpperCase();】转大写
    ★【trim();】去除前后空格

3.【简单综合应用1】字符串占位

4.【简单综合应用2】统计字符串中出现次数最多的字符和次数

5.【简单综合应用3】模拟jQuery选择器(div .div #div)

 */

    /**
     * 【string & String】
     */
    // string简单数据类型无法绑定属性和方法
    var str = "abc";
    str.aaa = 111;
    console.log(str);//abc
    console.log(typeof str);//string
    console.log(str.aaa);//undefined
    console.log(str.length);//3
    console.log(str.indexOf("c"));//2
    // String对象
    var strObj1 = new String("abc");
    strObj1.aaa = 111;
    console.log(strObj1);//String {0: "a", 1: "b", 2: "c", aaa: 111, length: 3, [[PrimitiveValue]]: "abc"}
    console.log(typeof strObj1);//object
    console.log(strObj1.aaa);//111
    console.log(strObj1.length);//3
    console.log(strObj1.indexOf("c"));//2
    // 比较
    var strObj2 = new String("abc");
    console.log("strObj1与strObj2是否相同："+(strObj1==strObj2));//false

    
    /**
     * 【anchor(str);】锚点
     */
    document.write("sunshine".anchor("anchor"));//<a name="anchor">sunshine</a>
    /**
     * 【big();】大字体
     */
    document.write("sunshine".big());//<big>sunshine</big>
    /**
     * 【blink();】闪动字符串
     */
    document.write("sunshine".blink());//<blink>sunshine</blink>
    /**
     * 【bold();】粗体
     */
    document.write("sunshine".bold());//<b>sunshine</b>
    /**
     * 【charAt(index);】返回指定索引位置处的字符
     */
    document.write("sunshine".charAt(3));//s
    /**
     * 【charCodeAt(index);】返回指定位置上字符的 Unicode 编码值
     */
    document.write("sunshine".charCodeAt(3)); //115
    /**
     * 【concat();】字符串拼接
     */
    var str1 = "CS";
    var str2 = "逍遥剑仙";
    var str3 = str1.concat(str2);
    console.log(str1);//CS
    console.log(str2);//逍遥剑仙
    console.log(str3);//CS逍遥剑仙
    /**
     * 【fontcolor("color");】字符串设置颜色
     */
    document.write("sunshine".fontcolor("red")); //<font color="red">sunshine</font>
    /**
     * 【indexOf(str);】给定字符串的第一次索引值
     */
    document.write("sunshine".indexOf("shine")); //3 返回指定字符串第一次出现的索引值
    var str = "sunshine";
    console.log(str.indexOf("s"));//0
    console.log(str.indexOf("c"));//-1，查不到
    /**
     * 【italics();】斜体
     */
    document.write("sunshine".italics()); //<i>sunshine</i>
    /**
     * 【lastIndexOf(str);】给定字符串的最后一次索引值
     */
    document.write("sunshine".lastIndexOf("s"));//3
    /**
     * 【length】字符串长度
     */
    var str = "CS逍遥剑仙 www.csxiaoyao.com";
    console.log(str.length);//24
    /**
     * 【link("link");】链接
     */
    document.write("sunshine".link("http://www.csxiaoyao.com")); //<a href="http://www.csxiaoyao.com">sunshine</a>

    /**
     * 【replace(RegExp,str);】根据正则表达式进行文字替换
     */
    document.write("sunjianfeng".replace("jianfeng","shine")); //sunshine
    var str = "Today is fine day, today is fine day!";
    console.log(str.replace(/today/gi,"tomorrow"));//tomorrow is fine day, tomorrow is fine day!
    /**
     * 【slice(index);slice(index,index);】根据索引值截取字符串
     */
    console.log("sunjianfeng".slice(3));//jianfeng 从索引截取到最后
    console.log("sunjianfeng".slice(3,6));//jia 从索引截,包左不包右
    console.log("sunjianfeng".slice(-4));//feng 后几个
    console.log("sunjianfeng".slice(5,2));//空字符串
    /**
     * 【split();】字符串切割变数组
     */
    //无参:返回一个当前元素的数组
    //空字符串:分隔字符串中每一个字符
    //指定字符:特殊符号不会出现在数组的任意一个元素中
    var str = "sun-shine-studio";
    var arr = str.split("-");
    for(var index = 0 ; index<arr.length ; index++){
        document.write(arr[index]+",");//sun,shine,studio,
    }
    /**
     * 【sub();】转下标
     */ 
    document.write("sunjianfeng".sub());    
    /**
     * 【substr(index);substr(index,length);】根据索引值和长度截取字符串
     */  
    console.log("sunjianfeng".substr(3));   //jianfeng 从索引截取到最后
    console.log("sunjianfeng".substr(3,4)); //jian 从索引截,长度个字符串
    console.log("sunjianfeng".substr(-4));  //feng 后几个
    /**
     * 【substring(index);substring(index,index);】根据索引值和索引值截取字符串
     */  
    console.log("sunjianfeng".substring(3));  //jianfeng 从索引截取到最后
    console.log("sunjianfeng".substring(3,6));//jia 从索引截,到索引结束,包左不包右
    console.log("sunjianfeng".substring(-1)); //sunjianfeng 全部截取
    console.log("sunjianfeng".substring(6,3));//jia 只能调换,相当于substring(3,6)
    /**
     * 【sub();】转上标
     */ 
    document.write("sunjianfeng".sup());
    /**
     * 【toLowerCase();】转小写
     */
    console.log("SunShine".toLowerCase());//sunshine
    /**
     * 【toString();】输出
     */
    document.writeln(str);//字符串直接输出
    document.writeln(strObj1);//字符串对象自动转换
    console.log(str);//字符串直接输出
    console.log(strObj1.toString());//字符串对象输出
    /**
     * 【toUpperCase();】转大写
     */
    console.log("SunShine".toUpperCase());//SUNSHINE
    /**
     * 【trim();】去除前后空格
     */
    console.log("   a   b   c   ".trim());//a   b   c


//【简单综合应用1】字符串占位
    var str = "CS逍遥剑仙 www.csxiaoyao.com";
    console.log(str.length);//24
    console.log(getZFWlength(str));//28，判断每个字符是否在0-127之间，在为英文占一位，不在占两位
    function getZFWlength(string){
        var count = 0;
        for(var i=0;i<string.length;i++){
            //对每一位字符串进行判断，如果Unicode编码在0-127，计数器+1；否则+2
            if(string.charCodeAt(i)<128 && string.charCodeAt(i)>=0 ){
                count++;
            }else{
                count+=2;
            }
        }
        return count;
    }

//【简单综合应用2】统计字符串中出现次数最多的字符和次数
    //定义一个json，判断json中是否有该属性，如果有，值+1;否则创建该属性，并赋值为1
    function fun(str){
        var json = {};
        for(var i=0;i<str.length;i++){
            var key = str.charAt(i);
            if(json[key] === undefined){
                json[key] = 1;
            }else{
                json[key] += 1;
            }
        }
        console.log(json);
        //获取json中属性值最大的选项
        var maxKey = "";
        var maxValue = 0;
        for(var k in json){
            if(json[k]>maxValue){
                maxKey = k;
                maxValue = json[k];
            }
        }
        console.log(maxKey);
        console.log(maxValue);
    }
    fun("sunshine studio");// s 3

//【简单综合应用3】模拟jQuery选择器(div .div #div)
    function $(str){
        var str1 = str.charAt(0);
        if(str1==="#"){
            return document.getElementById(str.slice(1));
        }else if(str1 === "."){
            return document.getElementsByClassName(str.slice(1));
        }else{
            return document.getElementsByTagName(str);
        }
    }

