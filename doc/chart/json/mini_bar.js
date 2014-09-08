var chart = jui.include('chart.basic');

chart("#chart", {
    width: 100,
    height :50,
    widget : 'empty',
    data : [
        { name : 2, value : 15 },
        { name : -15, value : 6 },
        { name : 8, value : 10 },
        { name : 18, value : 5 },
    ],
    grid : {
        x : {
            domain : [ "week1", "week2", "week3", "week4" ],
            line : true,
            hide : true
        },
        y : {
            type : 'range',
            target : ["name", "value"],
            step : 10,
            hide : true
        }
    },
    brush : { type : 'column', target : ['name', 'value'] }
}).render();
