
    //   const url = "http://www.baidu.com?refer=com&re=rer&com=com2";
    const url = "https://app.appsflyer.com/starwin.pinjamanmud.android?pid=uuang_int&af_click_lookback=7d&c=uuang&af_r=https://play.google.com/store/apps/details?id=com.pinjam.rupiah";
      function getParam (name,url) {
        // var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var reg = new RegExp(`(^|/?|&)${name}=([\u4e00-\u9fa5_a-zA-Z0-9]+)(&|$)`,'i');
        var r=url.replace(new RegExp(/(amp;)/g),'').match(reg);
        debugger;
        if (r != null) {
            return r[2];
        }
        return null;
    };
    function replaceParam (name,value,url){
        var reg = new RegExp(`\\u003F${name}=(.+)(&|$)|&${name}=(.+)(&|$)`,'i');
        var r=url.replace(new RegExp(/(amp;)/g),'').match(reg);
        debugger;
        if(r!==null){
            var matchstart = url[r.index];
            var newurl =url.replace(new RegExp(/(amp;)/g),'').replace(reg, `${matchstart}${name}=${value}`);
           return newurl; 
        }
        return url;

    }
    // console.log(getParam("refer",url));
    console.log(replaceParam('af_r','111',url));
    