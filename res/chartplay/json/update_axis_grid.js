var chart = jui.include("chart.builder");

var c = chart("#chart", {
    axis: {
        x: {
            type : "block",
            domain : "quarter",
            line : true
        },
        y: {
            type : "range",
            domain : [ 0, 10000 ],
            //step : 4
        },
        data: [
            { quarter : "1Q", sales : 2100, profit : 1800 },
            { quarter : "2Q", sales : 6000, profit : 4400 },
            { quarter : "3Q", sales : 8300, profit : 6700 },
            { quarter : "4Q", sales : 5200, profit : 4800 }
        ]
    }
});

// After 5 seconds, update axis grid
setTimeout(function() {
    var axis = c.axis(0);

    axis.updateGrid("y", {
        type : "block",
        domain : "quarter",
        line : true
    });

    axis.updateGrid("x", {
        type : "range",
        domain : [ 0, 10000 ],
        //step : 4
    });
}, 5000);