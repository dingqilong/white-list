
//    var oTime=new Date();
//    oTime.setDate(oTime.getDate()+3);
//    document.cookie='username='+encodeURI('leo\n你好')+';expires='+oTime.toGMTString();
//    document.cookie='age=32';
//    alert(decodeURI(document.cookie));
    function getCookie(key){
        var arr1=document.cookie.split('; ');
        for(var i=0;i<arr1.length;i++){
            var arr2=arr1[i].split('=');
            if(arr2[0]==key){
                return(decodeURI(arr2[1]));
            }
        }
    }
    function setCookie(key,value,time){
        var oTime=new Date();//此时时间为object类型
        oTime.setDate(oTime.getDate()+time);//所以要转换
        document.cookie=key+'='+encodeURI(value)+';expires='+oTime.toGMTString();//时间转换为GMT字符串类型(时间必须为字符串类型)
    }
    function removeCookie(key){
        setCookie(key,'',-1);
    }
    var str=/^\S+$/;
    $(function(){
        var username=$('#username').val(getCookie('username'));
        $('#login').on('click',function(){
            var username=$('#username').val();
            if(str.test(username)){
                alert('登陆成功！');
                setCookie('username',username,10);
            }else{
                alert('请输入名字！');
            }
        });
        $('#del').on('click',function(){
            removeCookie('username');
            $('#username').val('');
        });
    });
