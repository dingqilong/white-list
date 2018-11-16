function test(chart) { // eslint-disable-line no-unused-vars
    $('.highcharts-tracker', chart.container).attr({
        'stroke': 'pink',
        'stroke-opacity': 0.3
    });
}int.onMouseOver();

    chart.pointer.onContainerMouseMove({
        type: 'mousemove',
        pageX: point.plotX + chart.plotLeft + offset.left,
        pageY: point.plotY + chart.plotTop + offset.top,
        target: chart.container
    });
}