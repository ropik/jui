var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { name : 2, value : 15 },
        { name : 5, value : 11 },
        { name : 8, value : 10 },
        { name : 1, value : 12 },
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
        },
        y1 : {
            type : "range",
            target : function(data) {
                return data.name + data.value + 10;
            },
            step : 10
        }
    },
    brush : [
        { type : 'line', target : "name", colors : [ "red" ]},
        { type : 'line', target : "value", y1 : 0, colors : [ "blue" ]   }

    ]
}).render();
