//
// Total Revenue Chart
//
var options1 = {
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54]
    }],
    fill: {
        colors: ['#04b1c7']
    },
    chart: {
        type: 'bar',
        width: 70,
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart1 = new ApexCharts(document.querySelector("#total-revenue-chart"), options1);
chart1.render();

//
// Orders Chart
//
var options = {
    fill: {
        colors: ['#aec936']
    },
    series: [70],
    chart: {
        type: 'radialBar',
        width: 45,
        height: 45,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '60%'
            },
            track: {
                margin: 0
            },
            dataLabels: {
                show: false
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#orders-chart"), options);
chart.render();


// 
// Customers Chart
//

var options = {
    fill: {
        colors: ['#04b1c7']
    },
    series: [55],
    chart: {
        type: 'radialBar',
        width: 45,
        height: 45,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '60%'
            },
            track: {
                margin: 0
            },
            dataLabels: {
                show: false
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#customers-chart"), options);
chart.render();


// 
// Growth Chart
//
var options2 = {
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    fill: {
        colors: ['#ed7f22']
    },
    chart: {
        type: 'bar',
        width: 70,
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart2 = new ApexCharts(document.querySelector("#growth-chart"), options2);
chart2.render();


//
// Sales Analytics Chart

var options = {
    chart: {
        height: 339,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: [0, 2, 4],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '30%'
        }
    },
    colors: ['#04b1c7', '#dfe2e6', '#ed7f22'],
    series: [{
        name: 'Penjualan',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Pengunjung',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Pengguna',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
        size: 0
    },

    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        title: {
            text: '',
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function(y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + "";
                }
                return y;

            }
        }
    },
    grid: {
        borderColor: '#f1f1f1'
    }
}

var chart = new ApexCharts(
    document.querySelector("#sales-analytics-chart"),
    options
);

chart.render();