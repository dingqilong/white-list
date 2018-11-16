
    var dec=function(){
        var _this=$('#bar');
        var _len=_this.width();
        _len-=2;
        if(_len<0){
            _len=0;
        }
        _this.width(_len);
    };
    var barDesc=setInterval(dec,200);
    $('input').on('click',function(){
        var _this=$('#bar');
        var _len=_this.width();
        if(_len>150){
            clearInterval(barDesc);
        }else{
            _len+=6;
            _this.width(_len);
        }
    });
