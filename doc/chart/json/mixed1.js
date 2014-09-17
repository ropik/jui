var chart = jui.include('chart.basic');

chart("#chart-content", {
    width: 400,
    height : 400,
    padding: { top : 0 },
    data : [
        { name : 2, value : 15, domain: "week1" },
        { name : 13, value : 6, domain: "week2" },
        { name : 8, value : 10, domain: "week3" },
        { name : 2, value : 5, domain: "week4" },
    ],
    grid : {
        x : {
            target : "domain",
            line : true
        },
        y :
        {
            type : 'range',
            target : [ "name", "value" ],
            step : 10
        }
    },
    series : {
        name : { text : "test" },
        value : { text : "test" }
    },
    brush : [
        { type : "column", target : "value", colors : [ "#7977C2" ] },
        { type : "line", symbol: "curve", target : "name", colors : [ "#7BBAE7" ] },
        { type : "scatter", size: 7, target : "name", colors : [ "#7BBAE7" ] }
    ]
}).render();
