var chart = jui.include("chart.builder");

chart("#chart-content", {
    data : [
        { quarter : "1Q", sales : [10,50], profit : [10,35] },
        { quarter : "2Q", sales : [-20,5], profit : [-30,7] },
        { quarter : "3Q", sales : [10,30], profit : [0,30] },
        { quarter : "4Q", sales : [35,70], profit : [30,60] }
    ],
    grid : {
        y : {
            target : "quarter",
            line : true 
        },
        x : {
            type : "range",
            domain : [ -40, 80 ],
            step : 10,
      		line : true 
        }
    },
    brush : {
        type : "rangebar",
        target : [ "sales", "profit" ],
        outerPadding : 20
    },
    widget : [
        { type : "title", text : "Bar Sample" },
        { type : "tooltip", position: "right" },
        { type : "legend" }
    ]
});