
    function fn(data){
        var myUl=$('#ul1');
        for(var i=0;i<data.length;i++){
            myUl.append('<li>'+data[i]+'</li>');
        }
    }
