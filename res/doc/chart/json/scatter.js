var chart = jui.include("chart.builder");
var data = [
    { sales: 2, profit: 15, total: 20 },
    { sales: 15, profit: 6, total: 20 },
    { sales: 8, profit: 10, total: 20 },
    { sales: 18, profit: 5, total: 20 }
];

chart("#chart", {
    axis : {
        x : {
            type : "block",
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            line : true
        },
        y : {
            type : "range",
            domain : "total",
            step : 10
        },
        data : data
    },
    series : {
        sales : { symbol : "rectangle" },
        profit : { symbol : "cross" },
        total : { symbol : "triangle" }
    },
    brush : {
        type: "scatter",
        size: 10
    },
    widget : [
        { type : "title", text : "Scatter Sample"},
        { type : "tooltip" }
    ]
});