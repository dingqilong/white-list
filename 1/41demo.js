// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['us-nh-015', 0],
    ['us-nh-013', 1],
    ['us-nh-003', 2],
    ['us-nh-001', 3],
    ['us-nh-009', 4],
    ['us-nh-005', 5],
    ['us-nh-007', 6],
    ['us-nh-017', 7],
    ['us-nh-019', 8],
    ['us-nh-011', 9]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/us/us-nh-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-nh-all.js">New Hampshire</a>'
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
 42],
    ['us-nd-047', 43],
    ['us-nd-097', 44],
    ['us-nd-065', 45],
    ['us-nd-071', 46],
    ['us-nd-077', 47],
    ['us-nd-011', 48],
    ['us-nd-031', 49],
    ['us-nd-041', 50],
    ['us-nd-085', 51],
    ['us-nd-061', 52]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/us/us-nd-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-nd-all.js">North Dakota</a>'
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
map: 'countries/nl/nl-zh-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/nl/nl-zh-all.js">Zuid-Holland</a>'
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
