var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { name : 2, value : 15 },
        { name : -15, value : 6 },
        { name : 8, value : 10 },
        { name : 18, value : 5 },
    ],
    grid : {

        x : {
            domain : [ "week1", "week2", "week3", "week4" ],
            line : true
        },
        y : {
            type : 'range',
            target : ["name", "value"],
            step : 10,
            line : true
        }
    },
    brush : { type : 'column', target : ['name', 'value'] }
}).render();
