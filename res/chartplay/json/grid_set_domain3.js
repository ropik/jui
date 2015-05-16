var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : [{
        x : {
            type : "block",
            domain : "quarter" // Not a callback
        },
        y : {
            type : "range",
            domain : function(d) {
                return Math.max(d.sales, d.profit) + 50;
            },
            step : 5
        },
        data : [
            { quarter : "1Q", sales : 50, profit : 35 },
            { quarter : "2Q", sales : 20, profit : 30 },
            { quarter : "3Q", sales : 10, profit : 5 },
            { quarter : "4Q", sales : 30, profit : 25 }
        ]
    }],
    brush : [{
        type : "column",
        outerPadding : 20,
        target : [ "sales", "profit" ]
    }]
});