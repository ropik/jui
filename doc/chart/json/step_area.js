var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { name : 5, value : 8, test : 0 },
        { name : 6, value : 9, test : 2 },
        { name : 8, value : 12, test : 6 },
        { name : 11, value : 14, test :9 }
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
        symbol: "step"
    }, {
        type : "line",
        symbol: "step"
    }]
}).render();