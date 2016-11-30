////DashBoard Charts 1

$(function () {
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Top Countries by Rounds 2015 YTD'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Companies',
            colorByPoint: true,
            data: [{
                name: 'United States',
                y: 7851
            }, {
                name: 'United Kingdom',
                y: 810,
                sliced: true,
                selected: true
            }, {
                name: 'India',
                y: 771
            }, {
                name: 'Canada',
                y: 388
            }, {
                name: 'Germany',
                y: 265
            }, {
                name: 'Israel',
                y: 236
            }, {
                name: 'China',
                y: 227
            }, {
                name: 'France',
                y: 203
            }, {
                name: 'Australia',
                y: 149
            }, {
                name: 'Spain',
                y: 144
            }, {
                name: 'Singapore',
                y: 141
            }, {
                name: 'Netherlands',
                y: 136
            }, {
                name: 'Sweden',
                y: 126
            }, {
                name: 'Japan',
                y: 105
            }, {
                name: 'Switzerland',
                y: 101
            }, {
                name: 'Italy',
                y: 86
            }, {
                name: 'Brazil',
                y: 81
            }, {
                name: 'Ireland',
                y: 77
            }, {
                name: 'Denmark',
                y: 75
            }, {
                name: 'Finland',
                y: 70
            }, {
                name: 'Indonesia',
                y: 67
            }, {
                name: 'Hong Kong',
                y: 67
            }, {
                name: 'South Korea',
                y: 67
            }, {
                name: 'Bulgaria',
                y: 45
            }, {
                name: 'Russia',
                y: 44
            }
]
        }]
    });
});

////DashBoard Charts 2

$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Top Regions by Investment 2015 YTD'
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['SF Bay Area','New York City','Boston','London','Los Angeles','Seattle','Chicago','Austin','San Diego','Washington D.C.','Denver','Salt Lake City','Raleigh','Atlanta','Toronto','Dallas','Baltimore','Philadelphia','Miami','Vancouver','Detroit','Phoenix','St. Louis','Montreal','Bakersfield'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Money (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Angel',
            data: [41311288,15765683,3320000,47302417,2513000,8080495,2005000,4300000,4902495,2378800,1400000,2500000,1597589,10750000,40000000,4904999,1700000,1000000,1141377,750000,1000000,1570750,1800000,3000000,5000000]
        }, {
            name: 'Seed',
            data: [27684982912,7127720128,5722220072,3740724045,2984580107,2672872113,1122539815,988732026,1278382397,1249093300,858676291,1003287385,831537497,811208022,808564399,710470063,658296521,611015964,530412282,411969682,481637201,439835888,420497503,277357500,271957938]
        }, {
            name: 'Venture',
            data: [682819821,314146953,122191793,219788758,159473573,290254394,35635000,65506062,20068790,51168081,49765104,29534233,25420604,19246000,56537307,19765191,12250000,18949622,16153160,17570346,11861556,18034957,16010000,12374470,13620000]
        }]
    });
});


//DashBoard chart 3

$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Funding Total by Quarter'
        },
        subtitle: {
            text: 'CrunchBase'
        },
        xAxis: {
            categories: ['2012-Q1','2012-Q2','2012-Q3','2012-Q4','2013-Q1','2013-Q2','2013-Q3','2013-Q4','2014-Q1','2014-Q2','2014-Q3','2014-Q4','2015-Q1','2015-Q2','2015-Q3','2015-Q4']
        },
        yAxis: {
            title: {
                text: 'Investment (in millions)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Angel',
            data: [189,94,113,141,133,137,122,131,217,187,128,138,123,95,172,578]
        }, {
            name: 'Venture',
            data: [10096,11663,10102,8707,9026,10702,11233,14767,17864,22368,19770,26705,28179,28468,32672,18239]
        },{
            name: 'Seed',
            data: [524,509,507,551,776,750,997,872,895,867,949,1201,1046,1039,1150,699]
        },{
            name: 'Private Equity',
            data: [3448,3516,4230,2995,3041,4996,5984,6467,6262,6665,12114,8986,5936,7380,10769,4743]
        }]
    });
});
