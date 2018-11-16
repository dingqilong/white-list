
    var cityMap={
        "成都市":"510100"
    };
    var mapType=[];
    var mapGeoData = echarts.util.mapData.params;
    for (var city in cityMap) {
        mapType.push(city);
        // 自定义扩展图表类型
        mapGeoData.params[city] = {//city
            getGeoJson: (function (c) {//city对应的县级数据
                var geoJsonName = cityMap[c];
                return function (callback) {
                    $.getJSON('js/' + geoJsonName + '.json', callback);
                }
            })(city)
        }
    }


    option = {
        dataRange: {
            min: 0,
            max: 2500,
            x: 'left',
            y: 'bottom',
            color: ['orange','yellow'],
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true
        },
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [
            {
                type: 'map',
                mapType: '成都市',
                selectedMode : 'single',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {'name':'温江区','value':'1000'}
                ]
            }
        ]
    };

    var myChart=echarts.init(document.getElementById('main'));
    myChart.setOption(option);



