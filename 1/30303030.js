
    test = echarts.init(document.getElementById('radar'));
    test.showLoading({  //载入动画
        text : '请稍等',
        effect : 'whirling',
        textStyle : {
            fontSize : 14
        }
    });
    var option = {
        color : ['#a9e2fb'],  //控制边框和面积色
        tooltip : {
            trigger: 'axis',
            formatter: function(params){
                return params[0].indicator+'：'+params[0].value;
            },
            textStyle:{
                fontSize:'12px'
            }
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true}
            },
            orient:'vertical',
            y:'center'
        },
        calculable: true,
        polar : [
            {
                indicator : [
                    { text : '声誉度' },
                    { text : '口感' },
                    { text : '功能关注度' },
                    { text : '市场占有率' },
                    { text : '品牌' }
                ],
                center : ['50%','50%'],  //控制圆心位置
                radius : 150,
                startAngle: 90,
                splitNumber: 8,
                name : {
                    formatter: '{value}',
                    textStyle: {color:'#000'}
                },
                scale: true,
                type: 'circle',
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#d6dee6',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitArea : {
                    show : true,
                    areaStyle : {
                        color: ['#edf2f5','#ffffff']
                    }
                }
            }
        ],
        series : [
            {
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    emphasis: {
                        lineStyle: {
                            width: 4
                        }
                    },
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data : [
                    {
                        value : [100, 8, 0.40, -80, 200],
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    type: 'solid'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    };
    setTimeout(function (){
        test.hideLoading();
        test.setOption(option);
    },1000);
