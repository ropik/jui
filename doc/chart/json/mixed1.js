var chart = jui.include("chart.builder");

chart("#chart-content", {
    data : [
        { quarter : "1Q", sales : 49, profit : 35 },
        { quarter : "2Q", sales : 38, profit : 30 },
        { quarter : "3Q", sales : 10, profit : 4 },
        { quarter : "4Q", sales : 30, profit : 24 }
    ],
    grid : {
        x : {
            target : "quarter",
            line : true
        },
        y : {
            type : "range",
            target : "sales",
            step : 10
        }
    },
    brush : [
        { type : "column", target : "profit", colors : [ "#7977C2" ] },
        { type : "line", target : "sales", colors : [ "#7BBAE7" ], symbol: "curve" },
        { type : "scatter", target : "sales", colors : [ "#7BBAE7" ], size: 7 }
    ],
    widget : [
    	{ type : "title", text : "Combination Sample" },
    	{ type : "legend", brush : [ 0, 1 ] }
    ]
});
