var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { name : 2, value : 15, test : 7 },
        { name : -15, value : 6, test : 2 },
        { name : 8, value : 10, test : 5 },
        { name : 18, value : 5, test : 12 }
    ],
    grid : {
        x : {
            domain : [ "week1", "week2", "week3", "week4" ],
            full: true,
            line : true
        },
        y : {
            type : 'range',
            target : [ "name", "value", "test" ],
            step : 10
        }
    },
    brush : [{
        type : "area",
        symbol: "curve"
    }, {
        type : "line",
        symbol: "curve"
    }]
}).render();