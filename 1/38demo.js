// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['pr-3614', 0]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/pr/pr-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/pr/pr-all.js">Puerto Rico</a>'
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
lor: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
43],
    ['fr-b-lg', 44],
    ['fr-k-lz', 45],
    ['fr-e-iv', 46],
    ['fr-m-mm', 47],
    ['fr-m-ms', 48],
    ['fr-d-ni', 49],
    ['fr-l-cz', 50],
    ['fr-c-pd', 51],
    ['fr-n-ge', 52],
    ['fr-b-pa', 53],
    ['fr-v-sv', 54],
    ['fr-j-se', 55],
    ['fr-j-vp', 56],
    ['fr-j-ss', 57],
    ['fr-j-vm', 58],
    ['fr-s-so', 59],
    ['fr-i-tb', 60],
    ['fr-i-db', 61],
    ['fr-j-vo', 62],
    ['fr-m-vg', 63],
    ['fr-j-yv', 64],
    ['fr-f-lc', 65],
    ['fr-h-cs', 66],
    ['fr-e-fi', 67],
    ['fr-h-hc', 68],
    ['fr-p-mh', 69],
    ['fr-g-an', 70],
    ['fr-n-ag', 71],
    ['fr-a-br', 72],
    ['fr-p-cv', 73],
    ['fr-c-cl', 74],
    ['fr-e-ca', 75],
    ['fr-b-gi', 76],
    ['fr-a-hr', 77],
    ['fr-v-hs', 78],
    ['fr-k-he', 79],
    ['fr-b-ld', 80],
    ['fr-r-la', 81],
    ['fr-m-mo', 82],
    ['fr-p-or', 83],
    ['fr-o-pc', 84],
    ['fr-k-po', 85],
    ['fr-r-my', 86],
    ['fr-q-sm', 87],
    ['fr-d-yo', 88],
    ['fr-c-al', 89],
    ['fr-c-hl', 90],
    ['fr-u-ha', 91],
    ['fr-f-lt', 92],
    ['fr-s-oi', 93],
    ['fr-v-rh', 94],
    ['fr-n-ta', 95],
    ['undefined', 96],
    ['fr-re-re', 97],
    ['fr-yt-yt', 98],
    ['fr-gf-gf', 99],
    ['fr-mq-mq', 100],
    ['fr-gp-gp', 101],
    ['undefined', 102]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/fr/fr-all-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/fr/fr-all-all.js">France, admin2</a>'
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
    }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['countries/fr/fr-all-all'], 'mapline'),
        color: 'silver',
        showInLegend: false,
        enableMouseTracking: false
    }]
});
