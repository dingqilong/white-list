
    var myChart1;
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['最高','最低']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {readOnly:false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                data : function (){
                    var list = [];
                    for (var i = 1; i <= 30; i++) {
                        list.push('2013-03-' + i);
                    }
                    return list;
                }()
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [

            {
                name:'最低',
                type:'bar',
                data:function (){
                    var list = [];
                    for (var i = 1; i <= 5; i++) {
                        list.push(Math.round(Math.random()* 10));
                    }
                    return list;
                }()
            }
        ]
    };
    myChart=echarts.init(document.getElementById('test'));
    myChart.setOption(option);
    var ecConfig = echarts.config;
    myChart1=echarts.init(document.getElementById('hehe'));
    myChart.on(ecConfig.EVENT.HOVER, function(params){
        var data=params.value;
        var option1 = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    name:'业务指标',
                    type:'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    center : ['50%', '90%'],    // 默认全局居中
                    radius : 320,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 200
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 10,   // 每份split细分多少段
                        length :12,        // 属性length控制线长
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        formatter: function(v){
                            switch (v+''){
                                case '10': return '低';
                                case '50': return '中';
                                case '90': return '高';
                                default: return '';
                            }
                        },
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: 'bolder'
                        }
                    },
                    pointer: {
                        width:50,
                        length: '90%',
                        color: 'rgba(255, 255, 255, 0.8)'
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, '-60%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#fff',
                            fontSize: 30
                        }
                    },
                    detail : {
                        show : true,
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: '#ccc',
                        width: 100,
                        height: 40,
                        offsetCenter: [0, -40],       // x, y，单位px
                        formatter:'{value}%',
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontSize : 50
                        }
                    },
                    data:[{value: data*10, name: '完成率'}]
                }
            ]
        };
        option1.series[0].data[0].value = data;
        myChart1.setOption(option1,true);
    });
//    myChart.on(ecConfig.EVENT.DATA_ZOOM, eConsole);
//    myChart.on(ecConfig.EVENT.LEGEND_SELECTED, eConsole);
//    myChart.on(ecConfig.EVENT.MAGIC_TYPE_CHANGED, eConsole);
//    myChart.on(ecConfig.EVENT.DATA_VIEW_CHANGED, eConsole);

