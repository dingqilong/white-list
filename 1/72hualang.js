
    //  模拟后台json，实际情况应该是发送ajax从后台获得相关数据集合后再执行下面
    var img_data=[
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'},
        {src:'img/han7.jpg',desc:'图片介绍'}
    ];
//  加载图片和小圆点
    var img_html='';
    var cirle_list='';
    for(var i=0;i<img_data.length;i++){
        img_html += '<div class="photo">' +
                '<div class="side">' +
                '<p class="image">' +
                '<img src=' + img_data[i].src + ' alt=""/>' +
                '</p>' +
                '<p class="caption">' + img_data[i].desc + '</p>' +
                '</div>' +
                '</div>';
        cirle_list += '<li onclick="photoPosition(this)"></li>';
    }
    cirle_list='<div class="btn-box"><ul class="btn-list">'+cirle_list+'</ul></div>';
    var _wrap=$('#wrap');
    _wrap.append(img_html);
    _wrap.append(cirle_list);
    var _photo=$('.photo');
    var _wrapWidth=_wrap.width();
    var _wrapHeight=_wrap.height();
    var _photoWidth=_photo.eq(0).width();
    var _photoHeight=_photo.eq(0).height();
    function photoPosition(num){
        //  1.所有图片随机摆放
        for(var j=0;j<img_data.length;j++){
            var _top=Math.random()*(_wrapHeight+_photoHeight)-_photoHeight;
            if(j%2==0){  //图片分奇偶是为了左边和右边的图片数量相等或最大差1，避免左右分布不均
                var _Left=Math.random()*((_wrapWidth-_photoWidth)/2+_photoWidth)-_photoWidth;
                _photo.eq(j).css({left:_Left+'px',top:_top+'px'});
            }else{
                var _right=Math.random()*(_wrapWidth+_photoWidth)-_photoWidth;
                _photo.eq(j).css({left:_right+'px',top:_top+'px'});
            }
            _photo[j].style['transform']=_photo[j].style['-webkit-transform']=_photo[j].style['-ms-transform']=_photo[j].style['-moz-transform']='rotate('+(Math.random()*300-150)+'deg)';  //MD360业界奇葩，IE内核竟然要-webkit-transform才支持旋转
        }
//  2.从图片中随机挑一张放在中间(注意顺序不要变。如果先执行放中间就要去图片数组里面去掉中间的那张，那样麻烦)
        var _center;
        if(num){
            _center=$(num).index();
            console.log(_center);
        }else{
            _center=Math.floor(Math.random()*img_data.length);
        }
        _photo.eq(_center).addClass('photo_center').css({left:'50%',top:'50%'});
        _photo[_center].style['transform']=_photo[_center].style['-webkit-transform']=_photo[_center].style['-ms-transform']=_photo[_center].style['-moz-transform']='rotate(0deg)';
    }
    photoPosition();
