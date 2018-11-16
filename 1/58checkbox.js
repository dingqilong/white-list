
    $('.checkBoxClass').on('change',function(){
        if($(this).is(':checked')){
            $(this).next().addClass('checkBoxSelected');
        }else{
            $(this).next().removeClass('checkBoxSelected');
        }
    });
