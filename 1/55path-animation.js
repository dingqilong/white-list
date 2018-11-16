
        var path = Snap.select("#path")
        var length = Snap.path.getTotalLength(path); // 获取path的长度
        var plane = Snap.select("#plane")
        Snap.animate(0, length, function(val) {
            var point = Snap.path.getPointAtLength(path, val); // 根据path长度变化获取坐标
            var m = new Snap.Matrix();
            m.translate(point.x, point.y);
            m.rotate(point.alpha-90); // 使飞机总是朝着曲线方向。point.alpha：点的切线和水平线形成的夹角
            plane.transform(m);
        }, 6000, mina.easeout(), function() {
            console.log('animation end');
        });
    