
    function find(){
        var str=/^\S+$/;
        var findText=$('input').eq(0).val();
        if(str.test(findText)){
            $('tr').hide().filter(':contains('+findText+')').show();
        }else{
            $('tr').show();
        }
    }
