// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['nl-3559-gm0351', 0],
    ['nl-3559-gm0632', 1],
    ['nl-3559-gm1904', 2],
    ['nl-3559-gm0352', 3],
    ['nl-3559-gm0355', 4],
    ['nl-3559-gm0345', 5],
    ['nl-3559-gm1581', 6],
    ['nl-3559-gm0307', 7],
    ['nl-3559-gm0313', 8],
    ['nl-3559-gm0308', 9],
    ['nl-3559-gm0356', 10],
    ['nl-3559-gm0317', 11],
    ['nl-3559-gm0736', 12],
    ['nl-3559-gm0327', 13],
    ['nl-3559-gm0342', 14],
    ['nl-3559-gm0339', 15],
    ['nl-3559-gm0340', 16],
    ['nl-3559-gm0331', 17],
    ['nl-3559-gm0589', 18],
    ['nl-3559-gm0312', 19],
    ['nl-3559-gm0321', 20],
    ['nl-3559-gm0310', 21],
    ['nl-3559-gm0344', 22],
    ['nl-3559-gm0335', 23],
    ['nl-3559-gm0353', 24]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/nl/nl-ut-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/nl/nl-ut-all.js">Utrecht</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
['ph-7007', 72],
    ['ph-7008', 73],
    ['ph-7009', 74],
    ['ph-7010', 75],
    ['ph-7011', 76],
    ['ph-7012', 77],
    ['ph-7013', 78],
    ['ph-7014', 79],
    ['ph-7015', 80],
    ['ph-7016', 81],
    ['ph-7019', 82],
    ['ph-6456', 83],
    ['ph-zs', 84],
    ['ph-nd', 85],
    ['ph-zn', 86],
    ['ph-md', 87],
    ['ph-ab', 88],
    ['ph-2658', 89],
    ['ph-ap', 90],
    ['ph-au', 91],
    ['ph-ib', 92],
    ['ph-if', 93],
    ['ph-mt', 94],
    ['ph-qr', 95],
    ['ph-ne', 96],
    ['ph-pm', 97],
    ['ph-ba', 98],
    ['ph-bg', 99],
    ['ph-zm', 100],
    ['ph-cv', 101],
    ['ph-bu', 102],
    ['ph-mr', 103],
    ['ph-sq', 104],
    ['ph-gu', 105],
    ['ph-ct', 106],
    ['ph-mb', 107],
    ['ph-mq', 108],
    ['ph-bi', 109],
    ['ph-sl', 110],
    ['ph-nr', 111],
    ['ph-ak', 112],
    ['ph-cp', 113],
    ['ph-cn', 114],
    ['ph-sr', 115],
    ['ph-in', 116],
    ['ph-is', 117],
    ['ph-tr', 118],
    ['ph-lu', 119]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/ph/ph-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ph/ph-all.js">Philippines</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
