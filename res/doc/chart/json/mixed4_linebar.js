var chart = jui.include("chart.builder");
var time = jui.include("util.time");

var columnData = [],
    lineData = [];

function generateChartData() {
    var firstDate = new Date();
    firstDate.setTime(firstDate.getTime() - 10 * 24 * 60 * 60 * 1000);

    for (var i = firstDate.getTime(); i < (firstDate.getTime() + 10 * 24 * 60 * 60 * 1000); i += 60 * 60 * 1000) {
        var newDate = new Date(i);

        if (i == firstDate.getTime()) {
            var value1 = Math.round(Math.random() * 10) + 1;
        }
        else {
            var value1 = Math.round(lineData[lineData.length - 1].value / 100 * (90 + Math.round(Math.random() * 20)) * 100) / 100;
        }

        if (newDate.getHours() == 12) {
            // we set daily data on 12th hour only
            var value2 = Math.round(Math.random() * 12) + 1;
            columnData.push({
                date: newDate,
                value: value2
            });
        }
        else {
            lineData.push({
                date: newDate,
                value: value1
            });
        }
    }
}

generateChartData();

chart("#chart", {
    axis : {
        top1 : {
            x : {
                type : "block",
                target : "date",
                format : function(d) {
                    return time.format(d, "MM-dd");
                }
            },
            y : {
                type : "range",
                target : function(d) {
                    return d.value + 10;
                },
                step : 5,
                line : true
            },
            data : columnData
        },
        top2 : {
            x : {
                type : "block",
                target : "date",
                format : function(d) {
                    return "";
                }
            },
            y : {
                extend : "top1"
            },
            data : lineData
        }
    },
    brush : [{
        type : "column",
        target : "value",
        axis : "top1"
    }, {
        type : "line",
        target : "value",
        axis : "top2",
        colors : [ 2 ]
    }]
});
