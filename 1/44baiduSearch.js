
    function creScript(obj){
        var newScript=document.createElement('script');
        newScript.src=obj;
        document.body.appendChild(newScript);
    }
    function miaov(data){
        var myUl=$('#ul1');
        myUl.html('');
        if(data.s.length){
            myUl.css({display:'block'});
            for(var i=0;i<data.s.length;i++){
                myUl.append('<li><a href="http://www.baidu.com/s?wd="'+data.s[i]+'>'+data.s[i]+'</a></li>');
            }
        }else{
            myUl.css({display:'none'});
        }
    }
    $(function(){
        var myQ=$('#q');
        var myUl=$('#ul1');
        myQ.keyup(function(){
            var str=/^\S+$/;
            if(str.test(myQ.val())){
                creScript('http://suggestion.baidu.com/su?wd='+myQ.val()+'&cb=miaov');
            }else{
                myUl.css({display:'none'});
            }
        });
    });
