$(document).ready(function() {
    var SparklineCharts = function() {

        $('#sparkline1').sparkline([20, 40, 30], {
            type: 'pie',
            height: '200',
            resize: true,
            sliceColors: ['#ed7f22', '#04b1c7', '#e9ecef']
        });

        $("#sparkline2").sparkline([5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10, 4, 7, 10], {
            type: 'bar',
            height: '200',
            barWidth: 10,
            barSpacing: 7,
            barColor: '#ed7f22'
        });

        $('#sparkline3').sparkline([5, 6, 2, 9, 4, 7, 10, 12, 4, 7, 10], {
            type: 'bar',
            height: '200',
            barWidth: '10',
            resize: true,
            barSpacing: '7',
            barColor: '#04b1c7'
        });
        $('#sparkline3').sparkline([5, 6, 2, 9, 4, 7, 10, 12, 4, 7, 10], {
            type: 'line',
            height: '200',
            lineColor: '#ed7f22',
            fillColor: 'transparent',
            composite: true,
            lineWidth: 2,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)'
        });

        $("#sparkline4").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
            type: 'line',
            width: '100%',
            height: '200',
            lineColor: '#04b1c7',
            fillColor: 'transparent',
            spotColor: '#04b1c7',
            lineWidth: 2,
            minSpotColor: undefined,
            maxSpotColor: undefined,
            highlightSpotColor: undefined,
            highlightLineColor: undefined
        });
        $('#sparkline5').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
            type: 'line',
            width: '100%',
            height: '200',
            chartRangeMax: 50,
            resize: true,
            lineColor: '#04b1c7',
            fillColor: 'rgba(91, 140, 232, 0.3)',
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });

        $('#sparkline5').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
            type: 'line',
            width: '100%',
            height: '200',
            chartRangeMax: 40,
            lineColor: '#ed7f22',
            fillColor: 'rgba(241, 180, 76, 0.3)',
            composite: true,
            resize: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });

        $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
            type: 'discrete',
            width: '280',
            height: '200',
            lineColor: '#ffffff'
        });

        $('#sparkline7').sparkline([10, 12, 12, 9, 7], {
            type: 'bullet',
            width: '280',
            height: '80',
            targetColor: '#04b1c7',
            performanceColor: '#ed7f22'
        });
        $('#sparkline8').sparkline([4, 27, 34, 52, 54, 59, 61, 68, 78, 82, 85, 87, 91, 93, 100], {
            type: 'box',
            width: '280',
            height: '80',
            boxLineColor: '#aec936',
            boxFillColor: '#f1f1f1',
            whiskerColor: '#aec936',
            outlierLineColor: '#aec936',
            medianColor: '#aec936',
            targetColor: '#aec936'
        });
        $('#sparkline9').sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
            height: '80',
            width: '100%',
            type: 'tristate',
            posBarColor: '#556ee6',
            negBarColor: '#ed7f22',
            zeroBarColor: '#f46a6a',
            barWidth: 8,
            barSpacing: 3,
            zeroAxis: false
        });



    }
    var sparkResize;

    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(SparklineCharts, 500);
    });
    SparklineCharts();

});