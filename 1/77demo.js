// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['us-nm-031', 0],
    ['us-nm-043', 1],
    ['us-nm-045', 2],
    ['us-nm-049', 3],
    ['us-nm-006', 4],
    ['us-nm-028', 5],
    ['us-nm-047', 6],
    ['us-nm-001', 7],
    ['us-nm-023', 8],
    ['us-nm-013', 9],
    ['us-nm-009', 10],
    ['us-nm-007', 11],
    ['us-nm-025', 12],
    ['us-nm-033', 13],
    ['us-nm-041', 14],
    ['us-nm-011', 15],
    ['us-nm-003', 16],
    ['us-nm-029', 17],
    ['us-nm-017', 18],
    ['us-nm-039', 19],
    ['us-nm-061', 20],
    ['us-nm-055', 21],
    ['us-nm-005', 22],
    ['us-nm-027', 23],
    ['us-nm-053', 24],
    ['us-nm-057', 25],
    ['us-nm-037', 26],
    ['us-nm-021', 27],
    ['us-nm-035', 28],
    ['us-nm-019', 29],
    ['us-nm-059', 30],
    ['us-nm-051', 31],
    ['us-nm-015', 32]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/us/us-nm-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-nm-all.js">New Mexico</a>'
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
3', 65],
    ['us-ga-065', 66],
    ['us-ga-185', 67],
    ['us-ga-165', 68],
    ['us-ga-321', 69],
    ['us-ga-127', 70],
    ['us-ga-191', 71],
    ['us-ga-207', 72],
    ['us-ga-221', 73],
    ['us-ga-219', 74],
    ['us-ga-027', 75],
    ['us-ga-289', 76],
    ['us-ga-205', 77],
    ['us-ga-119', 78],
    ['us-ga-095', 79],
    ['us-ga-161', 80],
    ['us-ga-271', 81],
    ['us-ga-315', 82],
    ['us-ga-093', 83],
    ['us-ga-281', 84],
    ['us-ga-215', 85],
    ['us-ga-263', 86],
    ['us-ga-265', 87],
    ['us-ga-141', 88],
    ['us-ga-017', 89],
    ['us-ga-013', 90],
    ['us-ga-297', 91],
    ['us-ga-147', 92],
    ['us-ga-195', 93],
    ['us-ga-003', 94],
    ['us-ga-173', 95],
    ['us-ga-101', 96],
    ['us-ga-019', 97],
    ['us-ga-277', 98],
    ['us-ga-293', 99],
    ['us-ga-197', 100],
    ['us-ga-259', 101],
    ['us-ga-273', 102],
    ['us-ga-177', 103],
    ['us-ga-217', 104],
    ['us-ga-211', 105],
    ['us-ga-059', 106],
    ['us-ga-053', 107],
    ['us-ga-011', 108],
    ['us-ga-103', 109],
    ['us-ga-029', 110],
    ['us-ga-155', 111],
    ['us-ga-109', 112],
    ['us-ga-031', 113],
    ['us-ga-091', 114],
    ['us-ga-309', 115],
    ['us-ga-143', 116],
    ['us-ga-069', 117],
    ['us-ga-267', 118],
    ['us-ga-129', 119],
    ['us-ga-123', 120],
    ['us-ga-111', 121],
    ['us-ga-319', 122],
    ['us-ga-167', 123],
    ['us-ga-125', 124],
    ['us-ga-209', 125],
    ['us-ga-089', 126],
    ['us-ga-151', 127],
    ['us-ga-243', 128],
    ['us-ga-307', 129],
    ['us-ga-255', 130],
    ['us-ga-035', 131],
    ['us-ga-039', 132],
    ['us-ga-083', 133],
    ['us-ga-051', 134],
    ['us-ga-073', 135],
    ['us-ga-241', 136],
    ['us-ga-183', 137],
    ['us-ga-007', 138],
    ['us-ga-275', 139],
    ['us-ga-099', 140],
    ['us-ga-055', 141],
    ['us-ga-291', 142],
    ['us-ga-257', 143],
    ['us-ga-047', 144],
    ['us-ga-107', 145],
    ['us-ga-071', 146],
    ['us-ga-239', 147],
    ['us-ga-025', 148],
    ['us-ga-049', 149],
    ['us-ga-227', 150],
    ['us-ga-303', 151],
    ['us-ga-133', 152],
    ['us-ga-159', 153],
    ['us-ga-301', 154],
    ['us-ga-113', 155],
    ['us-ga-075', 156],
    ['us-ga-043', 157],
    ['us-ga-313', 158]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/us/us-ga-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-ga-all.js">Georgia</a>'
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
