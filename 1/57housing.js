
$(function () {
    function format(val) {
        if (val.y < 0.5) {
             val.color = '#f45b5b';
            val.index = 'Very Low';
        } else if (val.y < 1.0) {
            val.color = '#f6a45c';
            val.index = 'Low';
        } else if (val.y < 1.5) {
            val.color = '#2b908f';
            val.index = 'High';
        } else {
            val.color = '#90ee7e';
            val.index = 'Very High';
        }
        return val; 
    }

    var series = [],
        serie,
        i,
        j,
        val;

    for (i = 0; i < 10; i++) {
        serie = { data: [], stack: i };
        for (j = 0; j < 10; j++) {
            val = {
                y: Math.round(Math.random()*200)/100
            }
            val = format(val);     
            serie.data.push(val);      
        }
        series.push(serie);
    }

    var lake = {
        y: 0,
        color: '#8085e8',
        index: 'Lake'
    }
    series[3].data[3] = lake;
    series[4].data[1] = lake;
    series[4].data[2] = lake;
    series[4].data[3] = lake;
    series[5].data[2] = lake;
    series[5].data[3] = lake;
    

    $('#container').highcharts({
        chart: {
            backgroundColor: '#EAEAEA',
            borderRadius: 0,
            borderWidth: 1,
            borderColor: 'black',
            type: 'column',
            margin: [150,60,80,0],
            options3d: {
                enabled: true,
                alpha: 30,
                beta: 15,
                depth: 600
            }
        },
        title: {
            text: 'Housing Prices'
        },
        tooltip: {
            formatter: function () {
                if (this.point.index == 'Lake') {
                    return '<b>City Lake</b>';
                }
                var s = '<b>District ' + (this.series._i + 1) + '/' + (this.x + 1) + '</b><br/>'
                s += 'Housing Prices <b>' + this.point.index + '</b><br/>';
                return s;
            }
        },
        legend: {
            enabled: false,
        },
        xAxis: {
            min: 0,
            max: 10,
            gridLineWidth: 0,
            width: 500,
            title: false,
            labels: {
                enabled: false
            },            
        },
        yAxis: {
            min: 0,
            max: 10,
            gridLineWidth: 0,
            title: false,
            labels: {
                enabled: false
            },            
        },
        plotOptions: {
            column: {
                depth: 20,
                pointWidth: 20,
                grouping: false,
                pointPadding: 0,
                groupPadding: 0,
                groupZPadding: 30,
                stacking: true,
            }
        },
        series: series
    });
});
