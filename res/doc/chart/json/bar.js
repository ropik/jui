var chart = jui.include("chart.builder");
var data = [
    { quarter : "1Q", sales : 50, profit : 35 },
    { quarter : "2Q", sales : -20, profit : -30 },
    { quarter : "3Q", sales : 10, profit : -5 },
    { quarter : "4Q", sales : 30, profit : 25 }
];

chart("#chart-content", {
    axis : {
        x : {
            type : "range",
            domain: function(d) { return Math.max(d.sales, d.profit); },
            step : 10,
            unit : 4,
            line : true
        },
        y : {
            type : "block",
            domain : "quarter",
            line : true 
        },
        data : data
    },
    brush : {
        type : "bar",
        target : [ "sales", "profit"]
    },
    widget : [
        { type : "title", text : "Bar Sample" },
        { type : "tooltip", orient: "right" },
        { type : "legend" }
    ]
});