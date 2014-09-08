var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { name : 3, value : 8 },
        { name : 6, value : 9 },
        { name : 6, value : 5 },
        { name : 8, value : 12 }
    ],
    grid : {

        x : {
            domain : [ "week1", "week2", "week3", "week4" ],
            line : true
        },
        y : {
            type : 'range',
            target : [ "name", "value" ],
            step : 10
        }
    },
    brush : [
          { type : 'line', symbol: "step" }
    ]
}).render();
