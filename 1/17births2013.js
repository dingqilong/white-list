
$(function () {
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    $('#container').highcharts({
        chart: {
            type: 'column',
            backgroundColor: '#EAEAEA',//'#E6E6E6',
            borderColor: '#454545',
            borderRadius: 0,
            borderWidth: 2,
            margin: [-25,15,25,25],
            options3d: {
                enabled: true,
                alpha: -65,
                beta: -15,
                depth: 25,
                frame: {
                    bottom: {
                        color: '#9ff0cf'//'#78EDAB'
                    },
                    back: {
                        color: '#9ff0cf'//'#78EDAB'                        
                    },
                }
            }
        },
        title: {
            text: 'Births 2013'
        },
        subtitle: {
            text: 'By month and gender'
        },
        credits: {
            position: {
                x: -20,
                y: -10
            }
        },
        tooltip: {
            shared: true,
            headerFormat: '<b>{point.key} 2013</b><br/>'
        },
        legend: {
            borderWidth: 0,
            itemMarginTop: 10,
            layout: 'vertical',
            floating: true,
            align: 'left',
            x: 15,
            y: -75
        }, 
        xAxis: {
            gridLineWidth: 0,
            type: 'category',
            categories: months,
            labels: {
                y: -25,
                style: {
                    color: 'black',
                    fontWeight: 'bold'
                },
                formatter: function () {
                    return this.value.substring(0,3);
                }
            },
            opposite: true            
        },
        yAxis: {
            gridLineWidth: 0,
            title: false,
            labels: {
                enabled: false
            },
            reversed: true,
        },
        plotOptions: {
            column: {
                animation: false,
                depth: 20,
                stacking: true,
                groupZPadding: 5
            }
        },
        series: [{
            name: 'Boys',
            color: '#7eb5ee',//'#78ABED',
            data: [29, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
        },{
            name: 'Girls',
            color: '#f45b5b',//#ED78AB',
            data: [24, 68, 111, 109, 134, 186, 136, 122, 188, 206, 95, 48]
        }]
    });
});
