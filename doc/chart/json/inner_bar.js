var chart = jui.include("chart.builder"),
    theme = jui.include("chart.theme.jennifer");

chart("#chart-content", {
    data : [
        { quarter : "1Q", sales : 50, profit : 45 },
        { quarter : "2Q", sales : 30, profit : 25 },
        { quarter : "3Q", sales : 15, profit : 10 },
        { quarter : "4Q", sales : 60, profit : 55 }
    ],
    grid : {
        y : {
            target : "quarter",
            line : true 
        },
        x : {
            type : "range",
            target : [ "sales", "profit" ],
            step : 10,
      		line : true 
        }
    },
    brush : [{
        type : "bar",
        target : "sales",
        colors : [ theme.colors[0] ],
        outerPadding : 25
    }, {
        type : "bar",
        target : "profit",
        colors : [ theme.colors[2] ],
        outerPadding : 50
    }],
    widget : [
        { type : "title", text : "Bar Sample" },
        { type : "tooltip", position : "right", brush : [ 0, 1 ] },
        { type : "legend", brush : [ 0, 1 ] }
    ]
});