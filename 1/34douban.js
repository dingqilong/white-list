
    var str=/^\S+$/;
    function creScript(obj){
        var newScript=document.createElement('script');
        newScript.src=obj;
        document.body.appendChild(newScript);
    }
    function fn1(data){
        console.log(data);
        var msg=$('#msg');
        var divCon=$('#list');
        msg.text(data.title.$t+':'+data['opensearch:totalResults'].$t);
        for(var i=0;i<data.entry.length;i++){
            divCon.append('<dl><dt>'+data.entry[i].title.$t+'</dt><dd><img src="'+data.entry[i].link[2]["@href"]+'"/></dd></dl>');
        }
    }
    $(function(){
        var myBtn=$('#btn');
        myBtn.on('click',function(){
            var mySearch=$('#sContent').val();
            if(str.test(mySearch)){
                creScript('http://api.douban.com/book/subjects?q='+mySearch+'&alt=xd&callback=fn1');//http不要忘记！！！
            }else{

            }
        });
    });
